import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
import ThemeProvider from "./providers/ThemeProvider.tsx";
import TaskProvider from "./providers/TaskProvider.tsx";

import {Theme} from "./types";

import './styles/reset.scss';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ThemeProvider>
        <TaskProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </TaskProvider>
    </ThemeProvider>
);

const currentTheme: Theme = localStorage.getItem("theme") as Theme;
if (!currentTheme) localStorage.setItem("theme", "light");
