import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Jam from './components/jam';
import Contact from './components/contact';
// import service from './components/service';
function App() {
  return (
      <div className="App">
        <Hello/>
        <Message/>
        <Jam></Jam>
        <Contact/>
        
      </div>
  );
}

export default App;
