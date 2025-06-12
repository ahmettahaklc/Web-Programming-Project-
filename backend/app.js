const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/auth'); // auth.js dosyasını bir sonraki adımda yapacaksın
app.use('/api', authRoutes);

app.listen(5000, () => {
  console.log('Server çalışıyor: http://localhost:5000');
});
