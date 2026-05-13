import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAuth = () => {
  const customAuthHook = useContext(AuthContext);
  if (!customAuthHook)
    throw new Error("App should be wrap with AuthContextProvider");
  return customAuthHook;
};
