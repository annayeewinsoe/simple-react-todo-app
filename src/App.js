import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TodoList from './components/TodoList'
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={TodoList} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
