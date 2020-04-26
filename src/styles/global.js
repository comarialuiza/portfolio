import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font: 14px 'Roboto', sans-serif;
        background-color: #333645;
        -webkit-font-smoothing: antialiased;
    }

    img {
        max-width: 100%;
    }
`;