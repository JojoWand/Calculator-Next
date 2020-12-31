import Head from 'next/head';
import React, { useState } from 'react';
import Calculator from '../components/Calculator';

const Home: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Head>
        <title>Home Page Project</title>
      </Head>

      <main>
        <Calculator />
      </main>
    </div>
  );
};
function a() {}
export default Home;
