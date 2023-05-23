// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CurrencyRates(props: { rates: Record<string, any> , next:(currency:string)=>void}) {
  const { rates } = props;

  return (
    <div>
      <div className='space-y-2 p-5 justify-between'>
        {Object.keys(rates).map((item) => (
          <div className='flex relative p-5 justify-between' key={item}>
            <button onClick={()=>props.next(item)} className="inset-0 absolute w-full h-full">
              <span className="sr-only">click to convert</span>
            </button>
            <div className='flex space-x-3'>
              <p>{item}</p>
              <span className={`fi fi-${item.toLowerCase().slice(0, -1)}`} />
            </div>
            <p>{rates[item]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CurrencyRates;
