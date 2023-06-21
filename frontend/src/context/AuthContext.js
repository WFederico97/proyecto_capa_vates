import { createContext } from "react";

const AuthContext = createContext(
    {
        userData: {},
        isAuth: false,
        login : () => {},
        register : () => {},
    }
);

export default AuthContext;

