import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import { Theme } from './constants';
import { Header } from './components';
import Home from './routes/home/home';
import Countries from './routes/countries/countries';
import ErrorPage from './routes/error-page/error-page';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/countries' element={<Countries />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
