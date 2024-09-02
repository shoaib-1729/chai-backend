import express from "express";
// common js syntax: require wala synchronously code leke aata hai
// module js syntax: import/export wala asynchronously code leke aata hai
//  agar module wala syntax use karna hai toh package.json par "type": "module" mention karna hota hai, jisse ki aapki js files modules ki tarah treat kari jaayegi.

const app = express();

// jokes api for serving jokes on the frontend
app.get("/api/jokes", (req, res) => {
    const jokes = [{
            id: 1,
            title: "A joke",
            content: "This is a joke",
        },
        {
            id: 2,
            title: "Another joke",
            content: "This is a joke",
        },
        {
            id: 3,
            title: "A third joke",
            content: "This is a joke",
        },
        {
            id: 4,
            title: "A fourth joke",
            content: "This is a joke",
        },
    ];
    // serve the jokes
    res.send(jokes);
});

// app.get("/", (req, res) => {
//     res.send("Chai Aur Backend.");
// });

// agar process.env ne nahi mila toh humara custom port lelo, waise production par env se hi port mil jaata hai.
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is listening at port  ${port}`);
});