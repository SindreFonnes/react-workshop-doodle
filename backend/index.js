import express from "express";
import dotenv from "dotenv";
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { users, content } from "./data.js";

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

dotenv.config();

const app = express();

app.use(express.static(join(__dirname, "build")));

const port = process.env.PORT || 3000;

const apiBasePath = "/apis";

app.get(`${apiBasePath}/users`, (req, res) => {
	console.log("Request recived")
	res.send(users);
})

app.get("/", (req, res) => {
	res.sendFile(join(__dirname, "build/index.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}...`));
