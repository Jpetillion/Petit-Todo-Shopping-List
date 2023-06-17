import { useContext, createContext, useState } from "react";
import usersData from "../data/users.json";

const UserContext = createContext();
const UseUserContext = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [isLoading, setIsLoading] = useState(false); 
  const [loginError, setLoginError] = useState(false);

  const logIn = (username) => {
    setIsLoading(true);
    return new Promise((resolve, reject) => {
      try {
        const user = usersData.find(
          (user) => user.userName === username
        );

        if (user) {
          const loggedInUser = {
            userName: user.userName,
            avatarUrl: user.userAvatar,
          };
          setUser(loggedInUser);
          setLoginError(false);
          resolve(loggedInUser);
        } else {
          throw new Error("User not found");
        }
      } catch (error) {
        setLoginError(true);
        reject(error);
      } finally {
        setIsLoading(false);
      }
    });
  };

  const logOut = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, logIn, logOut, loginError, setLoginError }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UseUserContext, UserProvider };
