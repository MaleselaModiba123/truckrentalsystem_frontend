import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'


function App() {


  return (
    <div className="app-container">
      <BrowserRouter>
        <HeaderComponent />
        <div className="content-container">
          <Routes>
            <Route path="/" element={<CustomerProfile />} />
            <Route
              path="/update-customer/:customerID"
              element={<CustomerComponent />}
            />
            
          </Routes>
        </div>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}

export default App
