import { createStyles } from 'antd-style';
import type { CardProps } from 'antd';

export const useStyles = createStyles(({ token }) => ({
    root: {
        width: 300,
        backgroundColor: token.colorBgContainer,
        borderRadius: token.borderRadius,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        border: `1px solid ${token.colorBorderSecondary}`,
    },
    header: {
        borderBottom: 'none',
        paddingBottom: 8,
    },
    body: {
        paddingTop: 0,
    },
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