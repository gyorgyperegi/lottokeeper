import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--champagne);
  font-size: 24px;
`;

const ListItem = styled.li`
  width: 700px;
  line-height: 1.5;
`;

const UserGuide = () => {

  return (
    <Container className={"userGuide"}>
      <ListItem>Click on Profile icon(navbar far right) to pick a user type to start with</ListItem>
      <ListItem>There are two roles: Player and Admin</ListItem>
      <ListItem>They have different menu items in the nav bar</ListItem>
      <ListItem>User can login as a player and can buy tickets but not able to start draw, once the player bought all the tickets then can login as an admin and kick off draw.</ListItem>
      <ListItem>If the user login as admin then able to generate tickets and kick off draw with or without the player tickets</ListItem>
      <ListItem>After player bought tickets can swap to an admin to start draw with the profile icon</ListItem>
      <ListItem>Players room is for the player to buy tickets</ListItem>
      <ListItem>Admins room is for admin to start draw</ListItem>
      <ListItem>Tickets would be the component that shows relevant ticket for admin and player role (not completed)</ListItem>
    </Container>
  );
}

export default UserGuide;