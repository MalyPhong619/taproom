import React from 'react';
import TapList from './TapList';
import { Switch, Route } from 'react-router-dom';
import Admin from './Admin';
import Header from './Header';
import UserView from './UserView';
import Error404 from './Error404';



function App(){
  return (
    <div>
      <style jsx>{`
          div {
            margin: auto;
            width: 90%;
          }
          `}</style>
      <Header/>
      <Switch>
        <Route exact path='/' component={UserView} />
        <Route exact path='/taplist' component={TapList} />
        <Route exact path='/admin' component={Admin} />
        <Route component={Error404} />;
      </Switch>
    </div>
  );
}

export default App;
