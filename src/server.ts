import express from "express";
import dotenv from "dotenv";
import router from "./routes/router";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api/example", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
