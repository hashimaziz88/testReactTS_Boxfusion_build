import { createStyles,css } from 'antd-style';
import type { CardProps } from 'antd';

export const useStyles = createStyles(({  token }) => ({
    root: css`
        width: 300px;
        background: ${token.colorBgContainer};
        border-radius: ${token.borderRadius};
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        border: 1px solid ${token.colorBorderSecondary};
    `,

    header: css`
        border-bottom: none;
        padding-bottom: 8px;
    `,

    body: css`
        padding-top: 0;
    `,

    divContainer: css`
        max-width: 100%;
        margin: 0 auto;
        padding: 16px;
    `,

    buttonContainer: css`
        display: flex;
        justify-content: flex-end;
        margin-bottom: 12px;
    `,

    cardContainer: css`
        max-width: 1200px;
        margin: 0 auto;
        padding: 16px;
        box-sizing: border-box;
        display: grid;
        gap: 20px;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    `,
}));

export const stylesCard: CardProps['styles'] = {
    root: {
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        borderRadius: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: 500,
    },
};