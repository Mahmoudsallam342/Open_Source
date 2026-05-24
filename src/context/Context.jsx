import { createContext, useState } from "react";

export let countercontext = createContext(0);

export function CounterProvider(props) {
  let [token, setToken] = useState(
    () => localStorage.getItem("token") || "null",
  );
  function userToken(userToken) {
    localStorage.setItem("token", userToken);
    setToken(userToken);
  }

  function logout() {
    localStorage.removeItem("token");
    setToken(null);
  }
  return (
    <>
      <countercontext.Provider
        value={{
          token,
          setToken,

          userToken,
          logout,
        }}
      >
        {props.children}
      </countercontext.Provider>
    </>
  );
}
