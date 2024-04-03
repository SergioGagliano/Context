import "./App.css";
import { Clock } from "./Clock";
import { createContext, useState } from "react";


export const LanguageContext = createContext()

function App() {
 
  const [language, setLenguage] = useState('Ora corrente')

  return (
    <>
      <LanguageContext.Provider value={{language, setLenguage}} >
        <Clock />
      </LanguageContext.Provider>
    </>
  );
}

export default App;
