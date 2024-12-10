import express from 'express';
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import cors from 'cors'; // Import CORS

const app = express();
const port = 3000;

// Menggunakan CORS middleware
app.use(cors());  // Mengizinkan request dari semua domain

// Menggunakan body-parser untuk mengekstrak data dari request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Konfigurasi transporter nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Anda bisa menggunakan layanan email lainnya (misalnya SMTP server sendiri)
  auth: {
    user: 'apriliansyahdirga@gmail.com', // Ganti dengan email pengirim
    pass: 'dirga8888', // Ganti dengan password email pengirim (gunakan environment variable jika perlu)
  },
});

// Fungsi untuk mengirimkan email
function sendEmail(to, subject, text, callback) {
  const mailOptions = {
    from: 'apriliansyahdirga@gmail.com', // Ganti dengan email pengirim
    to: "dirgaowen87@gmail.com", // Email tujuan
    subject: "test1", // Subjek email
    text: "test1", // Isi email
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      callback(error, null);
    } else {
      console.log('Email sent: ' + info.response);
      callback(null, info);
    }
  });
}

// Endpoint untuk mengirim email
app.post('/send-email', (req, res) => {
  const { to, subject, text } = req.body;

  sendEmail(to, subject, text, (error, info) => {
    if (error) {
      res.status(500).send('Error sending email');
    } else {
      res.status(200).send('Email sent successfully');
    }
  });
});

// Menjalankan server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
