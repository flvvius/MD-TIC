const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./firebase-config/dbConfig");
const app = express();
const PORT = 5001;

app.use(cors());
app.use(morgan("dev"));
app.get("/", async (req, res) => {
    const confirmMessage = await db.collection("messages").add({"alex": "Salutare"});
    res.send(confirmMessage.id);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));