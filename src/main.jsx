import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/home';
import Listapais from './pages/lista-pais/index.jsx/'; // Importando o componente correto
import Carinho from './pages/carinho/index.jsx'; // Importando o componente correto

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/lista/pais',
    element: <Listapais />, // Componente com a inicial maiúscula
  },
  {
    path: '/lista/pais/carinho',
    element: <Carinho/>
  }, 
  {
    path: '*',
    element: <h1>Página não encontrada</h1>,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);