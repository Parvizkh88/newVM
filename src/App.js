import './App.css';
import Main from './components/Main';
import Navbar from './components/layouts/Navbar';
import Sidebar from './components/layouts/Sidebar';
import RoutesMap from './routes';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

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
