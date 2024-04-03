import { useContext } from "react";
import { LanguageContext } from "./App";

export function Clock() {
  const { language, setLenguage } = useContext(LanguageContext);
  function handleSetLenguage(e) {
    setLenguage(e.target.value === "en" ? "Current time" : "Ora corrente");
  }

  return (
    <>
      <h1>{language}</h1>
      <select onChange={handleSetLenguage}>
        <option value={"it"}>ITALIANO</option>
        <option value={"en"}>ENGLISH</option>
      </select>
    </>
  );
}
