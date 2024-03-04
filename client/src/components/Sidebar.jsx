import styled from "styled-components";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import PublishRoundedIcon from '@mui/icons-material/PublishRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import logo from "../images/logo.jpeg";
import { Link } from "react-router-dom";
const MenuContainer = styled.div`
  flex:0.3;
  flex-direction: column;
  width:100%;
  height: 100vh;
  display: flex;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  @media (max-width:1100px){
      position:fixed;
      z-index:1000;
      width:100%;
      max-width:250px;
      left: ${({menuOpen})=> (menuOpen ? "0" : "-100%" )};
      transtion:0.3s ease-in-out;
  }
`;
const Logo = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.primary};
  display: flex;
  align-items: center;
  justify-content: spce-between;
  gap: 6px;
  font-weight: bold;
  font-size: 20px;
  margin: 16px 0px;
`;
const Close = styled.div`
    display:none;
    @media (max-width:1100px){
      &:hover{
        cursor:pointer;
      }
      display:block;
    }
`;
const Image = styled.img`
  height: 40px;
  border-radius: 50%;
`;
const Elements = styled.div`
  box-sizing: border-box;
  padding: 4px 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  color: ${({ theme }) => theme.text_secondary};
  &:hover {
    background-color: ${({ theme }) => theme.bgLight};
  }
`;
const NavText = styled.div`
  padding: 12px 0px;
`;
const HL=styled.div`
  width:100%;
  height:1px;
  background-color:${({theme})=>theme.text_secondary};
  margin:10px 0px;
`;
const Flex = styled.div`
  cursor:default;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding:0px 12px;
`;

const Sidebar = ({menuOpen , setMenuOpen , setDarkMode , darkMode}) => {
    const menuItems = [
        {
          link: "/",
          name: "Dashboard",
          icon: <HomeRoundedIcon />
        },
        {
          link: "/search",
          name: "Search",
          icon: <SearchRoundedIcon />
        },
        {
          link: "/favourites",
          name: "Favourites",
          icon: <FavoriteBorderRoundedIcon />
        }
      ];
      const buttons=[
          {
              fun:()=>console.log("Upload"),
              name:"Upload",
              icon:<PublishRoundedIcon/>
          },
          {
              fun:()=>setDarkMode(!darkMode),
              name:darkMode?"Light Mode":"Dark Mode",
              icon:darkMode?<LightModeRoundedIcon/>:<DarkModeRoundedIcon/>
          },
          {
              fun:()=>console.log("Log Out"),
              name:"Log Out",
              icon:<LogoutRoundedIcon/>
          }
      ];

  return (
    <MenuContainer menuOpen={menuOpen}>
      <Flex>
        <Logo>
          <Image src={logo}></Image>
          StreamIT
        </Logo>
        <Close onClick={() => {setMenuOpen(false)}}>
          <CloseRoundedIcon />
        </Close>
      </Flex>
      {menuItems.map((item) => (
        <Link to={item.link} key={item.name} style={{"text-decoration":"none"}}>
          <Elements>
            {item.icon}
            <NavText>{item.name}</NavText>
          </Elements>
        </Link>
      ))}
        <HL/>
        {buttons.map((item) => (
        <Link to={item.link} key={item.name} style={{"text-decoration":"none"}}>
          <Elements onClick={()=> item.fun()}>
            {item.icon}
            <NavText>{item.name}</NavText>
          </Elements>
        </Link>
      ))}
    </MenuContainer>
  );
};

export default Sidebar;
