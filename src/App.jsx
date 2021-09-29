import './App.css'
import { useSelector } from 'react-redux'
import { Navbar, AppRouter, FilterBar } from './components'

const App = () => {
  const { filterBarVisible } = useSelector(state => state.app);

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {filterBarVisible && <FilterBar />}
        <AppRouter />
      </div>
    </div>
  )
}

export default App
