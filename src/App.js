
import './App.css';
import ChatBox from './Components/ChatBox';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import EventsCard from './Components/EventsCard';
// import EventsCard from './Components/EventsCard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<EventsCard />} /> */}
          <Route path='/' element={<ChatBox />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
