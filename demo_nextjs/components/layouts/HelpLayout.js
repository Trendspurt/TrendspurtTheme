import Layout from './Layout'
import {Version, Button, HeroBase, Headline, Text, Spacer} from '@trendspurt/trendspurt-theme';
import Container from 'react-bootstrap/Container';

export default function(props) {
  return (
    <Layout className="HelpLayout">

      <Spacer height="60"></Spacer>

      {props.children}
      
      <Spacer height="60"></Spacer>

    </Layout>
  )
}
