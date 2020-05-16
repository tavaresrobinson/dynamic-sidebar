import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'i18n';
import 'styles/less/theme.less';
import './index.scss';
import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';
import Loader from 'components/Loader';

ReactDOM.render(
    <Suspense fallback={<Loader/>}>
      <App/>
    </Suspense>
    , document.getElementById('root'));
