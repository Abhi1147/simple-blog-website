const express=require("express");
var app=express();
app.set("view engine","ejs");
var path = require('path');
var bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, "public")));
var _=require("lodash");

var home_content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vero laborum, aperiam quaerat harum iure, expedita, atque explicabo fuga omnis inventore accusamus quam distinctio quidem suscipit illum nobis. Nisi temporibus quidem nam laborum iure maxime cumque sconsequuntur! Expedita officia ut illum iure ipsum obcaecati temporibus unde ex natus. Modi, ex, incidunt, eaque consequuntur molestias earum voluptates placeat nisi assumenda animi quis magni. Sit tenetur consectetur, aperiam accusamus numquam voluptates nulla debitis.";

var about_content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vero laborum, aperiam quaerat harum iure, expedita, atque explicabo fuga omnis inventore accusamus quam distinctio quidem suscipit illum nobis. Nisi temporibus quidem nam laborum iure maxime cumque sconsequuntur! Expedita officia ut illum iure ipsum obcaecati temporibus unde ex natus. Modi, ex, incidunt, eaque consequuntur molestias earum voluptates placeat nisi assumenda animi quis magni. Sit tenetur consectetur, aperiam accusamus numquam voluptates nulla debitis.";

var contact_content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vero laborum, aperiam quaerat harum iure, expedita, atque explicabo fuga omnis inventore accusamus quam distinctio quidem suscipit illum nobis. Nisi temporibus quidem nam laborum iure maxime cumque sconsequuntur! Expedita officia ut illum iure ipsum obcaecati temporibus unde ex natus. Modi, ex, incidunt, eaque consequuntur molestias earum voluptates placeat nisi assumenda animi quis magni. Sit tenetur consectetur, aperiam accusamus numquam voluptates nulla debitis.";

var posts=[];
app.get("/",function(req,res){
    res.render("home",{content:home_content,posts:posts});
})

app.get("/about",function(req,res){
    res.render("about",{content:about_content});
})

app.get("/contact",function(req,res){
    res.render("contact",{content:contact_content});
})

app.get("/compose",function(req,res){
    res.render("compose");
})

app.post("/compose",function(req,res){
    const post_content={
        title:req.body.title,
        post:req.body.post};
    posts.push(post_content);
    res.redirect("/");
})

app.get("/:postName",function(req,res){
    for(var i=0;i<posts.length;i++){
        if(_.lowerCase(posts[i].title)===_.lowerCase(req.params.postName)){
            
            res.render("posts",{title:posts[i].title,post:posts[i].post});
            break;
        }
    }
})



app.listen(3000);

