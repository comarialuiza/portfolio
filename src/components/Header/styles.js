import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 10px;

    ul {
        display: flex;
        align-items: center;
        justify-content: center;
        list-style: none;
        
        li {
            a {
                color: #fff;
                text-decoration: none;
                text-transform: uppercase;
                font-size: 12px;
                margin: 0 20px;
            }
        }
    }
`;