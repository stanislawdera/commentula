import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
    background-color: ${({theme}) => theme.colors.primary};
    min-height: 70px;
    display: flex;
    align-items: center;
    padding: 0 ${({theme}) => theme.marginPadding.xl};
    margin-bottom: ${({theme}) => theme.marginPadding.lg};

    & > h1 {
        font-family: ${({theme}) => theme.font.headings};
    }
`

const PrimaryBtn = styled.button`
    margin-left: auto;
    background-color: ${({theme}) => theme.colors.accent};
    padding: ${({theme}) => theme.marginPadding.md};
    border: 0;
    border-radius: ${({theme}) => theme.marginPadding.sm};
    color: white;
`

export default function Navbar() {
    return (
        <Nav>
            <h1>commentula</h1>
            <PrimaryBtn className="navbar-button">New topic</PrimaryBtn>
        </Nav>
    )
}
