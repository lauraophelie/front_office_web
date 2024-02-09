import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ConversationMessage from './pages/ConversationMessage';
import ListeMessage from './pages/ListeMessage';

function App() {

  return (
    <>
      <Router>
      <Routes>
          <Route path="/conversation" element={<ConversationMessage/>} />
          <Route path="/" element={<ListeMessage/>} />
      </Routes>
      </Router>
    </>
  )
}

export default App
