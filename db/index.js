const MongoClient = require('mongodb').MongoClient;
const {uri,db}= require('./config');

const testConnection = async () => {
    const client = new MongoClient(uri, { useNewUrlParser: true });
    await client.connect();
    console.log('connected');
    client.close();
};

module.exports = {
    testConnection
};