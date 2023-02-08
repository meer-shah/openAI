import React from 'react'

// components ko import kia hy or components is lye bnay thy k unko ham apni application ma use kr skyen 
// inka ik alag folder hy pora jis ma ik end pay file bnai hy index k nam sy us main sab ko export kia hy 

import { Navbar ,  CTA , Brand } from './components' ;

// yhan b esa hi kia hy  bass containers components sy bry hoty hain is ka b same structure hy
import { Blog , Features , Footer , Header , Possibilty , WHATGPT3 } from './containers';

// css file ko import kia hy yhan
import './App.css';


const App = () => {
  return (
    <div className='App'>
        <div className = "gradient__bg">
          <Navbar/>
          <Header/>
          <Brand/>
        <WHATGPT3/>
        <br/>
      </div>
      
        <Features/>
        <Possibilty/>
       
        
        
        
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App