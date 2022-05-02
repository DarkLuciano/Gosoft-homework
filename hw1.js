const express = require('express');
const app = express();
const port = 4100;

app.use(express.json());

const userData = require('./user.json');

let Fname;
let Lname;
let Id;
let Position;
let Tel;
let Email;

app.get('/getData', (req, res) => {
    res.send({ userData });
});

app.put('/update', (req, res) => {
    let idupdate = req.body.idupdate;


    Fname = req.body.Fname;
    Lname = req.body.Lname;
    Id = req.body.Id;
    Position = req.body.Position;
    Tel = req.body.Tel;
    Email = req.body.Email;

    console.log(idupdate)

    for (let i = 0; i < userData.length; i++) {
        if (Email === userData[i].Email || Tel === userData[i].Tel) {
            return res.status(400).send("Bad Request");
        }
        if (idupdate == userData[i].Id) {
            userData.splice(i, 1, {
                Fname: Fname,
                Lname: Lname,
                Id: Id,
                Position: Position,
                Tel: Tel,
                Email: Email
            });
            return res.send('update success');
        }
    }
    return res.status(400).send("Bad Request");

});

app.post('/create', (req, res) => {
    Fname = req.body.Fname;
    Lname = req.body.Lname;
    Id = req.body.Id;
    Position = req.body.Position;
    Tel = req.body.Tel;
    Email = req.body.Email;

    for (let i = 0; i < userData.length; i++) {

        if (Email === userData[i].Email || Tel === userData[i].Tel) {
            return res.status(400).send("Bad Request");
        }
    }
    userData.push({
        Fname: Fname,
        Lname: Lname,
        Id: Id,
        Position: Position,
        Tel: Tel,
        Email: Email
    })

    return res.send("Add datasuccess");
});

app.delete('/delete', (req, res) => {

    Id = req.body.Id;
    for (let i = 0; i < userData.length; i++) {
        console.log(userData[i])
        if (Id == userData[i].Id) {
            userData.splice(i, 1);
            return res.send('delete success');
        }
    }
    return res.status(400).send("Bad Request");


});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});