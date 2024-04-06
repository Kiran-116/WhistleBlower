const connectDatabase = require('./config/database');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

dotenv.config();
const port = process.env.PORT || 8000;

connectDatabase();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Define storage for the uploaded files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/asset'); // Save files to public/asset directory
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname); // Use original filename
    }
});

// Initialize multer middleware with the storage configuration
const upload = multer({ storage: storage });

// Define a route for file upload
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No files were uploaded.');
  }

  // File uploaded successfully
  const uploadedFileName = req.file.filename;
  res.send({ fileName: uploadedFileName });
});

// Serve static files from the public directory
app.use('/public', express.static(path.join(__dirname, 'public')));

const routes = require('./routes/routes');
app.use('/', routes);

app.get('*', (req, res) => {
  res.send(`<h1>Page not Found, Error 404</h1>`);
});

const server = app.listen(port, () => {
  console.log(`Server listening on port no ${port}`);
});
