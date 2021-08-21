import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from '../utils/theme';
import Navbar from './Navbar';

const GlobalStyle = createGlobalStyle`


  body {
    font-size: 20px;
    font-family: ${({ theme }) => theme.font.default};
    background-color: ${({ theme }) => theme.colors.light};
}
  
  * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
  }
`;

export default function Layout({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                <Navbar/>
                {children}
            </>
        </ThemeProvider>

    )
}