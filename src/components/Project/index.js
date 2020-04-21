import React from 'react';

import { Container } from './styles';

export default function Project({ title, description, image }) {
    return(
        <Container>
            <h3>{ title }</h3>
            <p>{ description }</p>
            <img src={ image } alt ="Project" />
        </Container>
    );
}