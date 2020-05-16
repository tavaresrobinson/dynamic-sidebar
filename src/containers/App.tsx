import React, {lazy} from 'react';
import {ConfigProvider} from 'antd';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import RouterOutlet from 'router';

const Layout = lazy(()=> import('components/Layout'));

const App = () => {
  const {i18n} = useTranslation();
  return (
    <ConfigProvider direction={i18n.dir(i18n.language)}>
      <Router>
        <Layout>
          <RouterOutlet/>
        </Layout>
      </Router>
    </ConfigProvider>
  );
};
// https://hasura.io/blog/best-practices-of-using-jwt-with-graphql/
export default App;
