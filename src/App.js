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

import NewHome from './public/begin/new-home';
import BeginIntro from './public/begin/intro';
import BeginGroupType from './public/begin/property-type-group';
import BeginPropertyType from './public/begin/property-type';
import BeginPrivacyType from './public/begin/privacy-type';
import BeginFloorPlan from './public/begin/floor-plan';

import HomeEmployee from './employee/home';
import SettingsEmployee from './employee/settings';

import AdminUserEmployee from './employee/admin/users';
import AdminRankEmployee from './employee/admin/ranks';

function App() {

  console.log(`
             _____ _____  _      ____   _____ 
       /\\   |_   _|  __ \\| |    / __ \\ / ____|
      /  \\    | | | |__) | |   | |  | | |     
     / /\\ \\   | | |  _  /| |   | |  | | |     
    / ____ \\ _| |_| | \\ \\| |___| |__| | |____ 
   /_/    \\_\\_____|_|  \\_\\______\\____/ \\_____|
             
  A APPLICATION CREATE BY QUENTIN TRUFFY - 2022

  `);

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

          <Route exact path="/new-home" element={<NewHome />} />
          <Route exact path="/begin/intro" element={<BeginIntro />} />
          <Route exact path="/begin/property-type-group" element={<BeginGroupType />} />
          <Route exact path="/begin/property-type" element={<BeginPropertyType />} />
          <Route exact path="/begin/privacy-type" element={<BeginPrivacyType />} />
          <Route exact path="/begin/floor-plan"  element={<BeginFloorPlan />} />

          {/* User Employee */}
          <Route element={<EmployeeRoute />}>
            <Route exact path="/employee" element={<HomeEmployee />} />
            <Route exact path="/employee/settings" element={<SettingsEmployee />} />
            
            <Route exact path="/employee/admin/users" element={<AdminUserEmployee />} />
            <Route exact path="/employee/admin/ranks" element={<AdminRankEmployee />} />
          </Route>
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
