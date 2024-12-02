import styles from './LiveStock.styles'

const LiveStock = () => (
  <section id="live-stock" className={styles.LiveStockSection}>
    <h2>실시간 주식 정보</h2>
    <div className={styles.StockContainer}>
      <div className={styles.StockList}>
        <h3>관심 종목 리스트</h3>
        <ul className={styles.DraggableList}>
          <li>[종목1]</li>
          <li>[종목2]</li>
        </ul>
      </div>
      <div className={styles.StockDetail}>
        <h3>선택된 종목 상세 정보</h3>
        <div>[차트 영역]</div>
        <div>[상세 정보]</div>
      </div>
      <div className={styles.OrderBook}>
        <h3>호가창</h3>
        <div>[실시간 호가]</div>
      </div>
    </div>
  </section>
)

export default LiveStock