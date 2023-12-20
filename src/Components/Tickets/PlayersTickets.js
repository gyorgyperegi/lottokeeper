import styled from "styled-components";
import PlacedTickets from "../PlayersRoom/PlacedTickets";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SquareWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Square = styled.div`
  height: 35px;
  width: 35px;
  border: 1px solid black;
  border-radius: 8px;
  background: ${props => props.color ?? ""};
`;
const InformationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 20px 40px;
`;
const InformationText = styled.div`
  color: var(--champagne);
  font-size: 28px;
  font-weight: 700;
`;

const PlayersTickets = ({playersTickets,name}) => {

  return (
    <Container className={"tickets"}>
      <InformationWrapper>
        <InformationText>Check your tickets ${name}</InformationText>
      </InformationWrapper>
      {playersTickets.length !== 0 && <PlacedTickets placedTickets={playersTickets} headerText={"Placed tickets"} />}
    </Container>
  );
}

export default PlayersTickets;