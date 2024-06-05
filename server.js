import express from "express";
import cors from "cors";

const app = express();

const port = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
