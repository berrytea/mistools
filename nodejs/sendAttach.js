var path = require('path');
var nodemailer = require('nodemailer');
var util = require('util');
var fs = require('fs');
var endOfLine = require('os').EOL;
var cmdArg = function() {
	var arguments = process.argv.splice(2);
	return {
		attachFile: arguments[0],
		to: arguments[1]
	}
}();

var transporter = nodemailer.createTransport({
	host: 'xxxxx.mail.163.com',
	port: 25
});



/*var mailOptions = {
    from: 'bsspirit ',
    to: 'xxxxx@163.com',
    subject: 'Hello ✔',
    text: 'Hello world ✔',
    html: '<b>Hello world ✔</b>' // html body
    attachments: [
        {
            filename: 'text0.txt',
            content: 'hello world!'
        },
        {
            filename: 'text1.txt',
            path: './attach/text1.txt'
        }
    ]
};*/

var mailOptions = {
	from: 'xxxx<xxxx@xxxxx.com>', // sender address
	to: cmdArg.to, // list of receivers
	subject: '收取附件'
};

var attachments = [];
attachments.push({
	filename: path.basename(cmdArg.attachFile),
	path: cmdArg.attachFile
});
mailOptions.attachments = attachments;

function sendEmail() {
	mailOptions.html = '收取附件';
	transporter.sendMail(mailOptions, function(error, info) {
		if (error) {
			console.log(error);
		} else {
			console.log('Message sent: ' + info.response);
		}
	});
}

sendEmail();