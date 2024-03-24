import { createContext, useState, useContext } from "react";

const UserContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => useContext(UserContext);

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [userPlan, setUserPlan] = useState(null);
  const calculateAge = (birthDateString) => {
    const birthDate = new Date(birthDateString);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };

  const age = calculateAge(
    userData?.birthDay.replace(/(\d{2})-(\d{2})-(\d{4})/, "$2/$1/$3")
  );
  console.log(`La edad de ${userData?.name} es: ${age}`);
  // eslint-disable-next-line no-unused-vars
  const value = {
    userData,
    setUserData,
    userPlan,
    setUserPlan,
    age,
  };

  return (
    <UserContext.Provider
      value={{ userData, setUserData, age, userPlan, setUserPlan }}
    >
      {children}
    </UserContext.Provider>
  );
};
