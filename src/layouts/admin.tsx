import React from "react";
import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const { Content, Footer } = Layout;


const App: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout
            style={{
                display: "flex",
                flex: 1,
                height: "100%",
                width: "100%",
                overflow: "auto",
            }}
        >
            <Navbar />
            <h1 style={{ textAlign: "center", margin: "16px 0", color: "black" }}>Admin Dashboard</h1>
            <Content style={{ padding: "16px 24px", overflow: "auto" }}>
                <div style={{
                    backgroundColor: colorBgContainer,
                    borderRadius: borderRadiusLG,
                    padding: 16,
                    boxSizing: "border-box",
                    width: "100%",
                }}>
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>hashimaziz88 ©{new Date().getFullYear()} Created by Hashim Aziz Muhammad</Footer>
        </Layout >
    );
};

export default App;
