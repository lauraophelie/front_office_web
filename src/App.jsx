import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './Home';  
import Contact from './Contact';
import Error from './Error';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/error" element={<Error />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/message" />
        <Route path="/favoris" />
        <Route path="/annonces" />
       </Routes>
    </BrowserRouter>
  );
}
export default App;
