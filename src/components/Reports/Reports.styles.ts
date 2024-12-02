import styled from 'styled-components'

const ReportsSection = styled.section`
  margin-bottom: 40px;
`

const ViewToggle = styled.div`
  margin-bottom: 20px;

  button {
    background: var(--primary-color);
    color: #F1EFEF;
    border: none;
    padding: 12px 20px;
    margin-right: 15px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;

    &:hover {
      background: #CCC8AA;
      transform: translateY(-2px);
    }
  }
`

const TransactionHistory = styled.div`
  background-color: #F1EFEF;
  padding: 25px;
  border-radius: 8px;
  margin-bottom: 25px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`

const ReportGeneration = styled.div`
  button {
    background: var(--primary-color);
    color: #F1EFEF;
    border: none;
    padding: 12px 20px;
    margin-right: 15px;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;

    &:hover {
      background: #CCC8AA;
      transform: translateY(-2px);
    }
  }
`

export default { ReportsSection, ViewToggle, TransactionHistory, ReportGeneration }