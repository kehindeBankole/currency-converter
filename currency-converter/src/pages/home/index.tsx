import { useState } from 'react';
import CurrencySelector from '../../components/currency-selector';
import CurrencyRates from '../../components/currency-rates';
import CurrencyConversion from '../../components/currency-conversion';
import { useConvertCurrency, useExchangeRate, useSymbols } from '../../data';
import classes from './index.module.css';

export default function Home() {
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [toConvert, setToConvert] = useState('');
  const [amount, setAmount] = useState(0);
  const { data: symbols } = useSymbols();

  const allSymbols = !symbols?.symbols ? [] : Object.keys(symbols.symbols);
  const [conversionStage, enterConversionStage] = useState(false);

  const { data, isLoading, isError } = useExchangeRate(
    allSymbols,
    baseCurrency
  );
  const { data: convertedCurrency } = useConvertCurrency(
    toConvert,
    baseCurrency,
    amount
  );

  let debounceTimer: number;
  const debounce = (callback: (...args: any[]) => void, time: number) => {
    window.clearTimeout(debounceTimer);
    debounceTimer = window.setTimeout(callback, time);
  };

  return (
    <>
      {conversionStage ? (
        <div className={classes.container}>
          <CurrencyConversion
            currencyValue={amount}
            toConvert={toConvert}
            base={baseCurrency}
            next={(amount) => {
              debounce(() => setAmount(amount), 500);
            }}
            convertedValue={
              convertedCurrency?.result || (data?.rates as never)[toConvert]
            }
          />
        </div>
      ) : (
        <div>
          <div className='sticky top-0 z-50'>
            <CurrencySelector
              currencies={allSymbols}
              selectBaseCurrency={(currency) => setBaseCurrency(currency)}
            />
          </div>

          {isLoading ? (
            <p>Loading</p>
          ) : isError ||
            data?.message  ? (
            <p>error fetching data</p>
          ) : (
            data?.rates && (
              <CurrencyRates
                rates={data?.rates}
                next={(currency) => {
                  setToConvert(currency);
                  enterConversionStage(true);
                }}
              />
            )
          )}
        </div>
      )}
    </>
  );
}
