import Head from 'next/head'
import {NavBar, Footer} from '@trendspurt/trendspurt-theme';
import {Container, Nav, NavDropdown} from 'react-bootstrap';
import Link from 'next/link';

export default function ShowroomDetailLayout(props) {

  return (
    <div className={ 'ShowroomDetailLayout' + ((props.dark) ? ' dark' : '') } style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Head>
        <title>Explore Mojo (for Adobe XD) - Showroom with lots of samples</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={props.className} style={{flex: '2 1 100%'}}>
        {props.children}
        <div className="showroom--overlay">
          <Link href="/showroom">◄ Back to Showroom</Link>
        </div>
        <div className="created-with"></div>
      </main>

    </div>
  )
}
