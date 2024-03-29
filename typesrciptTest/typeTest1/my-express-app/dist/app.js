"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
// require("dotenv").config();
const app = (0, express_1.default)();
const port = 5000;
app.use(express_1.default.static(path_1.default.join(__dirname)));
app.get("/", (req, res) => {
    res.send("오오 이게 타스익스프레스!!");
});
app.listen(port, () => {
    console.log(`[server]: Server is running at <https://localhost>:${port}`);
});
