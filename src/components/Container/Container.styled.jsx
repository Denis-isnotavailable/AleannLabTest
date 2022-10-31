import styled from "styled-components";

export const ContainerStyled = styled.div`
    max-width: 414px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 9px;
    padding-left: 9px;
    padding-right: 9px;
    padding-bottom: 17px;
    background-color: #E6E9F2;

    @media screen and (min-width: 414.5px) {
        max-width: 1400px;
        padding-top: 29px;
        padding-left: 260px;
        padding-right: 260px;
        padding-bottom: 64px;
    }
`;