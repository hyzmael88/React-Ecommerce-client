import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


export default function Navbar() {
  const Container = styled.div`
    height: 60px;
  `;
  const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
  `;

  const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
  `;
  const SearchContainer = styled.div`
   border: 0.5px solid lightgray;
   display:flex;
   align-items: center;
   margin-left: 25px;
   padding: 5px;
  `;

  const Input = styled.input`
    border: none;
  `;

  const Center = styled.div`
    flex: 1;
    text-align: center;
  `;
  const Logo = styled.h1`
    font-width: bold;
  `;
  const Right = styled.div`
    flex: 1;
    display: flex;
    align-items:center;
    justify-content: flex-end;
  `;

  const MenuItem = styled.div`
    fonst-size: 14px;
    cursor: pointer;
    margin-left:25px;
  `;
  // flex:1; me permite tene que todos sean del mismo tamano,
  // si quisiera uno mas grande que el otro los dejaria en 1 y el unico en 2
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <SearchIcon style={{color: 'gray', fontsize:16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LAMA.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={101} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}
