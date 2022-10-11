// Settings Hook - src/hooks/useSettings
import { useContext } from "react";
import RankContext from "../context/RankContext";

export default () => {
  const context = useContext(RankContext);

  return context;
};