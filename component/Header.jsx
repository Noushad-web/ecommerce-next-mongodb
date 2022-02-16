import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar'; 
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import { Divider, Stack } from '@mui/material';

const pages = ['Jeans', 'Guys', 'What We\'re about', 'login', 'cart' ];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {

  const getLowerCase = (string) => {
    if(typeof string === 'string') {
      return string.toLowerCase();
    }
  }

  return (
    <AppBar position="fixed" sx={{backgroundColor: 'white'}}>
      <Container maxWidth="xl">
        <Stack direction={'row'} justifyContent="center" alignItems={'center'}>
          <Typography variant='h6' color={'#1c2121'} textTransform="uppercase" fontWeight='800' letterSpacing='1px' marginRight={'auto'}>
            <Link href="#">
              Hollister
            </Link>
          </Typography>
          
          {pages.map((page) => (
            <MenuItem key={page} sx="padding: 16px; color: #1c2121;text-transform: uppercase; font-weight: 800;">
              <Link href={`/${getLowerCase(page)}`}>
                {page}
              </Link>
            </MenuItem>
          ))}
        </Stack>        
      </Container>
    </AppBar>
  );
};
export default Header;
