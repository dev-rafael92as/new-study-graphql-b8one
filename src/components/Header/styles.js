import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.FONTS.DARK_BLUE};
    height: 64px;

    display: flex;
    align-items: center;
    justify-content: center;

    .logo-signIn {
        font-weight: 700;
        font-size: 24px;
        line-height: 32px;
        color: ${({ theme }) => theme.FONTS.TEXT_WHITE};

        span {
            color: ${({ theme }) => theme.FONTS.TEXT_LOGO};
        }
    }
`