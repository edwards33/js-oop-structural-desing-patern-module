import express from 'express';
import solve from './solve';

const app = express();
const PORT = 3000;
const aNumber = solve();

app.get('/', (req, res) =>
    res.send(`Showing number ${aNumber} on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);
