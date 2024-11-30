const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();

const User = require("../models/User");

// Login Route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).send("User not found");

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(401).send("Invalid credentials");

    const token = jwt.sign({ id: user._id }, "secretkey", { expiresIn: "1h" });
    res.json({ token });
});

module.exports = router;
