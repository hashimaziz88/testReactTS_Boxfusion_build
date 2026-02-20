import {createStyles, css} from "antd-style";

export const useStyles = createStyles(({  token }) => ({
    layout : css `
        display: "flex";
        flex: 1;
        height: 100%;
        width: 100%;
        overflow: auto;
    `,

    contentContainer : css `
    padding: 16px 24px;
    background-color: ${token.colorBgContainer};
    `, 

    outletContainer: css `
        background-color: white;
        border-radius: ${token.borderRadiusLG};
        box-sizing: border-box;
        padding: 2;
        width: 100%;
        height: 100%;
    `,

    h1: css `
    text-align: center;
    margin: 16px 0; 
    color: black;
    `
}));