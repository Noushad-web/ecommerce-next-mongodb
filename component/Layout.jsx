import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Header from './Header';

const Layout = ({ children }) => {
  return <>
    <Header/>
    <main>
          {children}      
    </main>
    <footer>

    </footer>
  </>;
};

export default Layout;
