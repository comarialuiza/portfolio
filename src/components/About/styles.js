import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
    min-height: calc(100vh - 56px);

    .visual, .descriptive {
        padding: 20px;
    }

    @media (min-width: 1141px) {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 1140px;
        margin: 0 auto;

        .visual, .descriptive {
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

    @media (max-width: 1140px) {
        .visual {
            margin-bottom: 30px;
        }
    }

    .descriptive {
        text-align: center;

        h1 {
            font-size: 24px;
        }

        h3 {
            text-transform: uppercase;
            font-size: 12px;
            letter-spacing: 1px;
            margin-top: 20px;
        }

        p {
            margin-top: 20px;
            font-size: 15px;
            line-height: 22px;
        }
    }
`;