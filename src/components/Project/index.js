import React from 'react';

import { Container } from './styles';

export default function Project({ title, description, image, link }) {
    return(
        <Container>
            <img src={ `./images/natours.png` } alt ="Project" />
            <h3>{ title }</h3>
            <p>{ description }</p>
            <a href={ link } target="_blank" rel="noopener noreferrer">Acessar</a>
            <a href={ link } target="_blank" rel="noopener noreferrer">Repositório</a>
        </Container>
    );
}