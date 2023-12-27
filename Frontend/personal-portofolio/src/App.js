// App.js
import React from 'react';
import Homepage from './pages/Homepage';
import './style.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BackgroundOverlay from './pages/components/BackgroundOverlay';
import WebsitePage from './pages/Projects Menu/WebsitePage';
import MobilePage from './pages/Projects Menu/MobilePage';
import GamePage from './pages/Projects Menu/GamePage';
import Submarine from './pages/Projects Page/Games/Submarine';
import PaperBoat from './pages/Projects Page/Games/Paperboat';
import AiChess from './pages/Projects Page/Games/AiChess';
import VrElectrical from './pages/Projects Page/Games/VrElectrical';
import DracAndMegs from './pages/Projects Page/Games/DracAndMegs';
import PissMeOff from './pages/Projects Page/Games/PissMeOff';
import ChessforNoobs from './pages/Projects Page/Games/ChessforNoobs';
import ArBapelkes from './pages/Projects Page/Games/ArBapelkes';
import BoqRequestMobile from './pages/Projects Page/Mobile/BoqRequestMobile';
import PersonalPortofolioWeb from './pages/Projects Page/Websites/PersonalPortofolioWeb';
import BoqRequestWeb from './pages/Projects Page/Websites/BoqRequestWeb';
import PakarKecanduanPornografi from './pages/Projects Page/Websites/PakarKecanduanPornografi';


const App = () => {
  return (
    
    <div>

      <BackgroundOverlay />
      <Router>
      <Routes>
        <Route path = "/" element = {<Homepage />}/>
        <Route path = "/websites" element = {<WebsitePage />}/>
        <Route path = "/mobile" element = {<MobilePage />}/>
        <Route path = "/game" element = {<GamePage />}/>
        {/* Games */}
        <Route path = "/submarine" element = {<Submarine />}/>
        <Route path = "/paperboat" element = {<PaperBoat />}/>
        <Route path = "/aichess" element = {<AiChess />}/>
        <Route path = "/vrelectrical" element = {<VrElectrical />}/>
        <Route path = "/dracandmegs" element = {<DracAndMegs />}/>
        <Route path = "/pissmeoff" element = {<PissMeOff />}/>
        <Route path = "/chessfornoobs" element = {<ChessforNoobs />}/>
        <Route path = "/arbapelkes" element = {<ArBapelkes />}/>
        {/* Mobile */}
        <Route path = "/boqrequestmobile" element = {<BoqRequestMobile />}/>
        {/* Web */}
        <Route path = "/personalportofolioweb" element = {<PersonalPortofolioWeb />}/>
        <Route path = "/boqrequestweb" element = {<BoqRequestWeb />}/>
        <Route path = "/kecanduanpornografiweb" element = {<PakarKecanduanPornografi />}/>
      </Routes>
    </Router>
    </div>

  );
};

export default App;
