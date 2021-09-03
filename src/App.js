import SignUpPage from "./signUpPage";
import MainPage from "./StartPage/startPage";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
   
      <Router>
         <div id="mainApp">
            <Switch>
              <Route exact path="/">
                  <MainPage />
              </Route>
              <Route path="/signUp">
                  <SignUpPage />
              </Route>          
            </Switch>  
        </div> 
      </Router>   
    
    
  );
}

export default App;
