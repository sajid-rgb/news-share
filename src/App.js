import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from 'react';
import './App.css';
import Main from './Components/Home/Main/Main'

export const IdContext = createContext()
function App() {
  const [findId, setFindId] = useState(0)
  console.log(findId)
  return (
    <IdContext.Provider value={[findId, setFindId]} >
      <div className="">

        <Main />

      </div>
    </IdContext.Provider>
  );
}

export default App;
