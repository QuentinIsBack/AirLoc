import { Routes, Route } from "react-router-dom";

import AuthenticatedRoute from './context/AuthenticatedRoute';

import SignModal from "./components/modal/sign";

import Home from './pages/home';
import Board from './pages/board';

function App() {
  return (
    <>
      <SignModal />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/board" element={<Board />} />
        <Route element={<AuthenticatedRoute />}>
          
        </Route>
      </Routes>
    </>
  );
}

export default App;
