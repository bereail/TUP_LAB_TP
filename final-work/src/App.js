import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/Forms/SignIn/SignIn';
import SignUp from './components/Forms/SignUp/SignUp';
import BooksHome from './components/Home/BooksHome';
import ForgotPass from './components/Routes/ForgotPass/ForgotPass';



const App = () => {

  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<BooksHome />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/forgotPass" element={<ForgotPass />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;