export type Coin = {
  id: string;
  name: string;
  symbol: string;
  image: string;
  thumb: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d: number;
  price_change_percentage_14d: number;
  price_change_percentage_30d: number;
  imageUrl: string;
  links: string[];
  about: string;
  fields: {
    Rank: string;
    Symbol: string;
    Price: string;
    Hashing: string;
    "All Time High": string;
    Categories: string;
    "All Time Low": string;
    Genesis: string;
  };
  description: {
    en: string;
  };
  hashing_algorithm: string;
  categories: string[];
  genesis_date: string;
  market_data: {
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
  item: {
    id: string;
    coin_id: string;
    name: string;
    symbol: string;
    thumb: string;
    small: string;
    large: string;
    slug: string;
    price_btc: number;
    score: number;
  };
};
