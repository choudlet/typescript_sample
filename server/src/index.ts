import * as express from 'express';
import {resolve} from 'path';

const app = express();app.use(express.static(resolve(__dirname, '..','..', 'client','dist')));

app.listen(3000, ()=> {
    console.log('listening on port 3000 jahhh')
})

