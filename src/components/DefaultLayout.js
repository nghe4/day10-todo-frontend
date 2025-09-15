import { NavLink, Outlet } from "react-router";
import { Layout, Menu } from "antd";

const { Header, Content, Footer } = Layout;

export const DefaultLayout = () => {
  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="home">
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          <Menu.Item key="done">
            <NavLink to="/done">Done List</NavLink>
          </Menu.Item>
          <Menu.Item key="about">
            <NavLink to="/about">About Us</NavLink>
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Outlet />
      </Content>
      <Footer>This is a todo app</Footer>
    </Layout>
  );
};
