import styled from "styled-components";
import {useEffect, useState} from "react";
import {Button} from "../GeneralComponents/Button";
import PlacedTickets from "./PlacedTickets";
import AccountInformation from "../GeneralComponents/AccountInformation";

const Container = styled.div`
  height: calc(100vh - 150px);;
  width: calc(100vh - 50px);;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`;
const PickNumbersWrapper = styled.div`
  width: 400px;
  padding: 0 20px 20px 0;
  border-color: var(--champagne);
  border-style: solid;
  border-width: 0 1px 1px 0;
`;
const ChoosenNumbersWrapper = styled.div`
  width: 120px;
  padding: 0 0 20px 20px;
  border-color: var(--champagne);
  border-style: solid;
  border-width: 0 0 1px 0;
`;
const InformationText = styled.p`
  color: var(--bright);
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
`;
const NumberWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 200px;
`;
const NumberItem = styled.div`
  border-radius: 50%;
  width: auto;
  height: auto;
  max-height: 29.5px;
  max-width: 24.45px;
  padding: 5px;
  background: ${props => props.available ? "var(--champagne)" : "grey"};
  color: var(--dark);
  flex: 1 0 6%;
  margin: 5px;
  cursor: ${props => props.available ? "pointer" : "none"};
  pointer-events: ${props => props.available ? "" : "none"};
`;
const GameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  border-color: var(--champagne);
  border-style: solid;
  border-width: 0 0 1px 0;
`;
const PickedNumbersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PickedNumbers = styled.div`
  border-radius: 50%;
  width: 27px;
  height: auto;
  padding: 5px;
  background: ${props => props.available ? "var(--champagne)" : "grey"};
  color: var(--dark);
  margin: 5px;
  cursor: ${props => props.available ? "pointer" : "none"};
  pointer-events: ${props => props.available ? "" : "none"};
`;
const PlayersRoom = ({name, storePlayerTickets}) => {

  const [ numbers, setNumbers ] = useState(Array.from({ length: 40 }, (value, index) => index));
  const [ pickedNumbers, setPickedNumbers ] = useState([]);
  const [ availableAmount, setAvailableAmount ] = useState(10000);
  const [ gambledTickets, setGambledTickets ] = useState([]);

  useEffect(() => {
    setNumbers(
      numbers.map(item => {
        return { number: item, available: true };
      })
    );
  }, []);

  const setNumbersToAvailable = () => {
    setNumbers(
      numbers.map(item => {
        return { number: item.number, available: true };
      })
    );
  };

  const modifyNumbersChooseFrom = (item) => {
    if(pickedNumbers.length < 5) {
      setPickedNumbers([...pickedNumbers,item]);
      changeNumbersList(item,false)
    }
  };
  const modifyNumbersPickedFrom = (item) => {
    setPickedNumbers(pickedNumbers.filter(pickedNumber => pickedNumber !== item));
    changeNumbersList(item,true)
  };

  const changeNumbersList = (item, available) => {
    setNumbers(prevList => {
      return prevList.map(listItem => {
        return listItem.number === item.number
          ? { number: listItem.number, available }
          : listItem;
      });
    });
  };

  const storeGambledTicket = () => {
    setAvailableAmount(availableAmount - 500);
    const ticketId = gambledTickets.length;
    const numbers = pickedNumbers.map(item => item.number)
    setNumbersToAvailable();
    setPickedNumbers([])
    setGambledTickets([...gambledTickets,{id: ticketId + 1, numbers: numbers}])
    storePlayerTickets([...gambledTickets,{id: ticketId + 1, numbers: numbers}])
  };

  return (
    <Container>
      <AccountInformation name={name} availableAmount={availableAmount} />
      <GameWrapper>
        <PickNumbersWrapper>
        <InformationText>Please pick 5 numbers</InformationText>
        <NumberWrapper>
          {numbers.map((item, index) => {
            if(item.number !== 0) {
              return (
                <NumberItem key={`${index}-pick`} onClick={() => modifyNumbersChooseFrom(item,index)} available={item.available}>
                  {item.number}
                </NumberItem>
              )
            }
          })}
        </NumberWrapper>
        </PickNumbersWrapper>
        <ChoosenNumbersWrapper>
          <InformationText>Your numbers</InformationText>
          <PickedNumbersWrapper>
            {pickedNumbers.length !== 0 &&
              pickedNumbers.map((item,index) => {
                return (
                  <PickedNumbers key={`${index}-choose`} onClick={() => modifyNumbersPickedFrom(item,index)} available={item.available}>
                    {item.number}
                  </PickedNumbers>
                )
              })
            }
          </PickedNumbersWrapper>
        </ChoosenNumbersWrapper>
        <ButtonWrapper>
          <Button text={"Buy Tickets"} margin={"15px"} isDisabled={pickedNumbers.length !== 5 || availableAmount === 0} clickHandler={() => storeGambledTicket()}/>
        </ButtonWrapper>
      </GameWrapper>
      {gambledTickets.length !== 0 && <PlacedTickets placedTickets={gambledTickets} headerText={"Paid tickets"} />}
    </Container>
  );
}

export default PlayersRoom;