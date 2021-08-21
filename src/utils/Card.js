import styled from "styled-components";


const Card = styled.div`
    margin: ${({theme}) => theme.marginPadding.lg} 0;
    padding: ${({theme}) => theme.marginPadding.md};
    border-radius: ${({theme}) => theme.marginPadding.sm};
    background-color: ${({theme}) => theme.colors.dirtyLight};

    & > h1 {
        font-size: 1.2rem;
    }
`

export default Card