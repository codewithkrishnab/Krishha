import styled from "styled-components";

const KrishhTitle = styled.h1`
  color: green;
  ${
    props => props.styleThis ? `
      color: blue
    ` : ''
  }
`

export default KrishhTitle;