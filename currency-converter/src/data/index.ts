import { useQuery } from 'react-query';
import { fetchConvert, fetchExhangeRate, fetchSymbols } from '../api';

export function useExchangeRate(symbols: string[], base: string) {
  const query = useQuery(['latest', base], () =>
    fetchExhangeRate(symbols, base)
  );

  return query;
}

export function useSymbols() {
  const query = useQuery('symbols', fetchSymbols);

  return query;
}

export function useConvertCurrency(to: string, from: string, amount: number) {
  const query = useQuery(
    ['convert', to, from, amount],
    () => fetchConvert(to, from, amount),
    {
      enabled: amount > 0,
    }
  );

  return query;
}
