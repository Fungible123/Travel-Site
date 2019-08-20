import styled from "styled-components"

export const Book = styled.button`
  display: block;
  background: rgba(255, 137, 71, 0.8);
  border-radius: 10px;
  width: 300px;
  height: 60px;
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
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 150px;
    height: 50px;
    margin: 10px auto;
    a {
      ${props => props.theme.font_size.regular}
    }
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: flex;
    width: 150px;
    height: 40px;
    margin: 5px auto;
    justify-content: center;
    a {
      ${props => props.theme.font_size.regular}
    }
  }
  ${props => props.theme.font_size.xlarge}
`
