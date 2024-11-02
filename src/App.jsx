import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import MainLayout from './Components/MainLayout';
import Show from './pages/Show';
//import { ThemeProvider } from 'styled-components';
import { GlobalTheme } from './theme';

// Create a client
const queryClient = new QueryClient();



function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalTheme>
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/starred" element={<Starred />} />
        </Route>
        <Route path="/show/:showId" element={<div><Show/></div>} />

        <Route path='*' element= {<div>Not Found</div>}/>
      </Routes>
    </HashRouter>
    </GlobalTheme>
      </QueryClientProvider>
  );
}

export default App;
