// console.log("Chai aur Backend.");

// json data for testing purpose
const GITHUB_DATA = [{
        "login": "mojombo",
        "id": 1,
        "node_id": "MDQ6VXNlcjE=",
        "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/mojombo",
        "html_url": "https://github.com/mojombo",
        "followers_url": "https://api.github.com/users/mojombo/followers",
        "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
        "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
        "organizations_url": "https://api.github.com/users/mojombo/orgs",
        "repos_url": "https://api.github.com/users/mojombo/repos",
        "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
        "received_events_url": "https://api.github.com/users/mojombo/received_events",
        "type": "User",
        "site_admin": false
    },
    {
        "login": "lukas",
        "id": 29,
        "node_id": "MDQ6VXNlcjI5",
        "avatar_url": "https://avatars.githubusercontent.com/u/29?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/lukas",
        "html_url": "https://github.com/lukas",
        "followers_url": "https://api.github.com/users/lukas/followers",
        "following_url": "https://api.github.com/users/lukas/following{/other_user}",
        "gists_url": "https://api.github.com/users/lukas/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/lukas/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/lukas/subscriptions",
        "organizations_url": "https://api.github.com/users/lukas/orgs",
        "repos_url": "https://api.github.com/users/lukas/repos",
        "events_url": "https://api.github.com/users/lukas/events{/privacy}",
        "received_events_url": "https://api.github.com/users/lukas/received_events",
        "type": "User",
        "site_admin": false
    }
]

// importing dotenv package
require("dotenv").config();
// common js based syntax
const express = require("express");

// Module based syntax (es syntax)
// import express from "express";

// creating instance of express inside 'app'
const app = express();
// const port = 4000;

// getting the response from the server using 'get' method on a specific route
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/youtube", (req, res) => {
    res.send("Chai aur Backend");
});

app.get("/login", (req, res) => {
    res.send("Login Route");
});

app.get("/error", (req, res) => {
    res.send("Error Route");
});

// get the response from the server in json format
app.get("/github", (req, res) => {
    res.json(GITHUB_DATA);
});

// make the server listen on your port number
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });

// using port available in environment variables
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});