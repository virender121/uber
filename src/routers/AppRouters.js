import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import HomePage from './../Components/HomePage';
import UserSignInPage from './../Components/UserSignInPage';
import NotFoundPage from './../Components/NotFoundPage';
import HelpPage from './../Components/HelpPage';
import ToolBar from './../Components/Toolbar';
// import DriverSignInPage from './../Components/DriverSignInPage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginPage from './../Components/LoginPage';
import RidePage from './../Components/RidePage';
import MapPage from './../Components/MapPage';

const AppRouter = () => (
  <BrowserRouter>
    <MuiThemeProvider>
      <ToolBar />
      <div> {/* Wrap Routes component with a div */}
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/UserSignIn" element={<UserSignInPage />} />
          {/* <Route path="/DriverSignIn" element={<DriverSignInPage />} /> */}
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/bookACab" element={<RidePage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </MuiThemeProvider>
  </BrowserRouter>
);

export default AppRouter;
