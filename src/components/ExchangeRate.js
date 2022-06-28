import React from 'react'
// the exchange rate is passed through the exchange rate state in CurrencyConverter.js
function ExchangeRate({ exchangedData }) {
    return (
        <div className='exchange-rate'>
            <h3>Exchange rate</h3>
            <h1>{exchangedData.exchangeRate}</h1>
            <p>{exchangedData.primaryCurrency} to {exchangedData.secondaryCurrency}</p>
        </div>
    )
}

export default ExchangeRate