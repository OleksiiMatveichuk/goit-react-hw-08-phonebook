import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUserName } from 'redux/authSelectors';

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const name = useSelector(selectUserName);

  return isLoggedIn ? (
    <section className="home">
      <h2>Welcome back {name}!</h2>
    </section>
  ) : (
    <section className="home">
      <h2>
        Hello User! <br /> Are you registered?
      </h2>
    </section>
  );
};
export default Home;
