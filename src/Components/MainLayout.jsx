import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Title from './Title';

const MainLayout = ({ children }) => {
  return (
    <div>
      <Title
        title="Box Office"
        subtitle="Are you looking for a movie or an actor?"
      />
      <Nav />
      <Outlet></Outlet>
      {children}
    </div>
  );
};

export default MainLayout;
