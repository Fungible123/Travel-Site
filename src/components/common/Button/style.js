import styled from "styled-components"

export const Book = styled.button`
  background: rgba(255, 137, 71, 0.8);
  border-radius: 10px;
  height: 60px;
  width: 100%;
  margin: 20px auto;
  transition: 0.2s ease-in-out;
  &:hover {
    background: #fd5d02;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.color.light};
    font-family: ${props => props.theme.font.secondary};
  }
  ${props => props.theme.font_size.xlarge}
`
