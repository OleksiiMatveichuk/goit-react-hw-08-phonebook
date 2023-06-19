import 'bootstrap/dist/css/bootstrap.min.css';
import { Suspense, lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refresh } from 'service/phoneboockAPI';

import { Loader } from './Loader';
import { Layout } from './Layout';
import { PrivetRoute } from './PrivateRoure';
import { PublicRoute } from './PubliRoute';
import { seletIsRefresh } from 'redux/authSelectors';

const Home = lazy(() => import('pages/Home'));
const Register = lazy(() => import('pages/Register'));
const LogIn = lazy(() => import('pages/LogIn'));
const Contacts = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(seletIsRefresh);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

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
      {!isRefresh && (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/" element={<PublicRoute />}>
                <Route path="register" element={<Register />} />
                <Route path="login" element={<LogIn />} />
              </Route>
              <Route path="/" element={<PrivetRoute />}>
                <Route path="contacts" element={<Contacts />} />
              </Route>
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </Suspense>
      )}
    </div>
  );
};
