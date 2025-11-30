const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(cors({
  origin: 'http://localhost:3000'  // Your frontend URL
}));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// File upload setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Routes
app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ file: req.file });
});

app.get('/', (req, res) => {
  res.send('Welcome to the SeeYou backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
