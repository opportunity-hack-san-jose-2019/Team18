var ENV_VAR = require('./config/config');
var mysql = require('mysql')
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var morgan = require('morgan');
var bcrypt = require('bcryptjs');

app.use(express.static('uploads'));
app.use(bodyParser.json());

// Log requests to console
app.use(morgan('dev'));

app.use(cors({ origin: ENV_VAR.CORS_ORIGIN, credentials: true }));
app.use(session({
    secret: 'opportunity_hack',
    resave: true, // Forces the session to be saved back to the session store, even if the session was never modified during the request
    saveUninitialized: false, // Force to save uninitialized session to db. A session is uninitialized when it is new but not modified.
    duration: 60 * 60 * 1000,    // Overall duration of Session : 30 minutes : 1800 seconds
    activeDuration: 5 * 60 * 1000
}));

//Allow Access Control
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', ENV_VAR.CORS_ORIGIN);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'intervmatch'
})

/* 
API CALLS START
*/

///////////////////////////////////////// SIGN UP ///////////////////////////////////////////////////////////
app.post('/signup', function (req, res) {
    console.log("Inside Signup Request");
    console.log("Req Body : ", req.body);
    var salt = bcrypt.genSaltSync(10);
    // Hash the password with the salt

    if (req.body.email && req.body.password && req.body.role) {
        var hash = bcrypt.hashSync(req.body.password, salt);
        con.query("INSERT INTO logintable (fullname, email, password, role) VALUES(?,?,?,?)", [req.body.fullname, req.body.email, hash, req.body.role], function (err, result) {
            if (err) {
                console.log("here2", err)
                res.writeHead(400, {
                    'Content-Type': 'text/plain'
                })
                res.end("Invalid Credentials");
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/plain'
                })
                res.end("Successful signup");
            }
        })
    } else {
        console.log("here")
        res.writeHead(400, {
            'Content-Type': 'text/plain'
        })
        res.end("Invalid Credentials");
    }
});
///////////////////////////////////////// SIGN UP ///////////////////////////////////////////////////////////

///////////////////////////////////////// LOGIN ///////////////////////////////////////////////////////////
app.post('/login', function (req, res) {
    console.log("Inside Login Post Request");
    //console.log("Req Body : ", username + "password : ",password);
    console.log("Req Body : ", req.body);

    if (req.body.email && req.body.password && req.body.role) {
        var qry = "SELECT * FROM logintable WHERE email =" + mysql.escape(req.body.email) + "AND role=" + mysql.escape(req.body.role);
        console.log(qry)
        con.query(qry, function (err, result) {
            if (err) {
                console.log("here3")
                res.writeHead(400, {
                    'Content-Type': 'text/plain'
                })
                res.end("No Such User");
            }
            // console.log(result[0].password, req.body.password)
            if (result.length > 0 && bcrypt.compareSync(req.body.password, result[0].password)) {
                // res.cookie('cookie', "admin", { maxAge: 900000, httpOnly: false, path: '/' });
                console.log(result[0])
                req.session.user = result[0];
                res.writeHead(200, {
                    'Content-Type': 'text/plain'
                })
                res.end("Successful Login");
            }
            else {
                console.log("here2")
                res.writeHead(400, {
                    'Content-Type': 'text/plain'
                })
                res.end("No Such User");
            }
        })

    } else {
        console.log("here")
        res.writeHead(400, {
            'Content-Type': 'text/plain'
        })
        res.end("Invalid Credentials");
    }
});
///////////////////////////////////////// LOGIN ///////////////////////////////////////////////////////////

///////////////////////////////////////// Event Creation ///////////////////////////////////////////////////////////
app.post('/eventcreation', function (req, res) {
    console.log("Inside Event Creation Request");
    console.log("Req Body : ", req.body);

    if (req.body.eventname && req.body.startdate && req.body.enddate && req.body.slotduration && req.body.breaktime) {
        con.query("INSERT INTO events (eventname, startdate, enddate, slotduration, breaktime) VALUES(?,?,?,?,?)", [req.body.eventname, req.body.startdate, req.body.enddate, req.body.slotduration, req.body.breaktime], function (err, result) {
            if (err) {
                console.log("here2", err)
                res.writeHead(400, {
                    'Content-Type': 'text/plain'
                })
                res.end("Invalid Credentials");
            } else {
                res.writeHead(200, {
                    'Content-Type': 'text/plain'
                })
                res.end("Successful signup");
            }
        })
    } else {
        console.log("here")
        res.writeHead(400, {
            'Content-Type': 'text/plain'
        })
        res.end("Invalid Credentials");
    }
});
///////////////////////////////////////// Event Creation ///////////////////////////////////////////////////////////


///////////////////////////////////////// Event List ///////////////////////////////////////////////////////////
app.post('/eventlist', function (req, res) {
    console.log("Inside Event List Request");

    con.query("SELECT * FROM events", function (err, result) {
        if (err) {
            console.log("here2", err)
            res.writeHead(400, {
                'Content-Type': 'text/plain'
            })
            res.end("Error in getting Events List");
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/plain'
            })
            res.end(JSON.stringify(result));
        }
    })

});
///////////////////////////////////////// Event List ///////////////////////////////////////////////////////////

app.listen(ENV_VAR.PORT);
console.log("Server running on port " + ENV_VAR.PORT);