import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConversationMessage from './pages/ConversationMessage';
import ConversationNoMessage from './pages/ConversationNoMessage';
import ListeMessage from './pages/ListeMessage';
import ConversationMessageConnect from './pages/ConversationMessageConnect';
import Accueil from './Home';  
import Contact from './Contact';
import Error from './Error';

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<ListeMessage/>} />
        <Route path="/conversation" element={<ConversationMessage/>} />
        <Route path="/conversationBlank" element={<ConversationNoMessage/>} />
        <Route path="/conversationNotAuth" element={<ConversationMessageConnect/>} />
        <Route path="/" element={<Accueil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/error" element={<Error />} />
      </Routes>
      </Router>
    </>
  )
}
export default App;
