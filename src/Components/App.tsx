import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../context/store';
import Login from './Login'
import Signup from './Signup'
import Quadrinhos from './Quadrinhos';
import Home from './Home';
import '../assets/css/App.scss'

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