import express from "express";
const app = express();
import db from '@repo/db/client'
app.get("/", async (req, res) => {
  const users = await db.user.findMany();
  res.json({
    msg: "get endpoint",
    users,
  });
});
function generateName() {
  let name = "";
  const num = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
  for (let i = 0; i < 10; i++) {
    const num = Math.floor(Math.random() * (122 - 97 + 1)) + 97;
    const char = String.fromCharCode(num);
    name += char;
  }
  return name;
}
app.post("/", async (req, res) => {
  const name = generateName();
  const user = await db.user.create({
    data: {
      email: name + "@gmail.com",
      name,
    },
  });

  res.json({
    msg: "post endpoint",
    user,
  });
});

app.listen(3001, () => {
  console.log("app is listening on port 3001");
});
