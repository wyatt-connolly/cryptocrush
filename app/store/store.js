import { create } from "zustand";

export const useCoinStore = create((set) => ({
  coin: {},
  setCoin: (coin) => set({ coin }),
  // add coin to an array
  addCoin: (coin) =>
    set((state) => ({
      coin: [...state.coin, coin],
    })),
  // remove coin from an array
  removeCoin: (coin) =>
    set((state) => ({
      coin: state.coin.filter((c) => c.id !== coin.id),
    })),
  // update coin in an array
  updateCoin: (coin) =>
    set((state) => ({
      coin: state.coin.map((c) => (c.id === coin.id ? coin : c)),
    })),
}));
