import React from "react";
import { Layout, Menu, theme, Button } from "antd";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuthActions } from "../providers/authProvider";

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

    const navigate = useNavigate();
    const { logout } = useAuthActions();

    const handleLogout = async () => {
        try {
            const res = await logout();
            if (res && res.success) navigate("/login");
        } catch (err) {
            console.error("Logout failed", err);
        }
    };

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
            <Header style={{ display: "flex", alignItems: "center" }}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["3"]}
                    items={items}
                    style={{ flex: 1, minWidth: 0, justifyContent: "center", display: "flex" }}

                />
                <div style={{ marginLeft: 12 }}>
                    <Button type="primary" onClick={handleLogout}>
                        Logout
                    </Button>
                </div>
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
            <Footer style={{ textAlign: "center" }}>hashimaziz88 ©{new Date().getFullYear()} Created by Hashim Aziz Muhammad</Footer>
        </Layout >
    );
};

export default App;
