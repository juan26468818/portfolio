import './App.css';
import { Route } from 'wouter';
import Home from "./Pages/home/Home"

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} />
    </div>
  );
}

export default App;
