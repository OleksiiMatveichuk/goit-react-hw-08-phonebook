import 'bootstrap/dist/css/bootstrap.min.css';
import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Loader from './Loader';

const Register = lazy(() => import('pages/Register'));
const LogIn = lazy(() => import('pages/LogIn'));
const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};
