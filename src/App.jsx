import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './Home';  
import Contact from './Contact';
import Error from './Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
