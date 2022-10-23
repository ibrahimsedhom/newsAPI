import express from 'express';
import * as bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import * as dotenv from 'dotenv';
import routes from './routes';
import config from './config/config';

// Port APP
const PORT = config.PORT || 3000;

// Create a new express application instance
const app = express();

// Call midlewares
app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use('/', routes);

// Root URI call
app.get('/', async (req, res) => {
  res.send('News API is Ready!');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
