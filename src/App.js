import styled from 'styled-components';

const RESULT = 'RESULT';

const Container = styled.div`
  max-width: 400px;
  margin: 10vh auto 0 auto;
`;

const Display = styled.div`
  text-align: right;
  height: 70px;
  line-height: 70px;
  padding: 16px 8px;
  border: 1px solid black;
  background: black;
  color: white;
  font-size: 50px;
`;

const Button = styled.div`
  border: 0.5px solid #999;
  line-height: 100px;
  text-align: center;
  font-size: 25px;
  cursor: pointer;

  :hover {
    background-color: #323330;
    color: white;
    transition: 0.1s ease-in-out;
    opacity: 0.5;
  }
`;

const SpecialButton = styled(Button)`
  background: orange;
`;

const Buttons = styled.div`
  display: grid;
`;

const TopButtons = styled(Buttons)`
  grid-template-columns: 2fr 1fr 1fr;
`;

const MiddleButtons = styled(Buttons)`
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const BottomButtons = styled(Buttons)`
  grid-template-columns: 3fr 1fr;
`;

const EqualButton = styled(Button)`
  background-color: orange;
`;

function App() {
  return (
    <Container>
      <Display id={RESULT}>54,000</Display>
      <TopButtons>
        <SpecialButton>AC</SpecialButton>
        <SpecialButton>%</SpecialButton>
        <SpecialButton>/</SpecialButton>
      </TopButtons>
      <MiddleButtons>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <SpecialButton>X</SpecialButton>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <SpecialButton>-</SpecialButton>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <SpecialButton>+</SpecialButton>
      </MiddleButtons>
      <BottomButtons>
        <Button>0</Button>
        <EqualButton>=</EqualButton>
      </BottomButtons>
    </Container>
  );
}

export default App;
