import React from 'react';
import { ThemeProvider } from 'styled-components';
import QuestionsPage from './Questions';
import 'normalize.css';
import GlobalStyle, { theme } from '../theme/theme';


const IndexPage = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <QuestionsPage />
    </ThemeProvider>
);

export default IndexPage;
