import { Routes, Route } from "react-router-dom";

import AuthenticatedRoute from './context/AuthenticatedRoute';

import SignModal from "./components/modal/sign";

import Home from './pages/home';

function App() {
  return (
    <>
      <SignModal />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route element={<AuthenticatedRoute />}>
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
