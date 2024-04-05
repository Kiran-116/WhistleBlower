const connectDatabase = require('./config/database')
const app = require('./app')
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 8000;

connectDatabase();

const server = app.listen(port, () => {
    console.log(`Server listening on port no ${port}`);
    // console.log('node.js version: ', process.versions.node)
});

