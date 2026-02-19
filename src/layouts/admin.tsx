import React from "react";
import { Layout, Menu, theme } from "antd";
import { Outlet, Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;


const items = [
    { key: 1, label: <Link to="/">Home</Link> },
    { key: 2, label: <Link to="/client">Todos</Link> },
    { key: 3, label: <Link to="/admin">Admin</Link> },
];

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
            <Header style={{ display: "flex" }}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["3"]}
                    items={items}
                    style={{ flex: 1, minWidth: 0, justifyContent: "center", display: "flex" }}

                />
            </Header>
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
            <Footer style={{ textAlign: "center" }}>Ant Design ©{new Date().getFullYear()} Created by Ant UED</Footer>
        </Layout >
    );
};

export default App;
