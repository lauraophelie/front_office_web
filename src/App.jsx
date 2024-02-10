import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConversationMessage from './pages/ConversationMessage';
import ConversationNoMessage from './pages/ConversationNoMessage';
import ListeMessage from './pages/ListeMessage';
import Login from './pages/Login';
import ConversationMessageConnect from './pages/ConversationMessageConnect'; 
import Contact from './Contact';
import Error from './Error';
import Home from './Home';
import Annonces from './pages/Annonces';

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/message" element={<ListeMessage/>} />
        <Route path="/conversation" element={<ConversationMessage/>} />
        <Route path="/conversationBlank" element={<ConversationNoMessage/>} />
        <Route path="/conversationNotAuth" element={<ConversationMessageConnect/>} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/error" element={<Error />} />
        <Route path="/annonces" element={<Annonces/>}/>
        <Route path="/login" element={<Login/>} />
      </Routes>
      </Router>
    </>
  )
}

export default App;
