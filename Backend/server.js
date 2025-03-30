require("dotenv").config();
const express = require("express");
const multer = require("multer");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Multer setup for handling file uploads
const upload = multer({ storage: multer.memoryStorage() });

// Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_PASS, // Use an App Password, NOT your regular password
  },
});

// API Endpoint to Send Email
app.post("/send-email", upload.single("attachment"), async (req, res) => {
  try {
    // Manually parsing the form data since multer only handles files
    const { fullName, email, companyName, websiteUrl, problemStatement } =
      req.body;
    const pdfFile = req.file;

    if (!pdfFile) {
      return res.status(400).json({ error: "PDF file is required!" });
    }

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Your email to receive submissions
      subject: "New Form Submission with PDF",
      text: `
Hello Ayush khakare,

You have received a new form submission.

Full Name: ${fullName}
Email: ${email}
Company Name: ${companyName}
Website URL: ${websiteUrl}
Problem Statement: ${problemStatement}

Please check the attached PDF file.
Thanosphere Solutions
Best Regards,

            `,
      attachments: [
        { filename: pdfFile.originalname, content: pdfFile.buffer },
      ],
    };

    await transporter.sendMail(mailOptions);
    res.json({ message: "✅ Email sent successfully!" });
  } catch (error) {
    console.error("🔥 Error sending email:", error);
    res.status(500).json({ error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
