import { createGlobalStyle } from 'styled-components';
import SharpSansNo1Medium from '../fonts/SharpSansNo1-Medium.eot';
import SharpSansNo1MediumSVG from '../fonts/SharpSansNo1-Medium.svg';
import SharpSansNo1MediumTTF from '../fonts/SharpSansNo1-Medium.ttf';
import SharpSansNo1MediumWOFF from '../fonts/SharpSansNo1-Medium.woff';
import SharpSansNo1MediumWOFF2 from '../fonts/SharpSansNo1-Medium.woff2';

import SharpSansNo2BoldRegular from '../fonts/SharpSansNo2Bold-Regular.eot';
import SharpSansNo2BoldRegularSVG from '../fonts/SharpSansNo2Bold-Regular.svg';
import SharpSansNo2BoldRegularTTF from '../fonts/SharpSansNo2Bold-Regular.ttf';
import SharpSansNo2BoldRegularOFF from '../fonts/SharpSansNo2Bold-Regular.woff';
import SharpSansNo2BoldRegularOFF2 from '../fonts/SharpSansNo2Bold-Regular.woff2';

import SharpSansDispNo2Book from '../fonts/SharpSansDispNo2-Book.eot';
import SharpSansDispNo2BookSVG from '../fonts/SharpSansDispNo2-Book.svg';
import SharpSansDispNo2BookTTF from '../fonts/SharpSansDispNo2-Book.ttf';
import SharpSansDispNo2BookOFF from '../fonts/SharpSansDispNo2-Book.woff';
import SharpSansDispNo2BookOFF2 from '../fonts/SharpSansDispNo2-Book.woff2';

import SharpsansSemiboldRegular from '../fonts/SharpsansSemiboldRegular.eot';
import SharpsansSemiboldRegularSVG from '../fonts/SharpsansSemiboldRegular.svg';
import SharpsansSemiboldRegularTTF from '../fonts/SharpsansSemiboldRegular.ttf';
import SharpsansSemiboldRegularOFF from '../fonts/SharpsansSemiboldRegular.woff';
import SharpsansSemiboldRegularOFF2 from '../fonts/SharpsansSemiboldRegular.woff2';

const GlobalStyle = createGlobalStyle`
   @font-face {
        font-family: 'SharpSansNo1-Medium';
        src: url('${SharpSansNo1Medium}');
        src: url('${SharpSansNo1Medium}?#iefix') format('embedded-opentype'),
            url('${SharpSansNo1MediumSVG}#SharpSansNo1-Medium') format('svg'),
            url('${SharpSansNo1MediumTTF}') format('truetype'),
            url('${SharpSansNo1MediumWOFF}') format('woff'),
            url('${SharpSansNo1MediumWOFF2}') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'SharpSansNo2Bold-Regular';
        src: url('${SharpSansNo2BoldRegular}');
        src: url('${SharpSansNo2BoldRegular}?#iefix') format('embedded-opentype'),
            url('${SharpSansNo2BoldRegularSVG}#SharpSansNo1-Medium') format('svg'),
            url('${SharpSansNo2BoldRegularTTF}') format('truetype'),
            url('${SharpSansNo2BoldRegularOFF}') format('woff'),
            url('${SharpSansNo2BoldRegularOFF2}') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'SharpSansDispNo2Book';
        src: url('${SharpSansDispNo2Book}');
        src: url('${SharpSansDispNo2Book}?#iefix') format('embedded-opentype'),
            url('${SharpSansDispNo2BookSVG}#SharpSansNo1-Medium') format('svg'),
            url('${SharpSansDispNo2BookTTF}') format('truetype'),
            url('${SharpSansDispNo2BookOFF}') format('woff'),
            url('${SharpSansDispNo2BookOFF2}') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'SharpsansSemiboldRegular';
        src: url('${SharpsansSemiboldRegular}');
        src: url('${SharpsansSemiboldRegular}?#iefix') format('embedded-opentype'),
            url('${SharpsansSemiboldRegularSVG}#SharpSansNo1-Medium') format('svg'),
            url('${SharpsansSemiboldRegularTTF}') format('truetype'),
            url('${SharpsansSemiboldRegularOFF}') format('woff'),
            url('${SharpsansSemiboldRegularOFF2}') format('woff2');
        font-weight: normal;
        font-style: normal;
    }
`;

export const theme = {
    fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
    },
    fontWeight: {
        hairline: '100',
        thin: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
    },
};


export default GlobalStyle;
