import React from 'react';

import { Container } from './styles';

export default function Header() {
    return(
        <Container>
            <ul>
                <li><a href="https://github.com/comarialuiza" target="_blank" rel="noopener noreferrer">Github</a></li>
                <li><a href="https://www.linkedin.com/in/marialuizacoelho/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
            </ul>
        </Container>
    );
}