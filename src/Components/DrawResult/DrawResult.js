import styled from "styled-components";
import {useEffect, useState} from "react";
import {type} from "@testing-library/user-event/dist/type";
import {Matches} from "../GeneralComponents/Matches";
import CreateTickets from "../PlayersRoom/CreateTickets";
import {Button} from "../GeneralComponents/Button";
import {useNavigate} from "react-router-dom";

const Container = styled.div``;
const InformationText = styled.div`
  display: flex;
  justify-content: center;
  color: var(--champagne);
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
`;
const WinnerNumberWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
`;
const NumberItem = styled.div`
  border-radius: 50%;
  font-size: 21px;
  height: 29.5px;
  width: 32.45px;
  padding: 5px;
  background: var(--champagne);
  color: var(--dark);
  margin: 5px;
  cursor: none;
`;
const ResultsWrapper = styled.div`
  min-width:750px;
  min-height:500px;
  max-width: 1500px;
  max-height: 1000px;
  border-radius: 8px;
  border: 1px solid var(--champagne);
  display: flex;
  flex-direction: column;
`;
const MatchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  max-height: 125px;
  border: 1px solid grey;
  justify-content: space-between;
`;
const TicketsWrapper = styled.div`
  display: flex;
  width: ${props => props.width ?? "420px"};
  flex-direction: row;
  overflow: auto;
  border-left: 2px solid var(--champagne);
`;
const TotalAmountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
  color: var(--champagne);
  border-left: 2px solid;
`;
const TotalAmountText = styled.p`
  color:${props => props.color ?? ""};
  display: flex;
  font-size: 20px;
  font-weight: 700;
  align-items: center;
  margin-bottom: ${props => props.color ? "" : "10px"};;
`;
const PickedNumbersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 200px;
`;
const PickedNumbers = styled.div`
  padding: 5px;
  color: var(--champagne);
  margin: 5px;
`;

const DrawResult = ({winnerNumbers,allTickets,setAvailableAmount}) => {

  const [results, setResults] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    let winTickets = []
    let lostTickets = []
    allTickets.forEach(ticket => {
      const matchedNumbers = ticket.numbers.filter(element => winnerNumbers.includes(element));
      if(matchedNumbers.length > 1) {
        winTickets.push({match: matchedNumbers.length, winnerNumbers: matchedNumbers, id: ticket.id, numbers: ticket.numbers })
      } else {
        lostTickets.push({id: ticket.id, numbers: ticket.numbers })
      }
    });
    setResults({winTickets: winTickets, lostTickets: lostTickets, combinedList: [...winTickets,...lostTickets]})
  }, []);

  const handleWinTickets = (matchNumber) => {
    const tickets = results.winTickets
    return tickets.filter(item => item.match === matchNumber)
  };

  const priceToPay = () => {
    let moneyTobePaid = 0;
    if(results.winTickets.length !== 0) {
      results.winTickets.forEach(item => {
        return moneyTobePaid = moneyTobePaid + returnPrice(item.match[0])
      })
    }
    return moneyTobePaid;
  };

  const returnPrice = (price) => {
    switch(price) {
      case price === 5:
        return 10000;
      case price === 4:
        return 5000;
      case price === 3:
        return 2500;
      default:
        return 500;
    }
  }

  const setProfit = () => {
    const profit = results.lostTickets.length * 500 - priceToPay()
    setAvailableAmount(profit);
    return profit
  }

  return (
    <Container className={"DrawResult"}>
      <Button text={"New Game"} margin={"15px"} clickHandler={() => navigate("/")}/>
      <Button text={"New Draw"} margin={"15px"} clickHandler={null}/>
      <InformationText>Lucky Numbers</InformationText>
      <WinnerNumberWrapper>
        {winnerNumbers.map((item, index) => {
            return (
              <NumberItem key={`${index}-pick`}>
                {item}
              </NumberItem>
            )
        })}
      </WinnerNumberWrapper>
      {Object.keys(results).length !== 0 && (
        <ResultsWrapper>
          <MatchWrapper>
            <Matches matchNumber={5}/>
            <TicketsWrapper>
              <CreateTickets justifycontent={""} price={"10000"} placedTickets={handleWinTickets(5)}/>
            </TicketsWrapper>
            <TotalAmountWrapper>
              <TotalAmountText>Total Amount:</TotalAmountText>
              {handleWinTickets(5).length * 10000 }
            </TotalAmountWrapper>
          </MatchWrapper>
          <MatchWrapper>
            <Matches matchNumber={4}/>
            <TicketsWrapper>
              <CreateTickets justifycontent={""} price={"5000"} placedTickets={handleWinTickets(4)}/>
            </TicketsWrapper>
            <TotalAmountWrapper>
              <TotalAmountText>Total Amount:</TotalAmountText>
              {handleWinTickets(4).length * 5000 }
            </TotalAmountWrapper>
          </MatchWrapper>
          <MatchWrapper>
            <Matches matchNumber={3}/>
            <TicketsWrapper>
              <CreateTickets justifycontent={""} price={"2500"} placedTickets={handleWinTickets(3)}/>
            </TicketsWrapper>
            <TotalAmountWrapper>
              <TotalAmountText>Total Amount:</TotalAmountText>
              {handleWinTickets(3).length * 2500 }
            </TotalAmountWrapper>
          </MatchWrapper>
          <MatchWrapper>
            <Matches matchNumber={2}/>
            <TicketsWrapper>
              <CreateTickets justifycontent={""} price={"500"} placedTickets={handleWinTickets(2)}/>
            </TicketsWrapper>
            <TotalAmountWrapper>
              <TotalAmountText>Total Amount:</TotalAmountText>
              {handleWinTickets(2).length * 500 }
            </TotalAmountWrapper>
          </MatchWrapper>
          <MatchWrapper>
          <Matches text={"Lost Tickets:"}/>
            <TicketsWrapper>
              <CreateTickets justifycontent={""} placedTickets={results.lostTickets}/>
            </TicketsWrapper>
            <TotalAmountWrapper>
              <TotalAmountText>Total Amount:</TotalAmountText>
              {results.lostTickets.length * 500 }
            </TotalAmountWrapper>
          </MatchWrapper>
          <MatchWrapper>
            <Matches text={"All Played Numbers:"}/>
            <TicketsWrapper width={"615px"}>
              <PickedNumbersWrapper>
                {results.combinedList.length !== 0 &&
                  results.combinedList.map((item) => {
                    return item.numbers.map((numberElements,index) => {
                      return (
                        <PickedNumbers key={`${index}-combined`}>
                          {numberElements}
                        </PickedNumbers>
                      )
                    })
                  })
                }
              </PickedNumbersWrapper>
            </TicketsWrapper>
          </MatchWrapper>
          <MatchWrapper>
            <Matches text={"Cash out:"}/>
            <TotalAmountText color={"var(--champagne)"}>{`${priceToPay()} akcse`}</TotalAmountText>
            <Matches text={"Cash in:"}/>
            <TotalAmountText color={"var(--champagne)"}>{`${results.lostTickets.length * 500} akcse`}</TotalAmountText>
            <Matches text={"Made profit:"}/>
            <TotalAmountText color={"var(--champagne)"}>{`${setProfit()} akcse`}</TotalAmountText>
          </MatchWrapper>
        </ResultsWrapper>
      )}
    </Container>
  );
}

export default DrawResult;