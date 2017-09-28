import * as React from 'react';
import { ReactElement } from 'react';
import Head from 'next/head';


interface Props {
  title: string,
  children: ReactElement<any>
}

export default ({title, children}: Props) => {
  return (
    <div>
      <Head>
        <title>{ title }</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      { children }
      <footer>
        Fuck your footer!!!
      </footer>
    </div>
  );
}