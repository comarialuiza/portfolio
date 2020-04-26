import styled from 'styled-components';

export const Container = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    .visual, .descriptive {
        padding: 20px;
    }

    @media (max-width: 1140px) {
        flex-direction: column;
        min-height: 100vh;
        padding: 20px;
    }

    @media (min-width: 1141px) {
        max-width: 1140px;
        margin: 0 auto;
        padding: 100px 20px;

        .visual, .descriptive {
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

    .visual {
        @media (max-width: 1140px) {
            margin-bottom: 30px;

            img {
                margin: 0 auto;
                display: block;
            }
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

        .links {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            margin: 20px auto 0;

            a {
                color: #fff;
                text-decoration: none;
                font-size: 12px;
                text-transform: uppercase;
                background-color: #F8646C;
                padding: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 3px;
                margin-right: 20px;

                @media (max-width: 600px) {
                    margin-top: 10px;
                }

                svg {
                    height: 12px;
                    width: 12px;
                    margin-right: 5px;
                }
            }
        }
    }
`;