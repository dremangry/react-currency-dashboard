import React, {useState} from 'react'
import ExchangeRate from "./ExchangeRate";
import axios from 'axios'

function CurrencyConverter() {
    // array of currency
    const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA']

        // chosenPrimaryCurrency start at null for the first select
    const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC')
        //for the second select
    const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC')
        // for the number in the input form
    const [amount, setAmount] = useState(1)
        // for the exchange rate data
    const [exchangeRate, setExchangeRate] = useState(0)
        //for the exchange rate data multiplied by the amount
    const [result, setResult] = useState(0)
    
    console.log(chosenPrimaryCurrency, 'first');
    console.log(chosenSecondaryCurrency, 'second');
    console.log(amount);
    
    function convert() {
        
        const options = {
            method: 'GET',
            url: 'https://alpha-vantage.p.rapidapi.com/query',
            params: { from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency },
            headers: {
                
            }
        };
        
        axios.request(options).then(function (response) {
            console.log('the hole object=====================');
            console.log(response.data);
            console.log('the hole object=====================');
            // go into the api object and inside realtime exchange currency rate ,5. Exchange Rate and set it into exchangeRate
            console.log(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate']);
            setExchangeRate(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'])
                //for the exchange rate data multiplied by the amount
            setResult(response.data['Realtime Currency Exchange Rate']['5. Exchange Rate'] * amount)
        }).catch(function (error) {
            console.error(error);
        });
    }
    console.log('####################################');
    console.log(exchangeRate);
    console.log('####################################');
    return (
        <div className='currency-converter'>
            <h2>Currency Converter</h2>

            <div className="input-box">
                <table>
                    <tbody>
                        <tr>
                            <td>Primary currency</td>
                            <td>
                                <input
                                    type="number"
                                    name='currency-amount-1'
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                />
                            </td>
                            <td>
                                <select
                                    name="currency-option-1"
                                    className='currency-options'
                                    value={chosenPrimaryCurrency}
                                    onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                                    >
                                        {/* map the array of currencies inside the option (index no needed) */}
                                    {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                                    {/* {currencies.map(currency => (<option>{currency}</option>))} */}

                                </select>
                            </td>
                        </tr>

                        <tr>
                            <td>Secondary currency</td>
                            <td>
                                <input
                                    type="number"
                                    name='currency-amount-2'
                                    value={result}
                                    disabled={true}
                                />
                            </td>
                            <td>
                                <select
                                    name="currency-option-2"
                                    className='currency-options'
                                    value={chosenSecondaryCurrency}
                                    onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                                    >
                                    {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}

                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {/* you can see the api call inside the browser developer tool */}
                <button onClick={convert}>Convert</button>
            </div>

            <ExchangeRate />
        </div>
    )
}

export default CurrencyConverter