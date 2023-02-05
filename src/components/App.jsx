import { AddUsersPage } from 'pages/AddUsersPage';
import { HomePage } from 'pages/Homepage';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';

export const App = () => {
  return (
    <Routes> 
      <Route path="/" element={<Layout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='add' element={<AddUsersPage/>}/>
      </Route>
    </Routes>
  );
};
