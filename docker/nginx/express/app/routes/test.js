const router = require('express').Router();

router.get('/', (req, res) => {
  console.log('test route');
  res.send('<h1>Test works</h1><img src="http://localhost:8082/testimg" />');
});

module.exports = router;
