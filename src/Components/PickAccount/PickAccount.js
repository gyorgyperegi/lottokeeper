import styled from "styled-components";
import Admin from "../../assets/svgs/admin";
import {useState} from "react";
import {Button} from "../GeneralComponents/Button";
import Player from "../../assets/svgs/player";
import {useNavigate} from "react-router-dom";

const ContainerWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 400px;
  border: 2px solid var(--champagne);
  justify-content: center;
  border-radius: 8px;
  align-items: center;
`;
const RoleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;
  margin: 15px;
  border-radius: 8px;
  border: 2px solid var(--champagne);
  cursor: pointer;
  width: 250px;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-left: 20px;
  color: white;
`;
const TitleWrapper = styled.div`
  font-size: 26px;
  font-weight: 700;
  color: white;
`;
const InputField = styled.input`
  font-size: 26px;
  font-weight: 700;
  color: black;
  margin: 30px 0 15px 0;
`;
const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 15px;
`;

const PickAccount = ({setName, storeUserType}) => {

  const [username, setUsername] = useState("");
  const [showUserNamePage, setShowUserNamePage] = useState(false);
  const navigate = useNavigate();

  const setNameGlobal = (name) => {
    setUsername(name)
    setName(name)
  }

  const navigateTo = (role) => {
    if( role === "player" ){
      roleHandler(role)
      navigate("/players_room")
    } else {
      roleHandler(role)
      navigate("/admins_room")
    }
  };
  const roleHandler = (role) => {
    storeUserType(role)
  };

  return (
    <ContainerWrapper className={"loginPage"}>
      <LoginWrapper className={"LoginWrapper"}>
        {!showUserNamePage && (
          <>
            <TitleWrapper>
              Pick a user type
            </TitleWrapper>
            <RoleWrapper onClick={() => navigateTo("admin")}>
              <Admin />
              <Title>Admin</Title>
            </RoleWrapper>
            <RoleWrapper onClick={() => setShowUserNamePage(true)}>
              <Player />
              <Title>Player</Title>
            </RoleWrapper>
          </>
        )}
        {showUserNamePage && (
          <>
            <TitleWrapper>Pick username</TitleWrapper>
            <InputField
              value={username}
              onChange={(e) => setNameGlobal(e.target.value)}
              placeholder={"Please enter your name"}
              data-testid={"usernameField"}
            />
            <ButtonWrapper>
              <Button width={"150px"} height={"50px"} color={"var(--dark)"} background={"var(--champagne)"} text={"Back"} clickHandler={() => setShowUserNamePage(false)}/>
              <Button width={"150px"} height={"50px"} color={"var(--dark)"} background={"var(--champagne)"} text={"Register"} clickHandler={() => navigateTo("player")}/>
            </ButtonWrapper>
          </>
        )}
      </LoginWrapper>
    </ContainerWrapper>
  );
}

export default PickAccount;