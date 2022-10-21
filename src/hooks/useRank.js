// Settings Hook - src/hooks/useSettings
import { useContext } from "react";
import RankContext from "../context/RankContext";

const RenderDetails = () => {
  const context = useContext(RankContext);

  return context;
};

export default RenderDetails