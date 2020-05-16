import { IConfirmationType } from "./IConfirmationType";

export type IConfirmation = {
    [key in IConfirmationType]: {
        title: string;
        text: string;
        btnText: string;
        icon: JSX.Element;
        handleClick: () => void;
    };
};