import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    width: 100%;

    color: ${({ theme }) => theme.FONTS.LINK_COLOR};
`