const server = require('./src/app');
const connectdb = require('./src/db/db');

connectdb();

server.listen(3000, () =>
{
    console.log("Server is running in port 3000");
});