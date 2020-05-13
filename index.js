const express = require('express');
const app = express();
const port = 80;

app.use(express.static('public'));

app.listen(port, () => console.log(`listening on http://18.218.108.215:${port}`));
