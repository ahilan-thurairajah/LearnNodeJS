'use strict';
var nodemailer  = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ahilan@vignahara.com',
        pass: 'anoj2004$'
    }
}); 

var mailOptions = {
    from: 'finance@vignahara.com',
    to: 'support@vignahara.com',
    subject: 'Sending Email using Node.js',
    html: '<h1>Welcome</h1><p>That was easy!</p>'
};


transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
