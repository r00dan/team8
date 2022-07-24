import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { Router } from './Router';

import './index.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <RecoilRoot>
        <Router />
      </RecoilRoot>
    </ApolloProvider>
  </BrowserRouter>
);
