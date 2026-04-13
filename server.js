import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();

// ✅ CORS
app.use(cors());
app.use(express.json());

// ✅ Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// ✅ Health check
app.get("/", (req, res) => {
  res.send("🚀 Backend running");
});

// ✅ SEND EMAIL ONLY
app.post("/send-email", async (req, res) => {
  try {
    const { name, email, phone, model, issue } = req.body;

    if (!name || !email || !phone || !model || !issue) {
      return res.status(400).json({ error: "All fields required" });
    }

    await resend.emails.send({
      from: "FixurDevice <onboarding@resend.dev>",
      to: "fixurdevice.in@gmail.com",
      subject: "New Repair Request",
      html: `
        <h2>New Customer Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Device:</b> ${model}</p>
        <p><b>Issue:</b> ${issue}</p>
      `,
    });

    console.log("📧 Email sent");

    res.json({ success: true });

  } catch (error) {
    console.error("❌ ERROR:", error);
    res.status(500).json({ error: error.message });
  }
});

// ✅ PORT
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});