import nodemailer from "nodemailer";

type Data = {
  firstName: string;
  lastName: string;
  email: string;
  text: string;
};

export default async (req, res) => {
  const { firstName, lastName, email, text }: Data = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.password,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: "bergeranalaura9@gmail.com",
      subject: `Contacto form ${lastName}`,
      html: `<p>You have a new contact:</p> <br>
       Name: ${firstName}, o que precisa: ${text},
       `,
    });

    console.log("Message sent", emailRes.messageId);
    console.log(emailRes);
  } catch (e) {}

  res.status(200).json(req.body);
};
