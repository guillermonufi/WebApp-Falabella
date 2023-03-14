const express = require('express');


const cors = require('cors');
const routerApi = require('./app/network/index');
const app = express();
const PORT = process.env.PORT || 3000;

//OPCIONES DE LISTA BLANCA (ORIGENES PERMITIDOS) DEL CORS
const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)|| !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  },
};

app.use(cors(options));
app.use(
  express.json(
    { extended: false } // permite codificar matrices y objetos enriquecidos en formato codificado en url
  )
); //Selección de tipo de analisis de datos

routerApi(app);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Mi PORT' + PORT);
});
