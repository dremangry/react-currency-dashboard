import React from 'react'
import ExchangeRate from "./ExchangeRate";

function CurrencyConverter() {
    // array of currency
    const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA']

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
                                    value={""}
                                />
                            </td>
                            <td>
                                <select
                                    name="currency-option-1"
                                    className='currency-options'
                                    value={''}
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
                                    value={""}
                                />
                            </td>
                            <td>
                                <select
                                    name="currency-option-2"
                                    className='currency-options'
                                    value={''}
                                    >
                                    {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}

                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <ExchangeRate />
        </div>
    )
}

export default CurrencyConverter