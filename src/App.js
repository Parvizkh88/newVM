import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import './App.css';
import Navbar from './components/layouts/Navbar';
import Sidebar from './components/layouts/Sidebar';
import RoutesMap from './routes';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="d-flex">
        <Sidebar />
        <RoutesMap />
      </div>
    </BrowserRouter>
  );
}

export default App;
