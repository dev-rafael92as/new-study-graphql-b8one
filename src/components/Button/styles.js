import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    border: none;
    border-radius: 5px;
    height: 100%;

    background-color: ${({ theme }) => theme.FONTS.BUTTON_COLOR};
    color: ${({ theme }) => theme.FONTS.TEXT_WHITE};
`