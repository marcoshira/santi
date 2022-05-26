import { GetServerSideProps } from 'next';
import { Home } from '../templates/Home';

export default function Index() {
  return <Home />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
