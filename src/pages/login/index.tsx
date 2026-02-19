import React from "react";
import { Button, Checkbox, Form, Input, Layout, Card, Typography, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuthActions, useAuthState } from "../../providers/authProvider";

const { Title, Text } = Typography;

type LoginValues = {
  username: string;
  password: string;
  remember?: boolean;
};

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuthActions();
  const authState = useAuthState();

  const onFinish = async (values: LoginValues) => {
    try {
      const res = await login(values.username, values.password);
      if (res && res.success) {
        message.success("Login successful");
        if (res.role === "admin") navigate("/admin");
        else navigate("/client");
      } else {
        message.error("Invalid credentials");
      }
    } catch (err) {
      console.error("Login error:", err);
      message.error("Login failed");
    }
  };

  return (
    <Layout style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
      <Card style={{ width: 420 }}>
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <Title level={3} style={{ margin: 0 }}>
            Sign in
          </Title>
          <Text type="secondary">Enter your credentials to continue</Text>
        </div>

        <Form<LoginValues> layout="vertical" onFinish={onFinish} initialValues={{ remember: true }}>
          <Form.Item name="username" label="Username" rules={[{ required: true, message: "Please enter your username" }]}>
            <Input placeholder="admin or client" />
          </Form.Item>

          <Form.Item name="password" label="Password" rules={[{ required: true, message: "Please enter your password" }]}>
            <Input.Password placeholder="admin or client" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block loading={!!authState.isPending}>
              Sign in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Layout>
  );
};

export default LoginPage;
