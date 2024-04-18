import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SuperVisors from './componantDashboard/SuperVisors';
import AddSuperVisor from './componantDashboard/AddSuperVisor';
import UpdateSupervisors from './componantDashboard/UpdateSupervisors';
import MartyrsDash from './componantDashboard/MartyrsDash';
import DisplayMartysDash from './componantDashboard/DisplayMartysDash';
import DetaineesDash from './componantDashboard/DetaineesDash';
import DisplayDestainessDash from './componantDashboard/DisplayDestainessDash';
import MissingDash from './componantDashboard/MissingDash';
import DisplayMissingDash from './componantDashboard/DisplayMissingDash';
import WarCriminals from './componantDashboard/WarCriminals';
import DisplayWarCriminals from './componantDashboard/DisplayWarCriminals';
import TraitorsDash from './componantDashboard/TraitorsDash';
import DisplayTraitorsDash from './componantDashboard/DisplayTraitorsDash';
import HonorCard from './componantDashboard/HonorCard';
import DisplayHonorCard from './componantDashboard/DisplayHonorCard';
import LastNewsDash from './componantDashboard/LastNewsDash';
import RevolutionArchiveDash from './componantDashboard/RevolutionArchiveDash';
import SymbolsoftheRevolution from './componantDashboard/SymbolsoftheRevolution';
import BlackListDash from './componantDashboard/BlackListDash';
import CrimesSystem from './componantDashboard/CrimesSystem';
import UsersDash from './componantDashboard/UsersDash';
import AddUser from './componantDashboard/AddUser';
import UpdateUser from './componantDashboard/UpdateUser';
import SymbolThouraUser from './componantUser/SymbolThouraUser/SymbolThouraUser';
import BlackListUser from './componantUser/BlackListUser/BlackListUser';
import GaraamDaaehUser from './componantUser/GaraamDaaehUser/GaraamDaaehUser';
import GaraamQasad from './componantUser/GraamQasad/GaraamQasad';
import MainPage from './componantUser/MainPage/MainPage';
import { ContextProvider } from './context/Context';
import BaraemSystem from './componantUser/GaraamSystem/BaraemSystem';
import NewsDetails from './componantUser/NewsDetails/NewsDetails';
import WantedToSystem from './componantUser/WantedToSytstem/WantedToSystem';
import DataDisplaySite from './componantDashboard/DataDisplaySite';
import ResponseLastNews from './componantDashboard/ResponseLastNews';
import ResponseLastChild from './componantDashboard/DataSite/ResponseLastChild';
import DataSiteResponseMassacre from './componantDashboard/DataSite/DataSiteResponseMassacre';
import UpdateLastNews from './componantDashboard/DataSite/UpdateLastNews';
import ResponseUpdateChild from './componantDashboard/DataSite/ResponseUpdateChild';
import UpdateSiteMascers from './componantDashboard/DataSite/UpdateSiteMascers';
import NewsDetailsMascers from './componantUser/NewsDetails/NewsDetailsMascers';
import NewsDetailsMartyr from './componantUser/NewsDetails/NewsDetailsMartyr';
import UpdatedPassword from './componantUser/UpdatedPassword/UpdatedPassword.jsx';
import ProtectedRouted from './componantDashboard/ProtectedRouted.jsx';
import ArchiefThourahUser from "./componantUser/ArchiefThouraUser/ArchiefThourahUser.jsx";
import SpinnerFull from './componantUser/SpinnerFull.jsx';
import {  ContextDashboardProvider } from './context/DashboardContext.jsx';
import AllExcelDash from './componantDashboard/AllExcelDash.jsx';
import ExeclSheet from './componantDashboard/ExeclSheet.jsx';
import MainPageFirst from './componantUser/MainPageFirst/MainPageFirst.jsx';
const HomeUser = lazy( () => import( './componantUser/HomeUser.jsx' ) );
const HomeDashboard = lazy(() =>
  import("./componantDashboard/HomeDashboard.jsx")
);

export default function App() {
  return (
    <ContextDashboardProvider>
      <ContextProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFull />}>
            <Routes>
              <Route path="/" element={<HomeUser />}>
                <Route path="/" element={<MainPageFirst />} />
                <Route path="/lastNews" element={<MainPage />} />
                <Route path="archiefthoura" element={<ArchiefThourahUser />} />
                <Route path="symbolthourauser" element={<SymbolThouraUser />} />
                <Route path="blacklistuser" element={<BlackListUser />} />
                <Route path="graamsystem" element={<BaraemSystem />} />
                <Route path="graemqasad" element={<GaraamQasad />} />
                <Route path="graemdashuser" element={<GaraamDaaehUser />} />
                <Route path="/success/:id" element={<UpdatedPassword />} />
              </Route>
              <Route path="newsDetails/:id" element={<NewsDetails />} />
              <Route
                path="NewsDetailsMascers/:id"
                element={<NewsDetailsMascers />}
              />
              <Route
                path="NewsDetailsMartyr/:id"
                element={<NewsDetailsMartyr />}
              />

              <Route path="WantedToSystem" element={<WantedToSystem />} />
              <Route
                path="dashboard"
                element={
                  <ProtectedRouted>
                    <HomeDashboard />
                  </ProtectedRouted>
                }
              >
                <Route path="supervisor" element={<SuperVisors />} />
                <Route path="addsupervisor" element={<AddSuperVisor />} />
                <Route
                  path="updatesupervisor"
                  element={<UpdateSupervisors />}
                />
                <Route path="martyrs" element={<MartyrsDash />} />
                <Route path="martyrs/:id" element={<DisplayMartysDash />} />
                <Route path="detaineesdash" element={<DetaineesDash />} />
                <Route
                  path="detaineesdash/:id"
                  element={<DisplayDestainessDash />}
                />
                <Route path="missingdash" element={<MissingDash />} />
                <Route
                  path="missingdash/:id"
                  element={<DisplayMissingDash />}
                />
                <Route path="warcriminals" element={<WarCriminals />} />
                <Route
                  path="displaywarcriminals/:id"
                  element={<DisplayWarCriminals />}
                />
                <Route path="traitors" element={<TraitorsDash />} />
                <Route path="traitors/:id" element={<DisplayTraitorsDash />} />
                <Route path="honorcard" element={<HonorCard />} />
                <Route path="honorcard/:id" element={<DisplayHonorCard />} />
                <Route path="lastnewsdash" element={<LastNewsDash />} />
                <Route
                  path="revolutionarchivedash"
                  element={<RevolutionArchiveDash />}
                />
                <Route
                  path="symbolsoftherevolution"
                  element={<SymbolsoftheRevolution />}
                />

                <Route path="allexcel" element={<AllExcelDash />} />
                <Route path="excel" element={<ExeclSheet />} />
                <Route path="blacklist" element={<BlackListDash />} />
                <Route path="crimessystem" element={<CrimesSystem />} />
                <Route path="userDash" element={<UsersDash />} />
                <Route path="AddUser" element={<AddUser />} />
                <Route path="updateuser" element={<UpdateUser />} />
                <Route path="dataDisplaySite" element={<DataDisplaySite />} />
                <Route
                  path="dataDisplaySite/:id"
                  element={<ResponseLastNews />}
                />
                <Route
                  path="dataChildDisplaySite/:id"
                  element={<ResponseLastChild />}
                />
                <Route
                  path="dataChildDisplaySitemascr/:id"
                  element={<DataSiteResponseMassacre />}
                />
                <Route
                  path="dataDisplaySiteupdate/:id"
                  element={<UpdateLastNews />}
                />
                <Route
                  path="dataChildDisplaySiteupdate/:id"
                  element={<ResponseUpdateChild />}
                />
                <Route
                  path="dataChildDisplaySitemascrupdate/:id"
                  element={<UpdateSiteMascers />}
                />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ContextProvider>
    </ContextDashboardProvider>
  );
}
