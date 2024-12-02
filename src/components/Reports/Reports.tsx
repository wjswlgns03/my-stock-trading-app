import styles from './Reports.styles'

const Reports = () => (
  <styles.ReportsSection>
    <h2>거래 내역 및 보고서</h2>
    <styles.ViewToggle>
      <button>캘린더 뷰</button>
      <button>리스트 뷰</button>
    </styles.ViewToggle>
    <styles.TransactionHistory>[거래 내역 리스트]</styles.TransactionHistory>
    <styles.ReportGeneration>
      <button>세금 보고서 생성</button>
      <button>성과 분석 리포트 생성</button>
    </styles.ReportGeneration>
  </styles.ReportsSection>
)

export default Reports