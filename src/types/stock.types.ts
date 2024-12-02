export interface StockStore {
    totalAsset: number
    dailyProfit: number
    profitRate: number
    setPortfolioSummary: (totalAsset: number, dailyProfit: number, profitRate: number) => void
  }