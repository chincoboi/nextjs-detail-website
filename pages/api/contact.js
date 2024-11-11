import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, message } = req.body;

    // Log the incoming data
    console.log("Received data:", { name, email, subject, message });

    // Set up nodemailer transport
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        tls: {
          rejectUnauthorized: false, // This might help with some SSL errors
        },
      });
      

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "ogungbilerichard@gmail.com",
      subject: "New Form Submission",
      text: `User Name: ${name}\nUser Email: ${email}\nSubject: ${subject}\nUser Message: ${message}`,
    };

    try {
      // Send email
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
      res.status(200).json({ message: "Form submitted successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Something went wrong, please try again later." });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
