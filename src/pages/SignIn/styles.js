import styled from "styled-components";

export const Container = styled.div`
    .container-authForm {
        width: 100%;
        max-width: 416px;
        margin: 64px auto 0;

        background: ${({ theme }) => theme.FONTS.TEXT_WHITE};
        border: 1px solid #E5E5E5;
        border-radius: 4px;

        padding: 40px 32px 52px 32px;
    }
`