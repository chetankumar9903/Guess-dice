
import styled from 'styled-components';


const Button =styled.button`
/* display: flex;
flex-direction: column;
justify-content: center; */
/* align-items: center; */
/* height: 44px; */
color: white;
padding: 10px 18px;
background: #000000;
border-radius: 5px;
gap: 10px;
min-width:220px;
font-size: 16px;
border: none;
cursor: pointer;
border: 1px solid transparent;
transition: 0.5s background ease-in;

&:hover{
background-color: white;
color: black;
border: 1px solid black;
transition: 0.3s background ease-in;
}
`;

const OutlineButton =styled(Button)`
 background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;

export default Button;
export {OutlineButton};
