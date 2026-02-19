import React from "react";
import { Layout, Menu, theme } from "antd";
import { Outlet, Link } from "react-router-dom";
import { useStyles } from "./style/style";

const { Header, Content, Footer } = Layout;

const headings = ["Home", "Client", "Admin"];

const items = headings.map((value, index) => ({
    key: index + 1,
    label: <Link to={`/${value === 'Home' ? '' : value.toLowerCase()}`}>{value}</Link>,
}));

const App: React.FC = () => {
    const styles = useStyles();

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
            }}
        >
            <Header style={{ display: "flex" }}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                    items={items}
                    style={{ flex: 1, minWidth: 0 }}
                />
            </Header>
            <Content style={{ padding: "0 0", }}>
                <div style={{
                    backgroundColor: colorBgContainer,
                    borderRadius: borderRadiusLG,
                    alignItems: "center", justifyContent: "center", display: "flex", height: "100%", width: "100%"
                }}>
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>Ant Design ©{new Date().getFullYear()} Created by Ant UED</Footer>
        </Layout >
    );
};

export default App;
