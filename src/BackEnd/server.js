const express = require('express')
const app = express()
const port = 4000
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

app.use(express.static(path.join(__dirname, '../../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

// app.use(cors());
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//     res.header("Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const mongoDB = 'mongodb+srv://admin:admin@cluster0-cofws.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true });

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    genre: String,
    year: String,
    cover: String
})

const BookModel = mongoose.model('book', bookSchema);

app.post('/api/books', (req, res) => {
    console.log('Post request successful');
    console.log(req.body.genre);
    console.log(req.body.year);
    console.log(req.body.cover);
   // res.json('Data uploaded');


    BookModel.create({
        genre: req.body.genre,
        year: req.body.year,
        cover: req.body.cover
    });
    res.json('Item added');
})

app.get('/api/books', (req, res) => {

    BookModel.find((err, data) => {
        console.log(data);
        res.json({ book : data })
    });
})

app.delete('/api/books/:id', (req, res) => {
    console.log(req.params.id);

    BookModel.deleteOne({ _id: req.params.id }, (error, data) => {
        if (error)
            res.json(error);
        res.json(data);
    })
})

app.put('/api/books/:id', (req, res)=>{
    console.log("Edit: " +req.params.id);

    BookModel.findByIdAndUpdate(req.params.id, 
        req.body, 
        {new:true},
        (error, data)=>{
            res.json(data);
        })
})

app.get('/api/books/:id', (req, res) => {
    console.log(req.params.id);

    BookModel.findById(req.params.id,
        (error, data) => {
            res.json(data);
        });
})

/*USER SIGN UP*/

const userSchema = new Schema({
    username: String,
    email: Strng,
})

const UserModel = mongoose.model('user', userSchema);
//copy of user post
app.post('/api/users', (req, res) => {
    console.log('Post request successful!!!');
    console.log('Name '+req.body.username);
    console.log('Email '+req.body.email);
    //res.json('Data uploaded');

    UserModel.create({
        username: req.body.username,
        email: req.body.email
    });
    res.json('Item added');
})

/*USER SIGN UP END */

app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/../../build/index.html'));
    });

app.listen(port, () => console.log(`Example app listening on port ${port}!`))