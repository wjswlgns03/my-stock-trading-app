import styles from './Portfolio.styles'

const Portfolio = () => (
  <styles.PortfolioSection>
    <h2>포트폴리오 관리</h2>
    <styles.AssetAllocationChart>[자산 배분 차트]</styles.AssetAllocationChart>
    <styles.HoldingsTable>[보유 종목 테이블]</styles.HoldingsTable>
    <styles.PerformanceChart>[수익률 성과 차트]</styles.PerformanceChart>
  </styles.PortfolioSection>
)

export default Portfolio