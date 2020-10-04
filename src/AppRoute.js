import React from 'react';
import{
  HashRouter as Router,
  Route
} from 'react-router-dom';
  

import App from './App';
import MenuMakanan from './Page/MenuMakanan';
import MenuMinuman from './Page/MenuMinuman';
import Kontak from './Page/Kontak';


const AppRoute =()=>(
  <Router>
    <div>
    
        <Route exact path="/" component={App}/>
        <Route exact path="/menu_makanan" component={MenuMakanan}/>
        <Route exact path="/menu_minuman" component={MenuMinuman}/>
        <Route exact path="/kontak" component={Kontak}/>
        
   
    </div>
  </Router>
);

export default AppRoute;