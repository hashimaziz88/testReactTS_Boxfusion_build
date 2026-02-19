import React from "react";
import { Layout, Menu, theme } from "antd";
import { Link, Outlet } from "react-router-dom";

const { Header, Content, Footer } = Layout;


const items = [
  { key: 1, label: <Link to="/">Home</Link> },
  { key: 2, label: <Link to="/client">Client</Link> },
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
          defaultSelectedKeys={["1"]}
          items={items}
          style={{ flex: 1, minWidth: 0, justifyContent: "center", display: "flex" }}

        />
      </Header>
      <Content style={{ padding: "16px 24px", backgroundColor: colorBgContainer }}>
        <div style={{
          backgroundColor: "white",
          borderRadius: borderRadiusLG,
          boxSizing: "border-box",
          padding: 2,
          width: "100%",
          height: "100%",
        }}>
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>hashimaziz88 ©{new Date().getFullYear()} Created by Hashim Aziz Muhammad</Footer>
    </Layout >
  );
};

export default App;
