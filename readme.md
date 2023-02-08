set up react
```bash
npx create-react-app client

```

Set up express
```bash
npm init -y

npm install express --save //install express and save dependency
```

create a server.js file containing
```js
const express = require('express');
const app = express();
const axios = require('axios');
const util = require('util');
const port = process.env.PORT || 5000;

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use(express.static('client/build'))
// create a GET route
app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
});


app.get('/test', function(req, res) {
  res.end('data_from_test');
});

app.get('/api/getallcountrydata', function(req, res) {
  axios.get('https://restcountries.com/v3.1/all')
  .then(response => {
    //res.setHeader('Content-Type', 'application/json');
    //res.end(util.inspect(response));
    res.json(response.data);
  });

});
```
set up proxy
```bash
//add this to the package.json in react
  "proxy": "http://localhost:5000",
```

run in dev
- start backend
```bash
npm install
node server.js
```
- start frontend
```bash
cd client
npm install
npm start
```

on hosting
```bash
npm install && cd client && npm install && npm run build && cd .. //build command

node server.js //deploy command
```