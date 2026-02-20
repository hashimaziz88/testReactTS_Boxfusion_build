import { createStyles,css } from 'antd-style';

export const useStyles = createStyles( {
    menu: css `
        flex: 1;
        min-width: 0;
        justify-content: center;
        display: "flex";
    `,

    button: css`
        color: black;
    `,

    headerStyle: css `
        display: flex;
        align-items: center;
    `,

    buttonContainer: `
        margin-left: 12;
    `
});
