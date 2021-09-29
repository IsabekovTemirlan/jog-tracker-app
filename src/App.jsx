import './App.css'
import { Navbar, AppRouter, FilterBar } from './components'

const App = () => {

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/* <FilterBar /> */}
        <AppRouter />
      </div>
    </div>
  )
}

export default App
