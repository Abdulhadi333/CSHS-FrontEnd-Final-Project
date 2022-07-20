import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Footers from './components/Footers';
import Login from './components/Login';
import Home from './components/Home';
import Create from './components/Create'
import Update from './components/Update';
import List from './components/List';
import Profile from './components/Profile';
import Home2 from './components/Home2';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route path='/' element={<Home />}></Route>
          <Route path='Login' element={<Login />}></Route>
          <Route path='Create' element={<Create />}></Route>
          <Route path='Update' element={<Update />}></Route>
          <Route path='List' element={<List />}></Route>
          <Route path='Profile' element={<Profile />}></Route>
          <Route path='Home2' element={<Home2 />}></Route>

        </Routes>
        <Footers />

      </Router>
      
    </div>
  );
}

export default App;
