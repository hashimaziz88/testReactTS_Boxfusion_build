import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import { useStyles } from "./styles/style";
const { Content, Footer } = Layout;




const Client: React.FC = () => {
    const { styles } = useStyles();

    return (
        <Layout className={styles.layout} >
            <Navbar />
            <Content className={styles.contentContainer}>
                <div className={styles.outletContainer}>
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>hashimaziz88 ©{new Date().getFullYear()} Created by Hashim Aziz Muhammad</Footer>
        </Layout >
    );
};

export default Client;
