import 'dotenv/config';
import cors from "cors";
import express from "express"
import routes from "./routes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);


app.get("/", (req, res) => {
    res.send("Avanti");
});
app.listen(process.env.PORT || 3000);

export default app;