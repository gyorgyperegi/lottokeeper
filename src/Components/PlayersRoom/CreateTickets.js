import styled from "styled-components";

const TicketWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-around;
  align-items: center;
  height: 100px;
  width: 200px;
  border-radius: 8px;
  margin: 15px;
  background: var(--champagne);
  border: ${props => props.bordercolor ? `3px solid ${props.bordercolor}` : ""};
`;
const IdWrapper = styled.div`
  font-size: 26px;
  font-weight: 700;
`;
const NumbersWrapper = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${props => props.justifycontent ?? "center"};
  overflow: auto;
`;
const Price = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-weight: 700;
`;
const WinnerNumbersWrapper = styled.div`
  display: flex;
  flex-direction: row;
  
  position: absolute;
  bottom: 0;
  right: 0;
`;
const WinnerNumbersText = styled.div`
  font-size: 14px;
`;
const WinnerNumbers = styled.div`
  font-weight: 700;
  color: red;
`;

const pickBorderColor = (showDifference,id) => {
  if(showDifference) {
    const generatedTicket = id.toString().includes("G")
    return generatedTicket ? "gold" : "white";
  } else {
    return false
  }
}

const CreateTickets = ({placedTickets, showDifference, justifycontent, price}) => {
  return (
    <ListWrapper className={"listWrapper"} justifycontent={justifycontent}>
      {placedTickets.map(ticket => {
        return (
          <TicketWrapper key={`${ticket.id}-wrapper`} bordercolor={pickBorderColor(showDifference,ticket.id)}>
            <IdWrapper key={`${ticket.id}-idwrapper`}>{`${ticket.id}.`}</IdWrapper>
            <NumbersWrapper key={`${ticket.id}-number`}>{`${ticket.numbers},`}</NumbersWrapper>
            {price && (
              <Price>{`price: ${price} akcse`}</Price>
            )}
            {price && (
              <WinnerNumbersWrapper>
                <WinnerNumbersText>lucky numbers:</WinnerNumbersText>
                {ticket.winnerNumbers.map(winnerNumber => {
                return (
                  <WinnerNumbers key={`${ticket.id+ticket.winnerNumbers}-winnerNumber`}>{winnerNumber},</WinnerNumbers>
                )})}
              </WinnerNumbersWrapper>
            )}
          </TicketWrapper>
        )
      })}
    </ListWrapper>
  );
}

export default CreateTickets;