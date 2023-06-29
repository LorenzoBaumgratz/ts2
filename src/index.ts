import express, { json } from "express"
import person from "./routes/personRouter";

const app = express(); 
app.use(json);
app.use(person)

app.listen(5000, () => {
    console.log(`Server running on port 5000`);
});