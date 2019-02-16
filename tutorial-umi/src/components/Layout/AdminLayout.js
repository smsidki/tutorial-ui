import React from 'react';
import { Layout } from 'antd';

class AdminLayout extends React.Component {

  render() {
    const { children, styles } = this.props;
    return(
      <Layout className={styles.normal}>
        <Layout.Header style={{backgroundColor: 'black'}}>
          <h1 style={{color: 'white'}}>Tutorial Umi</h1>
        </Layout.Header>
        <Layout.Content>
          { children }
        </Layout.Content>
      </Layout>
    );
  }

}

export default AdminLayout;
