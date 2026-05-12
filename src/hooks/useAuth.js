import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAuth = () => {
  const customHook = useContext(AuthContext);
  if (!customHook) throw new Error("App should be wrap with provider");
  return customHook;
};
