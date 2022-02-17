import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from './pages/Home.js';
import Guide from './pages/Guide.js';
import GuideDetails from './pages/GuideDetails.js';
import Proposal from './pages/Proposal.js';
import MintingBoard from './pages/MintingBoard';
import WriteMintingBoard from './pages/WriteMintingBoard';

import 'antd/dist/antd.css';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/guide" element={<Guide/>}/>
        <Route path="/guide/:id" element={<GuideDetails/>}/>
        <Route exact path="/proposal" element={<Proposal/>}/>
        <Route exact path="/mintingBoard" element={<MintingBoard/>}/>
        <Route exact path="/mintingBoard/write" element={<WriteMintingBoard/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
