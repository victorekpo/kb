const router = require('express').Router();
const https = require('https'); // or 'https' for https:// URLs
const fs = require('fs');


router.get('/', (req, res) => {
  console.log('test route');
  const file = fs.createWriteStream("file.jpg");
  const request = https.get("https://avatars.githubusercontent.com/u/59099965?v=4", function(response) {
     response.pipe(file);

     // after download completed close filestream
     file.on("finish", () => {
         file.close();
         console.log("Download Completed");
     });
});
  res.send('<h1>Test works</h1><img src="http://localhost:8082/testimg" />');
});

module.exports = router;
