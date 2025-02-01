import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import adminRouter from "./routes/adminRoute.js";
import authRoutes from "./routes/auth.routes.js";
import { Groq } from "groq-sdk"; // Import Groq SDK

// App config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// API endpoints
app.use("/api/admin", adminRouter);
app.use("/api/auth", authRoutes);

// Groq API endpoint
app.post("/api/groq", async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: "Invalid or empty messages array" });
    }

    // Initialize Groq client
    const groq = new Groq({ apiKey: "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" });

    // Send message to Groq API
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: messages[0].content, // Use the first message in the array
        },
      ],
      model: "llama3-8b-8192", 
    });

  
    res.status(200).json(chatCompletion.choices[0].message.content);
  } catch (error) {
    console.error("Error in Groq API:", error);
    res.status(500).json({ error: "Failed to process the request" });
  }
});


app.get("/", (req, res) => {
  res.send("API WORKING");
});

// Start server
app.listen(port, () => console.log("Server started on port", port));