
import express from 'express';
import jwt from "jsonwebtoken";
import bcrypt from "jsonwebtoken";
const SECRET ="harshjaiswal30";

const app = express();
app.use(express.json()); // Parse JSON request body

const users = []; // Temporary in-memory database

// Register a new user
app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    users.push({ username, password: hashedPassword });
    res.json({ message: "User registered successfully!" });
});

// Login and generate JWT
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: "Invalid credentials" });
    }

    // Create JWT token
    const token = jwt.sign({ username: user.username },SECRET, { expiresIn: "1h" });
    res.json({ token });
});

// Middleware to protect routes
const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ error: "Access denied" });

    try {
        const verified = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ error: "Invalid token" });
    }
};

// Protected Route
app.get('/profile', authMiddleware, (req, res) => {
    res.json({ message: `Welcome ${req.user.username}! This is a protected route.` });
});

const PORT =3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:3000`));
