import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import '../assets/css/App.css'
import Login from './Login'
import Signup from './Signup'
import Quadrinhos from './Quadrinhos';
import Home from './Home';
import { store } from '../context/store';

const App: React.FC = () => {

  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Quadrinhos" element={<Quadrinhos />} />
      </Routes>
    </Router>
    </Provider>
  );
};

export default App;