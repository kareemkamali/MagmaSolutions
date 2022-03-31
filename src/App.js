import HomePage from "./pages/HomePage";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

function App() {
  return (
  <>
  <Router>
  <Switch>
        <Route path="/" >
        <HomePage></HomePage>
        </Route>
</Switch>
  </Router>


  </>
  );
}

export default App;
