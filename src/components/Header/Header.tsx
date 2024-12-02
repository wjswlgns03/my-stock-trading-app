import styles from './Header.styles'

const Header = () => (
  <header className={styles.HeaderContainer}>
    <h1>주식 자동 매매 플랫폼</h1>
    <nav className={styles.Nav}>
      <ul>
        <li><a href="#dashboard">대시보드</a></li>
        <li><a href="#live-stock">실시간 주식 정보</a></li>
        <li><a href="#strategy">자동 매매 전략</a></li>
        <li><a href="#portfolio">포트폴리오 관리</a></li>
        <li><a href="#reports">거래 내역 및 보고서</a></li>
      </ul>
    </nav>
  </header>
)

export default Header