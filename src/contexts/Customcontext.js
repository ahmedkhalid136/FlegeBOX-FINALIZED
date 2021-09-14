import { createContext, useState } from "react";
export const CreateContext = createContext({});

function CreateContextProvider(props) {
  const [myvalue, setvalue] = useState(0);

  const [myArr, setMyArr] = useState([]);
  const box=[
    {
      name: "K94 MASK",
      pcs: 20,
      img: "./Images/pam-menegakis-12yQhBE8nUc-unsplash.jpg",
      size: "M",
      sets: 0,
    },
    {
      name: "Gloves",
      pcs: 20,
      img: "./Images/clay-banks-e6pK_snssSY-unsplash.jpg",
      size: "M",
      sets: 0,
    },
    {
      name: "hand sanitizer ",
      pcs: 20,
      img: "./Images/clay-banks-e6pK_snssSY-unsplash.jpg",
      size: "M",
      sets: 0,
    },
    {
      name: "Oxygen tube",
      pcs: 20,
      img: "./Images/mockup-graphics-2WlwSXFw7Kk-unsplash.jpg",
      size: "M",
      sets: 0,
    },
  ];

  return (
    <CreateContext.Provider
      value={{myvalue, setvalue, myArr, setMyArr,box}}
    >
      {props.children}
    </CreateContext.Provider>
  );
}
export default CreateContextProvider;   
