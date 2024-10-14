import { createGlobalStyle } from 'styled-components';
import background from '../assets/img/background.svg';

const GlobalStyle = createGlobalStyle`
    body {
        background-image: url('${background}');
    }
`;

export default GlobalStyle;
