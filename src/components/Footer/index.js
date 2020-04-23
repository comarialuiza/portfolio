import React from 'react';
import { FiHeart } from 'react-icons/fi';

import { Container } from './styles';

export default function Footer() {
    return(
        <Container>
            <p>Made with <FiHeart /> by <a href="https://github.com/comarialuiza" target="_blank" rel="noopener noreferrer">Malu</a></p>
        </Container>
    );
}