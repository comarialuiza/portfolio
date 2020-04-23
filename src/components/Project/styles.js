import styled from 'styled-components';

export const Container = styled.div`
    text-align: justify;
    
    @media (min-width: 481px) {
        padding: 20px;
    }

    @media (max-width: 480px) {
        margin-bottom: 30px;
    }

    h3 {
        text-transform: uppercase;
        font-size: 12px;
        margin: 20px 0;
    }

    p {
        font-size: 13px;
        line-height: 19px;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        .link {
            color: #fff;
            display: block;
            text-decoration: none;
            text-transform: uppercase;
            max-width: max-content;
            font-size: 11px;
            padding: 10px 15px;
            border-radius: 3px;

            &.linkWebsite {
                background-color: #F8646C;
                margin-right: 10px;
            }

            &.linkGithub {
                background-color: #424556;
            }
        }
    }
`;

export const StackContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 0;
`;