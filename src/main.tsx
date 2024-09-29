import './main.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Climax } from './climax/Climax';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Climax />
    </StrictMode>,
);
