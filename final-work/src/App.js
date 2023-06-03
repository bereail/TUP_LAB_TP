import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/Forms/SignIn/SignIn';
import SignUp from './components/Forms/SignUp/SignUp';
import BooksHome from './components/Home/BooksHome';
import ForgotPass from './components/Routes/ForgotPass/ForgotPass';



const App = () => {
  const hardcoreBooks = [
    { 
      id: 1,
      title: 'Padre Rico, Padre Pobre', 
      author: 'Robert',
      date: new Date( 2021 , 8 , 12 ),
      pageCount: 410,
    },
    {
      id: 2,
      title: "Todos los fuegos el fuego",
      author: "Julio Cortazar",
      date: new Date( 2020 , 6 , 11 ),
      pageCount: 197,
    },
    {
      id: 3,
      title: "Asesinato en el Orient Express",
      author: "Agatha Christie",
      date: new Date( 2021 , 5 , 9 ),
      pageCount: 256,
    },
    {
      id: 4,
      title: "Las dos torres",
      author: "J.R.R Tolkien",
      date: new Date( 2020 , 3 , 22 ),
      pageCount: 352,
    },
  ];
  
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