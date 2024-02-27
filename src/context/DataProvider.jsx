/**
 * The external imports
 */
import { createContext, useState } from "react";

export const DataContext = createContext();

export default function DataProvider(props) {
  const [owner] = useState({
    site: "Go Reconnect",
    url: "https://www.goreconnect.ch",
    name: "Alix Lucidarme",
    address: "32 Bis rue de l'Etang, 25560 Frasne",
    phone: "+33 6.68.35.23.77",
    email: "contact@goreconnect.ch",
    siretNumber: "87866319400024",
  });

  const [host] = useState({
    name: "Wix Online Platform Limited",
    adress: "1 Grant’s Row, Dublin 2 D02HX96, Ireland",
    phone: "(+1) 415 358 0857",
  });

  return (
    <DataContext.Provider value={{ owner, host }}>
      {props.children}
    </DataContext.Provider>
  );
}
