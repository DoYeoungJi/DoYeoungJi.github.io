import React from 'react';
import {Link,Route, BrowserRouter,useLocation } from 'react-router-dom'

const Header = ({whiteMode}) => {

  const nowLocation = useLocation()

  return(
    <div className="headerWrap">
      <div className="headers">

        <div className={whiteMode ? "logoWrap logoWhite" : "logoWrap" }>
          <Link to="/"><span className="boldLogo">MAP</span> WORLD</Link>
        </div>

        <div className={whiteMode ? "menuWrap menuWhite" : "menuWrap" }>
          <div className= {((nowLocation.pathname === "/works") || whiteMode) ? "menuBox active" : "menuBox"} >
            <Link to="/works">WORKS</Link>
          </div>
          <div className={nowLocation.pathname === "/about" ? "menuBox active" : "menuBox"}>
            <Link to="/about">ABOUT ME</Link>
          </div>
          <div className={nowLocation.pathname === "/contact" ? "menuBox active" : "menuBox"}>
            <Link to="/contact">CONTACT</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Header

