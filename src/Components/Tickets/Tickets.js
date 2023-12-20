import styled from "styled-components";
import PlayersTickets from "./PlayersTickets";
import AllTickets from "./AllTickets";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Tickets = ({role, name, playersTickets, generatedTickets}) => {

  return (
    <Container className={"tickets"}>
      {role !== "admin" ? <PlayersTickets playersTickets={playersTickets} name={name}/> : <AllTickets role={role} playersTickets={playersTickets} generatedTickets={generatedTickets}/>}
    </Container>
  );
}

export default Tickets;