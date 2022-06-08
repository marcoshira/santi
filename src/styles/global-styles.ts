import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  background: ${({ theme }) => theme.colors.background2};
}


body{
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.font.family.default};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.teal};
  background: ${({ theme }) => theme.colors.background2};
}

h1, h2, h3, h4, h5, h6{
  font-family: ${({ theme }) => theme.font.family.secondary};
  font-weight: 900;
  margin: ${({ theme }) => theme.spacings.large} 0;
}

p{
  margin: ${({ theme }) => theme.spacings.medium} 0;
}

ul, ol{
  margin: ${({ theme }) => theme.spacings.medium};
  padding: ${({ theme }) => theme.spacings.medium};
}

a{
  color: ${({ theme }) => theme.colors.thirdColor}
}

.table {
  width: 100%;
  overflow-y: auto;
}

`;
