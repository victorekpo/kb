const fs = require('fs');

const requestHandler = (req, res) => {
	console.log(req.url, req.method);  
	const url = req.url;
	const method = req.method;

	const showForm = () => {
		res.setHeader('Content-Type','text/html');
		res.write('<html>');
		res.write('<head><title>Welcome to Vic\'s Server</title></head>');
		res.write('<body><h1>Vic\'s Web Server</h1>');
		res.write('<h3>Enter your message</h3>');
		res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send Message</button>');
		res.write('</body>');
		res.write('</html>');
		res.end();
	}

	const showMessage = () => {
		res.setHeader('Content-Type','text/html');
		res.write('<html>');
		res.write('<head><title>Greetings</title></head>');
		res.write('<body>');
		res.write('<h1>Greetings from Vic</h1>');
		res.write('</body>');
		res.write('</html>');
		res.end();
	}

	if (url === '/' || url === '/form') {
		showForm();
		return;
	}

	if (url === '/message' && method === 'POST') {
		const body = [];
		req.on('data',(chunk) => {
			console.log(chunk);
			body.push(chunk);
		});
		req.on('end',() => {
			//console.log('finished',body);
			const parsedBody = Buffer.concat(body).toString();
			console.log(parsedBody);
			const message = parsedBody.split('=')[1];
			fs.writeFileSync('message.txt',message);
			res.statusCode = 302;
			res.setHeader('Location','/');
			return res.end();
		});
		//showMessage();
		return;
	}

};

module.exports = requestHandler;

