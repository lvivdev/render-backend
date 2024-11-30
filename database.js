const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/cooperativeDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB connected...");
}).catch(err => console.log(err));
