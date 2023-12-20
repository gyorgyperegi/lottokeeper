import styled from "styled-components";

const BrandContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 330px;
  background: var(--champagne);
  padding: 10px;
  margin-left: 50px;
  border-bottom: 2px solid var(--dark);
  border-radius: 0 0 30px 30px;
  box-shadow: 0 0 14px 0 var(--champagne);
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const FirstLine = styled.p`
  letter-spacing: 9px;
  margin-top: 20px;
  margin-bottom: 23px;
  font-size: 30px;
`;

const Brand = () => {
  return (
    <div className={"brand"}>
      <BrandContainer>
        <TextWrapper>
          <FirstLine>Lottokeeper</FirstLine>
        </TextWrapper>
      </BrandContainer>
    </div>
  );
}

export default Brand;