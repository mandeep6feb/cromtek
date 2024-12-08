import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, mobile, comp, query } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT, 10),
      secure: false, // Use true for port 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const message = `
      Contact Name: ${name}
      Contact Number: ${mobile}
      Company: ${comp}
      Message: ${query}
    `;

    await transporter.sendMail({
      from: email,
      to: "cromtek@cromteksolutions.info,kohlimandeep06@gmail.com,yogitakohli12345@gmail.com",
      subject: "Form Submission",
      text: message,
    });

    return new Response(JSON.stringify({ success: true, message: "Email sent successfully!" }), { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ success: false, error: "Failed to send email." }), { status: 500 });
  }
}

console.log("Environment Variables:", {
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  });
