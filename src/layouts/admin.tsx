import React from "react";
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import { useStyles } from "./styles/style";
const { Content, Footer } = Layout;


const Admin: React.FC = () => {
    const { styles } = useStyles()

    return (
        <Layout className={styles.layout}>
            <Navbar />
            <h1 className={styles.h1}>Admin Dashboard</h1>
            <Content className={styles.contentContainer}>
                <div className={styles.outletContainer}>
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>hashimaziz88 ©{new Date().getFullYear()} Created by Hashim Aziz Muhammad</Footer>
        </Layout >
    );
};

export default Admin;
