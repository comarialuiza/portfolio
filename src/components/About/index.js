import React from 'react';
import { FiLinkedin, FiGithub } from 'react-icons/fi';

import { Container } from './styles';

export default function About() {
    return(
        <Container>
            <div className="visual">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJDYXBhXzEiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMS4wMzQgNTExLjAzNCIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTEuMDM0IDUxMS4wMzQiIHdpZHRoPSI1MTIiPjxnPjxnPjxwYXRoIGQ9Im0yNTUuNTE3IDAtMjIxLjI4NCAxMjcuNzU4djI1NS41MTdsMjIxLjI4NCAxMjcuNzU5IDIyMS4yODQtMTI3Ljc1OXYtMjU1LjUxN3ptMTUgMTUxLjQxOGgxMzUuMzAzbC0xMzUuMzA0IDc4LjExOHYtNzguMTE4em0tMzAgNzguMTE4LTEzNS4zMDQtNzguMTE4aDEzNS4zMDR6bS0xNC40OTkgMjYuMjctNjguMDU5IDM5LjA4LTY3Ljg3Ni0xMTcuNTYzem0xNC40OTkgMjYuMjY3djE1NS44MDJsLTY3LjU1Ny0xMTcuMDF6bTMwLS41NzYgNjcuNjUyIDM5LjA1OS02Ny42NTIgMTE3LjE3N3ptMTUtMjUuOTggMTM1LjMwNC03OC4xMTgtNjcuNjUyIDExNy4xNzd6bS0xNS0xMzQuMDk5di03OC4xMTdsMTM1LjMwNCA3OC4xMThoLTEzNS4zMDR6bS0zMCAwaC0xMzUuMzA0bDEzNS4zMDQtNzguMTE4em0tMTc2LjI4NCA3MS4xMzIgNjcuNzExIDExNy4yNzUtNjcuNzExIDM4Ljg4em04Mi43MSAxNDMuMjU1IDY3LjQ2OSAxMTYuODU3LTEzNS4xMTgtNzguMDEyem0yMTcuMjA2LS4yNDkgNjcuNjUyIDM5LjA1OS0xMzUuMzA0IDc4LjExOHptMTUtMjUuOTgxIDY3LjY1Mi0xMTcuMTc3djE1Ni4yMzV6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBzdHlsZT0iZmlsbDojRkZGRkZGIj48L3BhdGg+PC9nPjwvZz4gPC9zdmc+" alt="Logo" />
            </div>
            <div className="descriptive">
                <h1>Maria Luiza Coelho</h1>
                <h3>Front End Developer</h3>

                <p>I develop beautiful web applications focusing on user experience using the best technologies available today. I have great organization skills and strive to be a full time learner, always studying to improve my knowledge.</p>

                <div className="links">
                    <a href="https://www.linkedin.com/in/marialuizacoelho/" target="_blank" rel="noopener noreferrer"><FiLinkedin />Linkedin</a>
                    <a href="https://github.com/comarialuiza" target="_blank" rel="noopener noreferrer"><FiGithub /> Github</a>
                </div>
            </div>
        </Container>
    );
}