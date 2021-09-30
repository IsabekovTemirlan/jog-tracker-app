import './App.css'
import { useSelector } from 'react-redux'
import { Navbar, AppRouter, FilterBar } from './components'
import { useEffect } from 'react';
import { useActions } from './hooks/useAction';

const App = () => {
  const { filterBarVisible, appReady } = useSelector(state => state.app);
  const { initApp } = useActions()

  useEffect(() => {
    if (!appReady) initApp()
  }, [])

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
