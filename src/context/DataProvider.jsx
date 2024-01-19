import { createContext, useState } from "react";

export const DataContext = createContext(); // Create a context object and give provider

export default function DataProvider(props) {
  const [owner] = useState({
    site: "Kinésiologie Animalière 25",
    url: "https://www.kinesiologie-animaliere-25.fr",
    name: "Alix Lucidarme",
    adress: "32 Bis rue de l'Etang, 25560 Frasne",
    phone: "+33 668352377",
    email: "kinesiologieanimaliere25@gmail.com",
    siretNumber: "87866319400024",
  });

  const [host] = useState({
    name: "Wix Online Platform Limited",
    adress: "1 Grant’s Row, Dublin 2 D02HX96, Ireland",
    phone: "(+1) 415 358 0857",
  })

  return (
    <DataContext.Provider value={{ owner, host }}>
      {props.children}
    </DataContext.Provider>
  );
}
