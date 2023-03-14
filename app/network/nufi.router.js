const express = require('express');
const router = express.Router();
const axios = require('axios');
//SE USA NEXT PARA ACCEDER AL SIGUIENTE MIDDLEWARE
const token = 'fc0aa6c274f04f2c8643f1752d0c12b5';
router.get('/test', async (req, res) => {
    res.json({
      success: true,
      message: 'Endpoint de prueba'
    });
});

router.post('/consultacurp', async (req, res, next) => {
  try {
    var data = await axios({
      method: 'post',
      url: 'https://nufi.azure-api.net/Curp/v1/consulta',
      data: req.body,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no cache',
        'Ocp-Apim-Subscription-Key': `${token}`,
      },
    });
    res.json({
      success: true,
      message: 'Esta es la data: ',
      data: data.data,
    });
  } catch (error) {
    next(error);
  }
});

router.post('/consultainefrente', async (req, res, next) => {
  try {
    var data = await axios({
      method: 'post',
      url: 'https://nufi.azure-api.net/ocr/v1/frente',
      data: {
        base64_credencial_frente: req.body.b64CredencialFrente,
      },
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no cache',
        'Ocp-Apim-Subscription-Key': `${token}`,
      },
    });
    res.json({
      success: true,
      message: 'Esta es la data: ',
      data: data.data,
    });
  } catch (error) {
    next(error);
  }
});

router.post('/consultainereverso', async (req, res, next) => {
  try {
    var data = await axios({
      method: 'post',
      url: 'https://nufi.azure-api.net/ocr/v1/reverso',
      data: {
        base64_credencial_reverso: req.body.b64CredencialReverso,
      },
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no cache',
        'Ocp-Apim-Subscription-Key': `${token}`,
      },
    });
    res.json({
      success: true,
      message: 'Esta es la data: ',
      data: data.data,
    });
  } catch (error) {
    next(error);
  }
});

router.post('/enviarcontrasena', async (req, res, next) => {
  try {
    var data = await axios({
      method: 'post',
      url: 'https://nufi.azure-api.net/otp/v2/enviar',
      data: {
        numero: '',
        aplicacion: 'Nufi',
        longitud: 4,
        tipo: 6,
      },
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no cache',
        'Ocp-Apim-Subscription-Key': `${token}`,
      },
    });
    res.json({
      success: true,
      message: 'Esta es la data: ',
      data: data.data,
    });
  } catch (error) {
    next(error);
  }
});

router.post('/validarcontrasena', async (req, res, next) => {
  try {
    var data = await axios({
      method: 'post',
      url: 'https://nufi.azure-api.net/otp/v2/validar',
      data: {
        codigo: '9709',
        identificador: '2a3a8092b95a410288838ae7dc316da9',
      },
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no cache',
        'Ocp-Apim-Subscription-Key': `${token}`,
      },
    });
    res.json({
      success: true,
      message: 'Esta es la data: ',
      data: data.data,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
