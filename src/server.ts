import express, { Request, Response } from "express";

const app = express();

app.set("view engine", "ejs");
app.set("json spaces", 2);

app.use(express.urlencoded({ extended: false }));
app.use(express.static(process.cwd() + "/views"));

app.get("/", (req, res) => {
    res.render("index", { test: ["bruh", "hello", "13234", "last one i swear"] });
});

app.get("/haha", (req: Request, res: Response) => {
    res.json({
        response:
            "haha got you noob you thought something was here? too bad lol stupidass fucker shut up now!!!!!! now brub bur gufdgsdf gjsfd gutrsfdg dfjg ifesgj sfdig jisdfi kgjsdifglongtest fdgndfsg dfhsghl sdfg",
    });
});

app.listen(process.env.PORT || 3000, () => console.log("Listening to port 3000!"));

// fgsdfg
