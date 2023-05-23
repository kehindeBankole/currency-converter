import { useState } from 'react';
import { parseAmount } from 'utils';

function CurrencyConversion(props: {
  base: string;
  toConvert: string;
  currencyValue: number;
  convertedValue: number;
  next: (amount: number) => void;
}) {
  const formatter = new Intl.NumberFormat();
  const [value, setValue] = useState(
    props.currencyValue ? formatter.format(props.currencyValue) : ''
  );

  const handleCurrency = (e: any) => {
    const value = parseAmount(e.target.value);

    if (!isNaN(value)) {
      if (e.target.value.includes('.')) {
        if (e.target.value.split('.')[1].length >= 3) {
          return;
        }
        setValue(e.target.value);
      } else {
        setValue(formatter.format(value));
      }
      props.next(value)
   //   debounce(props.next(value));
    }
  };

  return (
    <div>
      <div className='flex justify-between items-center pr-4 border-b'>
        <input
          onChange={handleCurrency}
          type='text'
          value={value === '0' ? '' : value}
          className='h-24 w-1/2 px-4 focus:outline-none placeholder:text-black'
          placeholder='0.00'
          inputMode='numeric'
        />

        <p>{props.base}</p>
      </div>
      <div className='flex justify-between items-center pr-4 border-b'>
        <input
          type='text'
          className='h-24 w-1/2 px-4 focus:outline-none placeholder:text-black'
          inputMode='numeric'
          placeholder='0.00'
          value={props.convertedValue}
          disabled
        />
        <p>{props.toConvert}</p>
      </div>
      <div className='h-32 bg-blue-500'></div>
    </div>
  );
}

export default CurrencyConversion;
