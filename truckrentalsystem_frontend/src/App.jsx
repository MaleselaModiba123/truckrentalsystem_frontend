import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'


function App() {


  return (
    <>
  <BrowserRouter>
  <HeaderComponent/>
  <Routes>
<Route>

</Route>
  </Routes>
  
  <FooterComponent/>
  </BrowserRouter>
    </>
  )
}

export default App
