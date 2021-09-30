import './App.css'
import { useSelector } from 'react-redux'
import { Navbar, AppRouter, FilterBar } from './components'
import { useEffect } from 'react';
import { useActions } from './hooks/useAction';

const App = () => {
  const { appReady } = useSelector(state => state.app);
  const { filterBarVisible } = useSelector(state => state.jogs);
  const { initApp } = useActions()

  useEffect(() => {
    if (!appReady) initApp(true)
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
