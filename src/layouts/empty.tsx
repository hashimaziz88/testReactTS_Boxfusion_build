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
