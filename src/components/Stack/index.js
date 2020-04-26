import React from 'react';

import { Container } from './styles';

export default function Stack({ data }) {
    return(
        <Container>
            <a href={ data.link } target="_blank" rel="noopener noreferrer"><img src={ `./icons/${ data.icon }` } alt={ data.name } /></a>
        </Container>
    );
}