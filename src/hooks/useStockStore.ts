import { create } from 'zustand'
import { StockStore } from '../types/stock.types'

const useStockStore = create<StockStore>((set) => ({
  totalAsset: 0,
  dailyProfit: 0,
  profitRate: 0,
  setPortfolioSummary: (totalAsset, dailyProfit, profitRate) => 
    set({ totalAsset, dailyProfit, profitRate }),
}))

export default useStockStore