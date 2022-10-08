import { Routes, Route } from "react-router-dom";

import AuthenticatedRoute from './context/AuthenticatedRoute';
import EmployeeRoute from './context/EmployeeRoute';

import SignModal from "./components/modal/ModalSignIn";

import Home from './public/home';
import Homes from './public/homes/homes';
import Search from './public/search';
import Hosting from './public/hosting/hosting-loc';
import HostingMessages from './public/hosting/messages';
import HostingAnnounces from './public/hosting/announces';
import HostingFolder from './public/hosting/folder';
import Account from './public/account';
import AccountSettings from './public/account-settings';
import AccountSettingsPersonnalInformations from './public/account-settings/personnal-informations';
import AccountSettingsInvite from './public/account-settings/invite';

import HomeEmployee from './employee/today';
import HouseEmployee from './employee/house';
import HousingEmployee from './employee/housing';

function App() {
  return (
    <>
      <SignModal />

      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* User Connected */}
        <Route element={<AuthenticatedRoute />}>
          <Route exact path="/homes/:id" element={<Homes />} />
          <Route exact path="/hosting" element={<Hosting />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/hosting/messages" element={<HostingMessages />} />
          <Route exact path="/hosting/folder" element={<HostingFolder />} />
          <Route exact path="/hosting/announces" element={<HostingAnnounces />} />
          <Route exact path="/account" element={<Account />} />
          <Route exact path="/account-settings" element={<AccountSettings />} />
          <Route exact path="/account-settings/personnal-informations" element={<AccountSettingsPersonnalInformations />} />
          <Route exact path="/account-settings/invite" element={<AccountSettingsInvite />} />

          {/* User Employee */}
          <Route element={<EmployeeRoute />}>
            <Route exact path="/employee/today" element={<HomeEmployee />} />
            <Route exact path="/employee/house" element={<HouseEmployee />} />
            <Route exact path="/employee/housing" element={<HousingEmployee />} />
          </Route>
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
