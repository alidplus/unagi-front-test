import { render } from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { Collection } from './pages/Collection';
import { CreateCard } from './pages/CreateCard';

import { ThemeProvider } from 'styled-components';
import { GlobalCss, ResetCSS } from './components/styled/global';
import { theme } from './components/styled/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <ResetCSS />
    <GlobalCss />
    <Router>
      <Switch>
        <Route exact path="/collection" component={Collection} />
        <Route exact path="/create-card" component={CreateCard} />
      </Switch>
    </Router>
  </ThemeProvider>
);

render(<App />, document.getElementById('root'));
