import styled from 'styled-components';

const TheSpecialButton = styled.div`
  border: 0.5px solid #999;
  line-height: 100px;
  text-align: center;
  font-size: 25px;
  cursor: pointer;
  background: orange;

  :hover {
    color: white;
    transition: 0.1s ease-in-out;
    opacity: 0.5;
  }
`;

export default function SpecialButton({ valueAs, onClick: click }) {
  return (
    <TheSpecialButton onClick={() => click(valueAs)}>
      {valueAs}
    </TheSpecialButton>
  );
}
