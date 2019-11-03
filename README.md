# Team18 - Team Mavericks
## Gist
We built a web application for interviewer - interviewee mapping by using React.js, Node.js, MySQL.

## Inspiration
As college students, we realize the challenge an interview can present and wanted to help other students prep for the upcoming interviews and first impressions ahead of them.

## What it does
This web application allows you to sign up, fill up a form with your skill level, language preference, topic preference, referred times, role, and preferred locations. On finding a match (using collaborative filtering), you get an email with contact info of the interviewer, and confirmation of the mock interview or study session. You then get periodic emails to remind you of the interview. 

### Collaborative filtering
$Cos(A.B) =$$A.B/|A||B|$  
$A$ : Student vector   
$B$ : Interviewer vector  
The best match between a student and an interviewer is based on the angle between the A and B. Higher the cosine similarity, lesser the angle. 

## Requirements
- Have [Node.js](https://nodejs.org/en/) installed on your system.
- Clone this repository using the command:
```
    git clone https://github.com/opportunity-hack-san-jose-2019/Team18.git
```
- Run the command:
```
    npm install
```

## Running 
After running the install command, start the project using the command:
```
    npm start
```



### References
- Problem Statement by [Braven](https://bebraven.org/)
