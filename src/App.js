import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Navbar from "./Components/NavBar/Navbar";
import PickAccount from "./Components/PickAccount/PickAccount";
import PlayersRoom from "./Components/PlayersRoom/PlayersRoom";
import Tickets from "./Components/Tickets/Tickets";
import styled from "styled-components";
import {useState} from "react";
import AdminsRoom from "./Components/AdminsRoom/AdminsRoom";
import UserGuide from "./Components/UserGuide/UserGuide";

const ContainerWrapper = styled.div`
  height: 100%;
  width: 100%;
`;
const ContentWrapper = styled.div`
  height: 80vh;
  width: 100%;
`;

function App() {

  const [name, setName] = useState("");
  const [userType, setUserType] = useState("player");
  const [playersTickets, setPlayersTickets] = useState([]);
  const [generatedTickets, setGeneratedTickets] = useState([]);

  return (
    <ContainerWrapper className="App">
      <BrowserRouter>
        <Navbar role={userType}/>
        <ContentWrapper>
          <Routes>
            <Route path="/" exact element={<PickAccount storeUserType={(type)=>setUserType(type)} setName={(name) => setName(name)} />} />
            <Route path="/players_room" element={<PlayersRoom name={name} storePlayerTickets={(tickets) => setPlayersTickets(tickets)} />} />
            <Route path="/tickets" element={<Tickets playersTickets={playersTickets} name={name} role={userType} generatedTickets={generatedTickets}/>} />
            <Route path="/admins_room" element={<AdminsRoom playersTickets={playersTickets}/>} />
            <Route path="/user_guide" element={<UserGuide />} />
          </Routes>
        </ContentWrapper>
      </BrowserRouter>
    </ContainerWrapper>
  );
}

export default App;
