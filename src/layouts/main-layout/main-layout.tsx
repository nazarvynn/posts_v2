import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

export default function MainLayout({ children }: { children: any }) {
    return (
        <Layout>
            <Header>Header</Header>
            <Content>{children}</Content>
            <Footer>Footer</Footer>
        </Layout>
    );
}
