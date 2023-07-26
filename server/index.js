const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const arr = [];

const updateGETEndpointsMiddleware = (req, res, next) => {
  res.on("finish", () => {
    if (
      req.method === "POST" &&
      (req.path === "/admin" || req.path === "/user")
    ) {
      res.app.get("/admin", (req, res) => {
        res.json(arr);
      });
      res.app.get("/user", (req, res) => {
        res.json(arr);
      });
    }
  });

  next();
};

app.use(updateGETEndpointsMiddleware);

app.post("/admin", async (req, res) => {
  const { title, text } = await req.body;
  console.log(title, text);
  arr.push({ title: title, text: text });
});

app.get("/admin", (req, res) => {
  res.json(arr);
});

app.get("/user", (req, res) => {
  res.json(arr);
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
