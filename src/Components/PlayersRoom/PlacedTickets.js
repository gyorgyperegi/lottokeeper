import styled from "styled-components";
import CreateTickets from "./CreateTickets";

const Container = styled.div`
  min-width:750px;
  min-height:500px;
  max-width: 1500px;
  max-height: 1000px;
  border-radius: 8px;
  border: 1px solid var(--champagne);
  display: flex;
  flex-direction: column;
`;
const HeaderText = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: var(--champagne);
  margin: 20px;
  justify-content: center;
`;

const PlacedTickets = ({placedTickets, showDifference, headerText}) => {
  return (
    <div className={"placedTickets"}>
      <Container>
        <HeaderText>{headerText}</HeaderText>
        <CreateTickets placedTickets={placedTickets} showDifference={showDifference} />
      </Container>
    </div>
  );
}

export default PlacedTickets;