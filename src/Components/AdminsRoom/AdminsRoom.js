import styled from "styled-components";
import {ControlButton} from "../GeneralComponents/ControlButton";
import {useState} from "react";
import {Button} from "../GeneralComponents/Button";
import PlacedTickets from "../PlayersRoom/PlacedTickets";
import AccountInformation from "../GeneralComponents/AccountInformation";
import DrawResult from "../DrawResult/DrawResult";

const Container = styled.div`
  height: calc(100vh - 150px);
  width: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;
const GenerateNumberWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Number = styled.div`
  color: var(--champagne);
  font-weight: 700;
  font-size: 20px;
  border: 1px solid var(--champagne);
  padding: 10px 15px;
  border-radius: 8px;
`;
const InformationText = styled.div`
  color: var(--champagne);
  font-size: 28px;
  font-weight: 700;
  margin-right: 20px;
`;

const AdminsRoom = ({playersTickets}) => {

  const [generateNumber, setGenerateNumber] = useState(0);
  const [generatedTicketsList, setGeneratedTicketsList] = useState([]);
  const [availableAmount, setAvailableAmount] = useState(0);
  const [winnerNumbers, setWinnerNumbers] = useState([]);
  const ticketsAvailable = playersTickets.length !== 0 || generatedTicketsList.length !== 0;

  const generateTickets = () => {
    let generatedObjectList = [];
    for(let i= 0; generateNumber > i ;i++) {
      generatedObjectList.push({id: i + 1, numbers: generateRandomTicketNumbers()});
    };
    setGeneratedTicketsList([...generatedTicketsList, ...generatedObjectList]);
    updateGeneratedTicketIds();
    setAvailableAmount(generateNumber * 500 + availableAmount);
  };

  const updateGeneratedTicketIds = () => {
    setGeneratedTicketsList(prevList => {
      return prevList.map((listItem,index) => {
        return {id: `G${index + 1}`, numbers: listItem.numbers}
      });
    });
  };

  function generateRandomTicketNumbers() {
    let randomNumbersList = [];
    for(let i= 0; 5 > i ;i++) {
      let randomNumber = Math.floor(Math.random() * (39 - 1 + 1)) + 1;
      if(randomNumbersList.includes(randomNumber)) {
        randomNumber = Math.floor(Math.random() * (39 - 1 + 1)) + 1;
        randomNumbersList.push(randomNumber)
      } else {
        randomNumbersList.push(randomNumber)
      }
    }
    return randomNumbersList;
  };

  const generateWinnerNumbers = () => {
    setWinnerNumbers(generateRandomTicketNumbers())
  };

  return (
    <Container className={"adminsRoom"}>
      <AccountInformation name={"Admin"} availableAmount={availableAmount} />
      {winnerNumbers.length !== 0 &&
        <DrawResult winnerNumbers={winnerNumbers} setAvailableAmount={e => setAvailableAmount(e)} allTickets={[...playersTickets,...generatedTicketsList]}/>
      }
      {winnerNumbers.length === 0 && (
        <>
          <Button text={"Draw"} margin={"15px"} isDisabled={!ticketsAvailable} clickHandler={() => generateWinnerNumbers()}/>
          <GenerateNumberWrapper>
            <InformationText>Generate tickets:</InformationText>
            <ControlButton text={"-"} margin={"20px"} isDisabled={generateNumber === 0} clickHandler={() => setGenerateNumber(generateNumber - 1)} />
            <Number>{generateNumber}</Number>
            <ControlButton text={"+"} margin={"20px"} isDisabled={false} clickHandler={() => setGenerateNumber(generateNumber + 1)} />
            <Button text={"Generate"} margin={"15px"} isDisabled={generateNumber === 0} clickHandler={() => generateTickets()}/>
          </GenerateNumberWrapper>
          {generatedTicketsList.length !== 0 && <PlacedTickets placedTickets={[...playersTickets,...generatedTicketsList]} headerText={"Generated & Player's tickets"} showDifference />}
        </>
      )}
    </Container>
  );
}

export default AdminsRoom;