import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './Home';  // Assurez-vous que le chemin est correct
import Contact from './Contact';  // Assurez-vous que le chemin est correct

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
