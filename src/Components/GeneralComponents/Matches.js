import styled from "styled-components";

const MatchesBox = styled.div`
  min-width: 150px;
  height: 50px;
  color: var(--dark);
  background: var(--champagne);
  border-radius: 8px;
  font-weight: 700;
  font-size: 20px;
  margin: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border-right: 2px solid;
`;
const NumberInfo = styled.div`
`;
const Text = styled.div`
`;
export const Matches = ({matchNumber,text}) => {

  return(
    <MatchesBox
    >
      {text ? (
        <Text>{text}</Text>
      ) : (
        <>
          <NumberInfo>{matchNumber}</NumberInfo>
          <Text>match</Text>
        </>
      )}
    </MatchesBox>
  )
};