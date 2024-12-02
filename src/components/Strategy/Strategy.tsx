import styles from './Strategy.styles'

const Strategy = () => (
  <styles.StrategySection>
    <h2>자동 매매 전략 설정</h2>
    <styles.StrategyWizard>
      <h3>전략 설정 마법사</h3>
      <styles.VisualEditor>[비주얼 에디터 영역]</styles.VisualEditor>
      <styles.BacktestResults>[백테스팅 결과 영역]</styles.BacktestResults>
    </styles.StrategyWizard>
  </styles.StrategySection>
)

export default Strategy