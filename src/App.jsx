
import './App.css'
import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import Header from './components/header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <div className='max-w-7xl mx-auto mt-15'>
        <AvailablePlayers />
      </div>
    </>
  )
}

export default App
