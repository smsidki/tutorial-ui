import styles from './index.css';
import { Layout } from 'antd';
import AdminLayout from '@/components/Layout/AdminLayout';

function BasicLayout(props) {

  if (props.location.pathname.startsWith('/admin')) {
    return <AdminLayout styles={styles}>{props.children}</AdminLayout>;
  }

  return (
    <Layout className={styles.normal}>
      <Layout.Header style={{ backgroundColor: 'darkslateblue' }}>
        <h1 style={{ color: 'white' }}>Tutorial Umi</h1>
      </Layout.Header>
      <Layout.Content>
        {props.children}
      </Layout.Content>
      <Layout.Footer className={styles.footer}>
        {'Copyright \u00A9 2019'}
      </Layout.Footer>
    </Layout>
  );
}

export default BasicLayout;
