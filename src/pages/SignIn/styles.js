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

        h2 {
            font-weight: 500;
            font-size: 20px;
            line-height: 28px;
        }

        .container-inputs {
            display: flex;
            flex-direction: column;
            gap: 20px;

            margin: 32px 0 20px;
        }

        .container-keep-conect {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .wrapper-button {
            height: 48px;
            margin-top: 32px;
            margin-bottom: 40px;
        }

        .wrapper-signUp {
            text-align: center;

            border-top: 1px solid ${({ theme }) => theme.FONTS.LINE_BORDER};
            padding-top: 44px;
        }
    }
`