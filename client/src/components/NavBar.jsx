import styled from "styled-components";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Person2RoundedIcon from "@mui/icons-material/Person2Rounded";
import { IconButton } from "@mui/material";
const NavBarDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 40px;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  gap: 30px;
  background: ${({ theme }) => theme.bgLight};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5.7px);
  -webkit-backdrop-filter: blur(5.7px);
  @media (max-width:768px){
    padding:16px;
  }
`;
const ButtonDiv = styled.div`
  color: ${({ theme }) => theme.primary};
  display: flex;
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  max-width: 70px;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 12px;
  padding: 8px 10px;
  gap: 8px;
`;
const IcoButton=styled(IconButton)`
    color: ${({ theme }) => theme.text_secondary} !important;
`;
const NavBar = ({menuOpen,setMenuOpen}) => {
  return (
    <NavBarDiv>
      <IcoButton onClick={()=>setMenuOpen(!menuOpen)}>
        <MenuRoundedIcon />
      </IcoButton>
      <ButtonDiv>
        <Person2RoundedIcon />
        LogIn
      </ButtonDiv>
    </NavBarDiv>
  );
};
export default NavBar;
