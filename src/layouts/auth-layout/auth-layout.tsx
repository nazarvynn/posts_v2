import { Layout } from 'antd';

export default function AuthLayout({ children }: { children: any }) {
    const { Footer, Content } = Layout;
    return (
        <Layout>
            <Content>{children}</Content>
            <Footer>Footer</Footer>
        </Layout>
    );
}
