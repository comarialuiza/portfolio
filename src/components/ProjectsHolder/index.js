import React, { useState } from 'react';

import { Container } from './styles';
import Project from '../Project';

import { loadProjects } from '../../services/api';

const data = loadProjects();

export default function ProjectsHolder() {
    const [ projects, setProjects ] = useState(data);

    return(
        <Container>
            { projects.map(project => (
                <Project key={ project.id } project={ project } />
            )) }
        </Container>
    );
}