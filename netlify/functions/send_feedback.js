const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed',
        };
    }

    const { feedback } = JSON.parse(event.body);

    // Create a Nodemailer transporter using your email service (e.g., Gmail, SMTP)

    let transporter = nodemailer.createTransport({
        host: 'smpt.gmail.com',
        port: 465 ,
        secure: true,
        auth: {
            user: process.env.EMAIL_USER, // Use environment variables for security
            pass: process.env.EMAIL_PASS,
        },
    });

    let mailOptions = {
        from: '"HealthAINexus-Team" <sshinkar83@gmail.com>', 
        to: "recipient-email@example.com",
        subject: "A Addition To FeedBack",
        text: "Hello , This is Team Nexus, Here is some suggestion on addition on tips",
        html: "<b>Hello World!</b>"
      };
      

    try {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              return console.log(error);
            }
            console.log("Message sent: %s", info.messageId);
          });
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ success: false, message: error.message }),
        };
    }
};
