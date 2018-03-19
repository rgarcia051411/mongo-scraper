var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongojs = require('mongojs');
var request = require('request');
var cheerio = require('cheerio');

var { mongoose } = require('./db/mongoose.js');
var {Comment} = require('./models/comment');


var app = express();

app.use(bodyParser.json());

var PORT = 3000;

// Database Configuration
var databaseUrl = "scraper";
var collections = ["scrapedData"];
var url = "";

// Hooking mongojs to the database variable
var db = mongojs(databaseUrl, collections);
db.on("error", (err) => {
    return console.log("Database Error");
});

// Main route Just to test if it's connection
app.get("/", (req, res) => {
    res.send("Connected");
});


app.get('/all', (req, res, html) => {
    db.scrapedData.find({}, (err, data) => {
        if (!err) {
            res.json(found);

        }
        return console.log(data);
    });
});



//Scrape data from a website
app.get('/scrape', (req, res) => {
    request(url, (err, res, html) => {
        var $ = cheerio.load(html);


    });
    

});

app.post('/comments', (req, res) => {
	var comment = new Comment ({
		title: req.body.title,
		comment:req.body.comment
	});

	comment.save().then((doc) => {  
		res.send(doc)
	}, (error) => {
		res.status(400).send(error);

	});
});
 



app.listen(PORT,() => {
    return console.log(`App is running on ${PORT} !`);
});