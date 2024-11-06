import './App.css'
import LeftPart from './components/LeftPart/LeftPart'
import RightPart from './components/RightPart/RightPart'
import FooterPanel from './components/Footer/FooterPanel'

function App() {

  return (
    <>
      

      <div className='flex p-2 gap-2'>
        <LeftPart />
        <RightPart />
        <FooterPanel />
      </div>
      
    </>
  )
}

export default App
