const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/smart_data';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
  res.send('Welcome to Smart Data!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});