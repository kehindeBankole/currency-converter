import { API_KEY } from 'constants';
import { ConvertedResult, Currency } from 'types';

export async function fetchExhangeRate(symbols: string[],base:string): Promise<{
  rates: {
    [key: string]: unknown;
  };
  message: string;
}> {
  const response = await fetch(
    `https://api.apilayer.com/fixer/latest?base=${base}&symbols=${symbols.join(
      ','
    )}`,
    {
      headers: {
        apikey: API_KEY,
      },
    }
  );
  const data = await response.json();
  return data;
}

export async function fetchSymbols(): Promise<{ symbols: Currency , message:string }> {
  const response = await fetch(`https://api.apilayer.com/fixer/symbols`, {
    headers: {
      apikey: API_KEY,
    },
  });
  const data = await response.json();
  return data;
}

export async function fetchConvert(
  to: string,
  from: string,
  amount: number
): Promise<ConvertedResult> {
  const response = await fetch(
    `https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`,
    {
      headers: {
        apikey: API_KEY,
      },
    }
  );
  const data = await response.json();
  return data;
}
