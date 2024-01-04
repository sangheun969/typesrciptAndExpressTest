import express, { Request, Response } from "express";
import path from "path";
// require("dotenv").config();

const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname)));

app.get("/", (req: Request, res: Response) => {
  res.send("오오 이게 타스익스프레스!!");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at <https://localhost>:${port}`);
});
