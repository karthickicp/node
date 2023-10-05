import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { usersRouter } from "./src/routes";

const app = express();
const port = process.env.NODE_APP_POST;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200,
  })
);

app.get("/", (req: Request, res: Response) =>
  res.send("Hi Luca, server is started!")
);

app.use('/user', usersRouter);

app.listen(port, () => console.log(`Express app running on port ${port}!`));
