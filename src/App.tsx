import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import LiveStock from './components/LiveStock/LiveStock'
import Strategy from './components/Strategy/Strategy'
import Portfolio from './components/Portfolio/Portfolio'
import Reports from './components/Reports/Reports'

const App = () => (
  <>
    <Header />
    <main>
      <Dashboard />
      <LiveStock />
      <Strategy />
      <Portfolio />
      <Reports />
    </main>
  </>
)

export default App