import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    label {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.005em;

        color: ${({ theme }) => theme.FONTS.TEXT_COLOR};
    }

    .wrapper-input {
        margin-top: 8px;
        width: 100%;
        border: 1px solid ${({ theme }) => theme.FONTS.BORDER_INPUT};
        
        display: flex;
        align-items: center;
        border-radius: 5px;

        input {
            width: 100%;
            padding: 12px 16px;
            border-radius: 5px;

            border: none;

            color: ${({ theme }) => theme.FONTS.TEXT_COLOR};
        }

        svg {
            margin-right: 16px;
            display: block;
            width: 20px;
            height: 20px;
        }
    }
`