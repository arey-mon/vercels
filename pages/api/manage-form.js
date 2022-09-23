import nodemailer from 'nodemailer';

export default function manageForm(req, res) {
	let transporter = nodemailer.createTransport({
		host: 'ssl0.ovh.net',
		port: 587, // 587 (tls), 465 (ssl),
		secure: false, // true for ssl 465, false for others
		auth: {
			user: 'apolline@tiltmusic.xyz',
			pass: 'MPpartage',
		},
		tls: {
			ciphers:'SSLv3'
		}
	});

	// loop on req.query to build text message
	let text = '';
	for( let key in req.query ){
		let value = req.query[key];
		text += key + ': ' + value + "\n";
	}

	let info = transporter.sendMail({
		from: '<apolline@tiltmusic.xyz>',
		to: '<reymond.apolline@gmail.com>,<celine.trouve.kick@gmail.com>',
		subject: "A subscribe to TiltMusic",
		text: text,
//		html: "<b>Hello World TiltMusic</b>",
	}, (err, info) => {
//console.log('err: ', err);
//console.log('info: ', info);
	});

	res.status(200).json({ sended: true, error: null });
}
