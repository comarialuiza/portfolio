import styled from 'styled-components';

export const Container = styled.footer`
    padding: 15px 0;
    font-size: 14px;
    text-align: center;
    color: #fff;

    p {
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            height: 12px;
            width: 12px;
            margin: 0 5px;
        }

        a {
            text-decoration: none;
            color: #fff;
            margin-left: 5px;
        }
    }
`;