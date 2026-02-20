import { createStyles, css } from 'antd-style';

export const useStyles = createStyles({
    layout: css`
        min-height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 100px;
    `,

    card: css`
        width: 40%;
        height: 100%;
    `,

    title: css`
        margin: 0;
    `,

    signInText: css`
        text-align: center;
        margin-bottom: 16px;
    `,
});