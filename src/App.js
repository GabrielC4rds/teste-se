import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ContentDiv from "./components/ContentDiv";
import { StoreProvider } from './Context';
export const AuthContext = React.createContext();

function App() {
  return (
    <StoreProvider>
        <div className="App">
          <ContentDiv></ContentDiv>
        </div>
    </StoreProvider>
  );
}

export default App;
