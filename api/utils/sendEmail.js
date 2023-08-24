import nodemailer from 'nodemailer'

const sendEmail = (email, subject, text, res) => {
  const transporter = nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD
    }
  })
  const mailOptions = {
    from: process.env.MAIL_USER,
    to: email,
    subject,
    text
  }

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      res.send(error)
      console.log(error)
    } else {
      res.json({
        status: 'success',
        message: `Email sent`
      })
    }
  })
}
export default sendEmail