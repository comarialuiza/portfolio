import React from 'react';

import Stack from './../Stack';
import { Container, StackContainer } from './styles';

export default function Project({ project }) {
    return(
        <Container>
            <img src={ `./images/${ project.image }` } alt ="Project" />
            <h3>{ project.name }</h3>
            <p>{ project.description }</p>

            <StackContainer>
                { project.stack.map(lang => (
                    <Stack data={ lang } />
                ))}
            </StackContainer>

            <div>
                { project.link && <a href={ project.link } target="_blank" rel="noopener noreferrer" className="link linkWebsite">Acessar</a> }
                <a href={ project.github } target="_blank" rel="noopener noreferrer" className="link linkGithub">Repositório</a>
            </div>
        </Container>
    );
}