const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200)
  .json({ message: 'Olá, do lado do servidor!', app: 'Natours' });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Aplicativo rodando na porta ${port}...`);
});
