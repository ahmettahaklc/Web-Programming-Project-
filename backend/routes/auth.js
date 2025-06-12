const express = require('express');
const router = express.Router();
const mysql = require('mysql2');

// Veritabanı bağlantısı
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', // Buraya kendi MySQL şifreni yaz
  database: 'hukuk'
});

// Giriş (Login) endpoint'i xd lmfao 75
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'E-posta ve şifre gereklidir' });
  }

  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error('Veritabanı hatası:', err);
      return res.status(500).json({ message: 'Sunucu hatası' });
    }

    if (results.length > 0) {
      return res.status(200).json({ message: 'Giriş başarılı', user: results[0] });
    } else {
      return res.status(401).json({ message: 'Hatalı e-posta veya şifre' });
    }
  });
});

module.exports = router;
