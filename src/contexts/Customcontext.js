import { createContext, useState } from "react";
export const CreateContext = createContext({});

function CreateContextProvider(props) {
  const [myvalue, setvalue] = useState(0);

  const [myArr, setMyArr] = useState([]);

  return (
    <CreateContext.Provider value={{ myvalue, setvalue, myArr, setMyArr }}>
      {props.children}
    </CreateContext.Provider>
  );
}
export default CreateContextProvider;
