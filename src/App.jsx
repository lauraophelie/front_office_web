import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConversationMessage from './pages/ConversationMessage';
import ConversationNoMessage from './pages/ConversationNoMessage';
import ListeMessage from './pages/ListeMessage';
import ConversationMessageConnect from './pages/ConversationMessageConnect';

function App() {

  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<ListeMessage/>} />
        <Route path="/conversation" element={<ConversationMessage/>} />
        <Route path="/conversationBlank" element={<ConversationNoMessage/>} />
        <Route path="/conversationNotAuth" element={<ConversationMessageConnect/>} />
      </Routes>
      </Router>
    </>
  )
}

export default App
