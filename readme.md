set up react
```bash
npx create-react-app client

```

Set up express
```bash
npm init -y
npm install express --save //install express and save dependency
```

set up proxy
```bash
//add this to the package.json in react
  "proxy": "http://localhost:5000",
```

run in dev
- start backend
```bash
node server.js
```
- start frontend
```bash
cd client
npm start
```

deploy
```bash
cd client
npm run build
```

on hosting
```bash
node server.js
```