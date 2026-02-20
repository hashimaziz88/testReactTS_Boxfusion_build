import React from "react";
import { Layout, Menu, Button, message } from "antd";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuthActions } from "../providers/authProvider";
import { useStyles } from "./styles/style";
const { Header } = Layout;


const items = [
    { key: 1, label: <Link to="/">Home</Link> },
    { key: 2, label: <Link to="/client">Todos</Link> },
    { key: 3, label: <Link to="/admin">Admin</Link> },
];

const App: React.FC = () => {
    const navigate = useNavigate();
    const { logout } = useAuthActions();
    const location = useLocation();
    const { styles } = useStyles();

    const handleLogout = async () => {
        try {
            const res = await logout();
            if (res && res.success) navigate("/");
            message.success("Logged out successfully");
        } catch (err) {
            console.error("Logout failed", err);
            message.error("Logout failed");
        }
    };

    const selectedKey = location.pathname === "/admin" ? "3" : location.pathname === "/client" ? "2" : "1";

    return (

        <Header style={{ display: "flex", alignItems: "center" }}>
            <div className="demo-logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[selectedKey]}
                items={items}
                className={styles.menu}

            />
            {(location.pathname === "/admin" || location.pathname === "/client") && (
                <div style={{ marginLeft: 12 }}>
                    <Button type="primary" className={styles.button} onClick={handleLogout}>
                        Logout
                    </Button>
                </div>
            )}
        </Header>
    );
};

export default App;
