# Team18 - Team Mavericks
## Gist
We built a web application for interviewer - interviewee mapping by using React.js, Node.js, MySQL, and a recommendation system

## Inspiration
As college students, we realize the challenge an interview can present and wanted to help other students prep for the upcoming interviews and first impressions ahead of them.

## What it does
This web application allows you to sign up, fill up a form with your skill level, language preference, topic preference, referred times, role, and preferred locations. On finding a match (using collaborative filtering), you get an email with contact info of the interviewer, and confirmation of the mock interview or study session. You then get periodic emails to remind you of the interview. 

### Collaborative filtering
``` 
        cos(A.B) =A.B/|A||B|   
```
where, <br>
A : Student vector   <br>
B : Interviewer vector  <br>
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
Have the libraries installed
- Run the command:
```
    pip install -r requirements.txt
```
## Running 
After running the install command, start the project using the command:
```
    npm start
```
After executing the `start` command, the project will open in the browser with the url:
```
        http://localhost:3000/
```
`3000` is the default port where a node.js project is executed.

### References
- Problem Statement by [Braven](https://bebraven.org/)
