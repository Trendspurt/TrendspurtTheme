import Layout from './Layout'
import {Version, Button, HeroBase, Headline, Text, Spacer} from '@trendspurt/trendspurt-theme';
import Container from 'react-bootstrap/Container';

export default function(props) {
  return (
    <Layout className="LearnLayout">



      <Container>
        <div style={{backgroundColor: '#E4004C', color: 'white', padding: '8px 20px', borderRadius: '8px', margin: '40px 0'}}>
          NOTE: THIS IS THE PRE-RELEASE DOCUMENTATION
        </div>
      </Container>

      <Spacer height="60"></Spacer>
      
      <Container>
        <div className="learn-summary">
          <table>
            <tr>
              <td style={{minWidth: '160px'}}>Audience:</td>
              <td>{props.meta.audience}</td>
            </tr>
            <tr>
              <td>Goal:</td>
              <td>{props.meta.goal}</td>
            </tr>
            <tr>
              <td>Time invest:</td>
              <td>{props.meta.duration}</td>
            </tr>
          </table>
        </div>
      </Container>

      <Container>
        {/* <Text>Learning Mojo</Text> */}
      </Container>

      {props.children}

    </Layout>
  )
}
