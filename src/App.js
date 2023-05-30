import { Routes, Route } from 'react-router-dom'
import Home from './Components/pages/Home/Home';
import SignInPage from './Components/SignIn/SignIn';
import GotoSignUp from './Components/GotoSignUp/GotoSignUp';
import SignUpPage from './Components/Register/SignUpPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignInPage />} />
        <Route path='/enter-page' element={<GotoSignUp />} />
        <Route path='/sign-up' element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
