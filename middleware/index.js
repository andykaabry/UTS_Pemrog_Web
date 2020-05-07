var express = require('express');
var auth = require("./auth");
var router = express.Router();
var verifikasi = require('./verifikasi');

//daftarkan menu registrasi
router.post('/api/v1/register', auth.registrasi);
router.post('/api/v1/login', auth.login);

//alamat yang perlu otorisasi
router.get('/api/v1/rahasia', verifikasi(), auth.halamanrahasia);
router.get('/api/v1/rahasia1', verifikasi(), auth.halamanrahasia1)
router.post('/api/v1/inputservis', verifikasi(), auth.inputservis);
router.post('/api/v1/inputmontir', verifikasi(), auth.inputmontir);
router.post('/api/v1/inputsparepart', verifikasi(), auth.inputsparepart);
router.post('/api/v1/inputuser',verifikasi(), auth.registrasi);
router.post('/api/v1/inputlevel',verifikasi(), auth.inputlevel);




module.exports = router;