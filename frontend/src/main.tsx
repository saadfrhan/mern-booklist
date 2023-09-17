import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store.ts';
import { ThemeProvider } from './components/theme-provider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="sm:p-8">
          <App />
        </div>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
