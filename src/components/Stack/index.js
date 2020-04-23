import React from 'react';

import { Container } from './styles';

export default function Stack({ data }) {
    return(
        <Container>
            <span>{ data }</span>
        </Container>
    );
}