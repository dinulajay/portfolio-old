const express = require("express");

const ejs = require("ejs");

const bodyParser = require("body-parser");

app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"))

app.get("/", (req,res) => {
    
    res.render("home");
    
});

app.get("/:random", (req,res) => {
    
    if ( req.params.random === "computer-science")
        res.render("comp_sci");
    else if( req.params.random === "about" )
        res.render("about");
    else if( req.params.random === "editor"){
        res.render("editor")
    }
    
});

app.post("/editor", (req, res) => {
    
    res.render("preview",{title:req.body.title,body:req.body.content});
    
})

app.listen("3000", () => {
    
    console.log("Dinula's listening to you");
    
});