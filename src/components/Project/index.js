import React from 'react';

import { Container } from './styles';

export default function Project({ project }) {
    return(
        <Container>
            <img src={ `./images/${ project.image }` } alt ="Project" />
            <h3>{ project.name }</h3>
            <p>{ project.description }</p>
            <a href={ project.link } target="_blank" rel="noopener noreferrer">Acessar</a>
            <a href={ project.github } target="_blank" rel="noopener noreferrer">Repositório</a>
        </Container>
    );
}