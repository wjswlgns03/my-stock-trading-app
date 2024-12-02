import styled from 'styled-components'

const LiveStockSection = styled.section`
  margin-bottom: 40px;
`

const StockContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
`

const StockList = styled.div`
  background-color: #F1EFEF;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`

const DraggableList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    background: #F1EFEF;
    margin: 10px 0;
    padding: 15px;
    border-radius: 8px;
    cursor: move;
    transition: all 0.3s ease;
    border-left: 4px solid var(--primary-color);

    &:hover {
      background: #CCC8AA;
      transform: translateX(5px);
    }
  }
`

const StockDetail = styled.div`
  background-color: #F1EFEF;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`

const OrderBook = styled.div`
  background-color: #F1EFEF;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`

export default { LiveStockSection, StockContainer, StockList, DraggableList, StockDetail, OrderBook }