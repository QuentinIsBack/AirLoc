import { Routes, Route } from "react-router-dom";

import AuthenticatedRoute from './context/AuthenticatedRoute';

import SignModal from "./components/modal/sign";

import Home from './pages/home';
import Hosting from './pages/hosting';
import Account from './pages/account';

function App() {
  return (
    <>
      <SignModal />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route element={<AuthenticatedRoute />}>
          <Route exact path="/hosting" element={<Hosting />} />
          <Route exact path="/account" element={<Account />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
