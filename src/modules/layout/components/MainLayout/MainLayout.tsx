import { Outlet } from "react-router-dom";
// components
import FooterLayout from "../Footer/FooterLayout";
import HeaderLayout from "../Header/HeaderLayout";
import SideBar from "../SideBar/SideBar";
// antd
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    lineHeight: "64px",
    backgroundColor: "#4096ff",
};

const contentStyle: React.CSSProperties = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#0958d9",
};

const siderStyle: React.CSSProperties = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#1677ff",
};

const footerStyle: React.CSSProperties = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#4096ff",
};

const layoutStyle = {
    borderRadius: 8,
    overflow: "hidden",
};

const MainLayout = () => {
    return (
        <>
            <Layout style={layoutStyle}>
                <Sider width="15%" style={siderStyle}>
                    <SideBar />
                </Sider>
                <Layout>
                    <Header style={headerStyle}>
                        <HeaderLayout />
                    </Header>
                    <Content style={contentStyle}>
                        <Outlet />
                    </Content>
                    <Footer style={footerStyle}>
                        <FooterLayout />
                    </Footer>
                </Layout>
            </Layout>
        </>
    );
};

export default MainLayout;
