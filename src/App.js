import React, { Component } from 'react';
import {BrowserRouter, Route,Link,Switch} from 'react-router-dom';

import Login from './login';
import Other from './page';

export default class App extends Component {
  render() {
    return (
      <div>      
      <BrowserRouter>        
        {/* <Link to="/form">form</Link> <br/>        
        <Link to="/clock">clock</Link>          //注意拦截的路径（一旦匹配上，不会再向下匹配了，因此将复杂路径放前面，简易的放后面） */}
       <Switch>          
        <Route path="/login" component={Login}></Route>             
        <Route path="/" component={Other}></Route>        
       </Switch>      
      </BrowserRouter>    
    </div>      
    );
  }
}

