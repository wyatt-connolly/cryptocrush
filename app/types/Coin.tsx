export type Coin = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  thumb?: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume?: number;
  high_24h?: number;
  low_24h?: number;
  price_change_percentage_24h?: number;
  price_change_percentage_7d?: number;
  price_change_percentage_14d?: number;
  price_change_percentage_30d?: number;
  price_change_percentage_1h_in_currency?: number;
  price_change_percentage_24h_in_currency?: number;
  price_change_percentage_7d_in_currency?: number;
  imageUrl?: string;
  links?: string[];
  about?: string;
  fields?: {
    Rank: string;
    Symbol: string;
    Price: string;
    Hashing: string;
    "All Time High": string;
    Categories: string;
    "All Time Low": string;
    Genesis: string;
  };
  description?: {
    en: string;
  };
  hashing_algorithm?: string;
  categories?: string[];
  genesis_date?: string;
  market_data?: {
    current_price: {
      usd: number;
    };
    ath: {
      usd: number;
    };
    atl: {
      usd: number;
    };
  };
  small?: string;
  price_btc?: number;
};
