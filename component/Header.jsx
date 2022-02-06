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

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Header = () => {

  const getLowerCase = (string) => {
    if(typeof string === 'string') {
      return string.toLowerCase();
    }
  }

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Stack direction={'row'} justifyContent="center" alignItems={'center'}>
          <Typography variant='h6' marginRight={'auto'}>
            <Link href="#">
              Logo
            </Link>
          </Typography>
          {pages.map((page) => (
            <MenuItem key={page} sx="padding: 16px">
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
