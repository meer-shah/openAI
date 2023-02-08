// to use state
import React, { useState } from 'react'
import'./Navbar.css';
// 3line menu hy or close line cross hy
import {RiMenu3Line ,RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg' 
// yeh logo import kia hy

const Menu = () =>{
  return(
    <>
  <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT-3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#f">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
  </>
  )
  
};
// we are using BEM= block element modifier as naming convention
const Navbar = () => {
  // its hook 
  // toggleMenu btay ga k menu show horha hy yah nhi 
  // setToggleMenu ik function hoga jo k variable change krny k lye use hoga
  const [toggleMenu , setToggleMenu] = useState(false);
  
  return ( 
    
    <div className='gpt3__navbar'>
{/* // is ma pori nav bar enclosed hy */}
      <div className="gpt3__navbar-links">
        {/* is ma menu or  hmari app ka logo hy jo import karwaya tha */}
        <div className="gpt3__navbar-links_logo">
          {/* logo onli */}
          <img src={logo} alt="logo" />

          </div>
            <div className="gpt3__navbar-links_container">
              {/* menu onli */}
              <Menu/>
            </div>
          </div>

      <div className="gpt3__navbar-sign">
        {/* sign in or sign up button  */}
        <p>Sign-in</p>
        <button type='button'>Sign up</button>
      </div>

      <div className="gpt3__navbar-menu">
        {/* yeh ab choty device py responsive bnany k lye hy  */}
       
      {toggleMenu
      ?<RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
      :<RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
       /* jb close py click kro gy to menu show ni hoga false ho jayga  
        ot jb 3 lines py click kro gy tb menu show hoga true ho jay ga */
    }  
    {
      // agr toggleMenu true hy to menu show hora hoga 
      toggleMenu &&(
        // scale up animation
        <div className="gpt3__navbar-menu_container scale-up-center">
          {/* animation k lye hy is ma menu or sign in sign up button show hon gay */}
          <div className="gpt3__navbar-menu_container-links">
            {/* onli menu */}
            <Menu/>
          </div>

          <div className="gpt3__navbar-menu_container-links-sign">
            {/* sign  */}
            <p>Sign in</p>
            <button type='button'>Signup</button>
          </div>
        </div>
      )
    };
    
      </div>
        </div>
     
  
  );
};

export default Navbar