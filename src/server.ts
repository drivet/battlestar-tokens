import cors from 'cors';
import express from 'express';
import expressWinston from 'express-winston';
import winston from 'winston';

import { getPort } from './config';
import { tokenRouter } from './tokens/token-routes';

export const app = express();
app.use(express.urlencoded({ extended: true }));

app.use(
  expressWinston.logger({
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.colorize(), winston.format.prettyPrint()),
    meta: true,
    msg: 'HTTP {{req.method}} {{req.url}}',
    expressFormat: true,
    colorize: true,
  })
);
app.use(cors());
app.use('/tokens', tokenRouter);


const port = getPort();
app.listen(port, () => console.log(`Battlestar-tokens listening at http://localhost:${port}`));
