import styled from "styled-components";

const AccountInformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  border-radius: 0 0 8px 8px;
  width: 200px;
  border-color: var(--champagne);
  border-style: solid;
  border-width: 0 1px 1px 1px;
`;
const AccountName = styled.div`
  color: var(--bright);
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
`;
const Amount = styled.div`
  color: var(--bright);
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const AccountInformation = ({name, availableAmount}) => {
  return (
    <AccountInformationWrapper className={"accountInformation"}>
      <AccountName>
        {`Welcome ${name}`}
      </AccountName>
      <Amount>
        {`${availableAmount} akcse`}
      </Amount>
    </AccountInformationWrapper>
  );
}

export default AccountInformation;