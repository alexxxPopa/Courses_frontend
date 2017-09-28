import * as React from 'react';
import Link from 'next/link';
import Layout from '../components/layout';


export default () => {
  return ( 
    <Layout 
      title="Home"> 
      <div>
      <header>
        <nav>
          <Link href='/'><a>Home</a></Link>
          <Link href='/login'><a>Log In</a></Link>
          <Link href='/signup'><a>Sign Up</a></Link>
        </nav>
      </header>
      </div>
    </Layout>


  );
}
