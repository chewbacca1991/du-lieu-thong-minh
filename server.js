const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/du_lieu_thong_minh', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

app.get('/', (req, res) => {
  res.send('Chào mừng đến với Dữ Liệu Thông Minh!');
});

app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});