import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ token }) => ({
    menu: {
        flex: 1,
        minWidth: 0,
        justifyContent: "center",
        display: "flex",
    },

    button: {
        color: "black"
    }
}));
