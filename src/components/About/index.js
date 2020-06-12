import React from 'react';
import { FiLinkedin, FiGithub } from 'react-icons/fi';

import { Container } from './styles';

export default function About() {
    return(
        <Container>
            <div className="visual">
                <img src="./images/apps.svg" alt="Logo" />
            </div>
            <div className="descriptive">
                <h1>Maria Luiza Coelho</h1>
                <h3>Front End Developer</h3>

                <p>Eu desenvolvo aplicações web que focam na experiência do usuário utilizando as melhores tecnologias presentes no mercado. Sou muito organizada e procuro um aprendizado constante, sempre estudando para aumentar meu conhecimento.</p>

                <div className="links">
                    <a href="https://www.linkedin.com/in/marialuizacoelho/" target="_blank" rel="noopener noreferrer"><FiLinkedin />Linkedin</a>
                    <a href="https://github.com/comarialuiza" target="_blank" rel="noopener noreferrer"><FiGithub /> Github</a>
                </div>
            </div>
        </Container>
    );
}