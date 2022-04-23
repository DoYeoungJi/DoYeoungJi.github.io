import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, BrowserRouter,useParams } from 'react-router-dom'
import Main from "./container/main";
import Works from "./container/works";
import WorksDetail from "./container/works_detail";
import Contact from "./container/contact";
import About from "./container/about";
import Header from "./component/header/header";
import './style/style.scss'
import _ from 'lodash'

function App() {

  const [detailPage,setDetailPage] = useState(false);

  return (
    <div className={detailPage ? "Wrap greenPage" : "Wrap" } >
      <div className="mediaPosition">
        <div className="centerH">
          위 페이지는 웹상에서 확인해주시기 바랍니다.
          <br/>
          감사합니다.
        </div>
      </div>
      <BrowserRouter>
          {
            detailPage ? <Header whiteMode={true}/> : <Header whiteMode={false}/>
          }
          
          <Route exact path = "/" render={() => <Main setDetailPage={setDetailPage}/>} />
          <Route path = "/works/:id" render={() => <WorksDetail setDetailPage={setDetailPage} /> } />
          <Route exact path = "/works" render={() => <Works setDetailPage={setDetailPage} /> } />
          <Route path = "/about" render={() => <About setDetailPage={setDetailPage} /> }  />
          <Route path = "/contact"  render={() => <Contact setDetailPage={setDetailPage} />  }/>
      </BrowserRouter>
    </div>
  );
}

export default App;
