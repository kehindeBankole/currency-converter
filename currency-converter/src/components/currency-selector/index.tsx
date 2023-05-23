import { useState } from 'react';

function CurrencySelector(props: {
  selectBaseCurrency: (currency: string) => void;
  currencies: string[];
}) {
  const [openbBox, setOpenBox] = useState(false);
  const [baseCurrency, setBaseCurrency] = useState('USD');

  return (
    <div className='bg-blue-500 grid place-items-center h-20'>
      <div className='relative'>
        <button
          className='bg-white p-4 w-40'
          onClick={() => setOpenBox(!openbBox)}
          disabled={props.currencies.length === 0}
        >
          <span
            className={`fi fi-${baseCurrency.toLowerCase().slice(0, -1)}`}
          />{' '}
          {baseCurrency}
        </button>
        {openbBox && (
          <div>
            <div className='bg-blue-500 text-white w-full absolute overflow-auto max-h-[10rem] top-20 p-4 z-50  space-y-4'>
              {props.currencies.map((item) => (
                <button
                  className='block'
                  onClick={() => {
                    props.selectBaseCurrency(item);
                    setBaseCurrency(item);
                    setOpenBox(false);
                  }}
                  key={item}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CurrencySelector;
