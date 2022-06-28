const PORT = 8000

const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()
// give access to the cors policy (in dev tool)
app.use(cors())

// display in localhost 8000 ('/')
app.get('/', (req,res) => {
    res.json('hi')
})
// **********************************************CURRENCY CONVERTER API
app.get('/convert', (req,res) => {

    // display de needed data in the api for the params (in the backend terminal)
    console.log('====================================');
    // console.log(req);
    console.log(req.query);
    console.log('====================================');

    // passing the currency from front end to backend in a variable and defining them in params    
    const toCurrency = req.query.to_currency
    const fromCurrency = req.query.from_currency

    const options = {
        method: 'GET',
        url: 'https://alpha-vantage.p.rapidapi.com/query',
        params: { from_currency: fromCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: toCurrency },
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
            'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        res.json(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])

    }).catch(function (error) {
        console.error(error);
    });
})

// ******************************************************NEWS FEED API
app.get('/news', (req,res) => {
    const options = {
        method: 'GET',
        url: 'https://crypto-news-live3.p.rapidapi.com/news/cryptonews.com',
        headers: {
            'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
            'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        res.json(response.data);

    }).catch(function (error) {
        console.error(error);
    });
})

app.listen(PORT, () => console.log(`server is running on port ${PORT}`))