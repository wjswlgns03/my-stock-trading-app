import useStockStore from '../../hooks/useStockStore'
import styles from './Dashboard.styles'

const Dashboard = () => {
  const { totalAsset, dailyProfit, profitRate } = useStockStore()

  return (
    <section id="dashboard" className={styles.DashboardSection}>
      <h2>메인 대시보드</h2>
      <div className={styles.Ticker}>현재 시장 동향: [주요 지수]</div>
      <div className={styles.PortfolioSummary}>
        <h3>포트폴리오 요약</h3>
        <p>총 자산: <span>{totalAsset}</span></p>
        <p>일일 손익: <span>{dailyProfit}</span></p>
        <p>수익률: <span>{profitRate}</span></p>
      </div>
      <div className={styles.Notifications}>
        <h3>주요 알림</h3>
        <ul>
          <li>[최근 거래 내역 및 알림 메시지]</li>
        </ul>
      </div>
    </section>
  )
}

export default Dashboard