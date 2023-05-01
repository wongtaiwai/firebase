import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'antd'
import Home from './pages/Home'
import './pages/Home.css'
import { QueryClient,QueryClientProvider  } from '@tanstack/react-query';

function App() {

  const queryClient = new QueryClient();


  return (
    <QueryClientProvider client={queryClient}>
    <Home/>
    </QueryClientProvider>
  );
}

export default App