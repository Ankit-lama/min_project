require('dotenv').config();
const server = require('../backend/src/app');
const connectdb = require('../backend/src/db/db');

connectdb();

server.listen(3000, () =>
{
    console.log("Server is running in port 3000");
});