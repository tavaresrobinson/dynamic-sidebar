import styled, {css, DefaultTheme} from 'styled-components/macro';

export const Center = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

export const Container = styled.div`
   display:flex;
   flex-direction:column;
   margin: 6rem 30rem;
   
       @media(min-width: 120.1em) {
        width: 133.6rem;
         margin-right: 0;
         margin-left: 0;
     }
     
     ${(props) => {
    const {media=true} = props;

    return media && css`
    @media(max-width: 106.25em) {
         margin: calc(6rem) calc(30rem/1.2);
     }
    @media(max-width: 80.35em) {
         margin: calc(6rem) calc(30rem/3);
     }
    @media(max-width: 62.31em) {
        margin: calc(6rem) calc(30rem/4);
     }
    @media(max-width: 40em) {
        margin: calc(6rem) calc(30rem/5);
     }
     @media(max-width: 30em) {
        margin: calc(6rem) calc(30rem/6);
     }
     @media(max-width: 22.5em) {
        margin: calc(6rem) calc(30rem/8);
     }
     `;
  }}
     

   ${(props:DefaultTheme) => {
    const {margin, marginX, marginY, media=true} = props;
    if (margin) {
      return css`
             margin:${margin[0]}rem ${margin[1]}rem;
             ${media && (
    `
             @media(max-width: 106.25em) {
                margin:${margin[0]}rem ${margin[1]/1.2}rem;
             }      
             @media(max-width: 80.35em) {
                margin:${margin[0]}rem ${margin[1]/3}rem;
             }
             @media(max-width: 62.31em) {
                margin:${margin[0]}rem ${margin[1]/4}rem;
             }
             @media(max-width: 40em) {
                margin:${margin[0]}rem ${margin[1]/5}rem;
             }
             @media(max-width: 30em) {
                margin:${margin[0]}rem ${margin[1]/6}rem;
             }
             @media(max-width: 22.5em) {
                margin:${margin[0]}rem ${margin[1]/8}rem;
             }
             `
  )}
        `;
    }
    if (marginX && marginY) {
      return css`
            margin:${marginY}rem ${marginX}rem;
            ${media && (
    `
            @media(max-width: 106.25em) {
                 margin:${marginY}rem ${marginX/1.2}rem;
            }            
            @media(max-width: 80.35em) {
                 margin:${marginY}rem ${marginX/3}rem;
            }
            @media(max-width: 62.31em) {
                 margin:${marginY}rem ${marginX/4}rem;
            } 
            @media(max-width: 40em) {
                 margin:${marginY}rem ${marginX/5}rem;
            }
            @media(max-width: 30em) {
                 margin:${marginY}rem ${marginX/6}rem;
            }
            @media(max-width: 22.5em) {
                 margin:${marginY}rem ${marginX/8}rem;
            }
                `
  )}
        `;
    } else if (marginX) {
      return css`
             margin-right:${marginX}rem;
             margin-left:${marginX}rem;
             ${media && (
    `
             @media(max-width: 106.25em) {
                 margin-right:${marginX/1.2}rem;
                 margin-left:${marginX/1.2}rem;
            }       
             @media(max-width: 80.35em) {
                 margin-right:${marginX/3}rem;
                 margin-left:${marginX/3}rem;
             }
             @media(max-width: 62.31em) {
                 margin-right:${marginX/4}rem;
                 margin-left:${marginX/4}rem;
             }              
             @media(max-width: 40em) {
                 margin-right:${marginX/5}rem;
                 margin-left:${marginX/5}rem;
             }
             @media(max-width: 30em) {
                 margin-right:${marginX/6}rem;
                 margin-left:${marginX/6}rem;
             }
             @media(max-width: 22.5em) {
                 margin-right:${marginX/8}rem;
                 margin-left:${marginX/8}rem;
             }
                 `
  )}
        `;
    } else if (marginY) {
      return css`
             margin-top:${marginY}rem;
             margin-bottom:${marginY}rem;
             ${media && (
    `
             @media(max-width: 80.35em) {
                 margin-top:${marginY}rem;
                 margin-bottom:${marginY}rem;
             }
             @media(max-width: 62.31em) {
                 margin-top:${marginY}rem;
                 margin-bottom:${marginY}rem;
             }
             @media(max-width: 40em) {
                 margin-top:${marginY}rem;
                 margin-bottom:${marginY}rem;
             }
                 `
  )}
             
        `;
    }
  }
}
`;
