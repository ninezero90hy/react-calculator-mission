import styled from 'styled-components';
import Calculator from './components/Calculator';

const Container = styled.div`
  max-width: 400px;
  margin: 10vh auto 0 auto;
`;

function App() {
  return (
    <Container>
      <Calculator></Calculator>
    </Container>
  );
}

export default App;
