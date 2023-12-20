import styled from "styled-components";
import {AdminMenu} from "./AdminMenu";
import {PlayerMenu} from "./PlayerMenu";
import {createRef, useEffect, useRef, useState} from "react";
import Brand from "./Brand";
import User from "../../assets/svgs/user";
import {useNavigate} from 'react-router-dom';

const ComponentWrapper = styled.div`
  margin-bottom: 40px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100px;
  background: var(--dark);
  border-bottom: 2px solid var(--champagne);
  box-shadow: 0 0 14px 0 var(--champagne);
`;
const MenuContainer = styled.ul`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: end;
`;
const MenuItemWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  width: 135px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
`;
const MenuItem = styled.li`
  display: flex;
  list-style: none;
  margin-right: 10px;
  color: var(--champagne);
`;

const Navbar = ({role}) => {

  const [menuList, setMenuList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if(role === "player" && window.location.pathname.includes("admin")) {
      navigate("/");
    }
  }, [window.location.pathname]);

  useEffect(()=> {
    const menu = role === "admin" ? AdminMenu : PlayerMenu
    setMenuList(menu)
  },[role])


  return (
    <ComponentWrapper className={"navbar"}>
      <Container>
        <Brand/>
        <MenuContainer>
          {menuList.map(item => {
            return(
              <>
                <MenuItemWrapper onClick={() => navigate(item.path)} key={`${item.id}-wrapper`} data-testid={item.label}>
                  {item.label === "PickAccount" ?
                    <User fill={"var(--champagne)"} key={`${item.id}-user`}/>
                    : <MenuItem key={`${item.id}-menuItem`}>{item.label}</MenuItem>
                  }
                </MenuItemWrapper>
              </>
            )
          })}
        </MenuContainer>
      </Container>
    </ComponentWrapper>
  );
}

export default Navbar;