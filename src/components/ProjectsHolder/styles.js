import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
    max-width: 1140px;
    margin: 0 auto;

    @media (min-width: 601px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 40px;
    }
`;