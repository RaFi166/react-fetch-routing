import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Posts from './Components/Posts/Posts';
import ViewPost from './Components/ViewPost/ViewPost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/about">
            <About> </About>
          </Route>

          <Route path="/posts">
            <Posts></Posts>
          </Route>

          <Route path="/post/:id">
            <ViewPost></ViewPost>

          </Route>

        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
