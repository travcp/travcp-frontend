// const express = require('express');
// const path = require('path');

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// // app.use(cookieParser());
// // app.use(cors());
// if(process.env.NODE_ENV === 'production'){
//     // app.use(express.static(__dirname + '/public/'));
//     // app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html') ));
//     app.use(express.static(__dirname + '/dist'));
//     // app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html') ));
//   }
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`:>Server started on Port ${PORT}`));

const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
var history = require('connect-history-api-fallback');
app = express();
app.use(history());
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Running on PORT : " + port));