import 'styled-components/macro';
declare module 'styled-components/macro' {
    export interface DefaultTheme {
        margin?: number[];
        marginX?:number;
        marginY?:number;
        media?:boolean;
    }
}
