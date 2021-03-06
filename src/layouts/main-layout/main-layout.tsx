import { Layout } from 'antd';

export default function MainLayout({ children }: { children: any }) {
    const { Header, Footer, Content } = Layout;
    return (
        <Layout>
            <Header>Header</Header>
            <Content>{children}</Content>
            <Footer>Footer</Footer>
        </Layout>
    );
}
