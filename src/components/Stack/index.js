import React from 'react';

import { Container } from './styles';

export default function Stack({ data }) {
    return(
        <Container>
            <img src={ `./icons/${ data.icon }` } alt={ data.name } />
        </Container>
    );
}