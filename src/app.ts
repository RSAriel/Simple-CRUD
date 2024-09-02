import express from "express";
import { router } from './routes/router';
import 'dotenv/config';
const app = express();


const PORT = process.env.PORT;
app.use(express.json());
app.use("/", router);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
