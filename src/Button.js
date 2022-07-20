import styled from 'styled-components';
const TheButton = styled.div`
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

export default function Button({ valueAs, special, onClick: click }) {
  return (
    <TheButton
      onClick={() => click(valueAs)}
      style={{ background: special ? 'orange' : '' }}>
      {valueAs}
    </TheButton>
  );
}
