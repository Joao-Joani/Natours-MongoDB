const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });

const DB = process.env.DATABSE.replace(
  '<db_password>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => console.log('Conexão foi um sucesso!'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Aplicativo rodando na porta ${port}...`);
});
