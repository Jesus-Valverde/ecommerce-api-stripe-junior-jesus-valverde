const axios = require('axios');

const syscomClient = axios.create({
    baseURL : process.env.API_BASE_URL,
    headers: {
        "Content-Type" : "application/json",
    },
});

module.exports = syscomClient;