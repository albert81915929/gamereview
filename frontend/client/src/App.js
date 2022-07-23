import logo from "./nintendo-2.svg";
import "./App.css";
import React, { Component } from "react";

import GameCard from "./components/card";
import ButtonDemo from "./components/ButtonDemo";
import Appbar from "./components/Appbar";
import { Container } from "@mui/system";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./styles/nintendoStyles";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { apiResonse: "" };
//   }

//   testRoute() {
//     fetch("http://localhost:9000/testAPI")
//       .then((res) => res.text())
//       .then((res) => this.state({ apiResonse: res }))
//       .catch((err) => err);
//   }

//   componentDidMount() {
//     this.testRoute();
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>GameTracker</h1>
//         <img src={logo} className="App-logo" alt="logo" />
        
//       </div>
//     )
//   }
// }
export default function App(){
  return (
    <ThemeProvider theme = {theme}>
      <div className="App" >
        <Appbar/>
        <img src={logo} className="App-logo" alt="logo" />
        {/* <ButtonDemo/> */}
        <Container sx = {{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '10px',
          width: '20%'
        }}>
          <GameCard/>
        </Container>
        
      </div>
    </ThemeProvider>
  );
}


