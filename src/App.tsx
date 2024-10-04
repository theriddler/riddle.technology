import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.scss';
import { Col, Container, Row } from 'reactstrap';

interface Props {}
interface State {}

class App extends React.Component<Props, State> {

  constructor(p: Props){
    super(p);

    this.state = {}
  }

  render () {
    return (
      <div className='app'>
        <header>
          <div className='header-text'>RIDDLE TECHNOLOGY</div>
          <div className='header-subtext'>PRECISION SOFTWARE</div>
        </header>
        <main>
          <Container>
            <Row>
              <Col xs={12}>
                <h1>INTRO</h1>
                <p>Technology is advancing.</p>
                <p> If you have an idea that can be made into reality, let's do it.</p>
              </Col>
              <Col xs={6}>
                
              </Col>
            </Row>
          </Container>
        </main>
        <footer>
          <div className='px-5'>
            <span className='mr-5'>X</span>
            <span className='mr-5'>X</span>
            <span className='mr-5'>X</span>
          </div>
        </footer>
      </div>
    )
  }
}

export default App;
