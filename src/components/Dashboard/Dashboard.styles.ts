import styled from 'styled-components'

const DashboardSection = styled.section`
  margin-bottom: 40px;
  background-color: #F1EFEF;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`

const Ticker = styled.div`
  background: var(--secondary-color);
  color: white;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 25px;
  font-weight: 500;
  text-align: center;
`

const PortfolioSummary = styled.div`
  background-color: #F1EFEF;
  padding: 25px;
  border-radius: 8px;
  margin-bottom: 25px;
  border-left: 4px solid var(--primary-color);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`

const Notifications = styled.div`
  background-color: #F1EFEF;
  padding: 25px;
  border-radius: 8px;
  margin-bottom: 25px;
  border-left: 4px solid var(--primary-color);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`

export default { DashboardSection, Ticker, PortfolioSummary, Notifications }