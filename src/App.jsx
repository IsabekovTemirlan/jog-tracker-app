import './App.css'
import {Navbar, Greating, FilterBar} from './components'
import {JogsPage} from './pages'

function App() {

  return (
    <div className="App">
      <Navbar />
      <JogsPage />

      <div className="content f-center">
        <Greating />
      </div>
    </div>
  )
}

export default App
