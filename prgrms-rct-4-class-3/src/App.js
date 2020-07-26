import React, { Component } from 'react';
import Home from '/pages/Home';
import { Switch } from 'react-router-dom';
import DefaultLayout from '/layouts/DefaultLayout';
import PublicLayout from '/layouts/PublicLayout';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import User from './pages/User';
import { ConnectedRouter } from 'connected-react-router';

{/* @TODO: 함수형 변환 필요 */}
class App extends Component {
  render() {
    const { history } = this.props;

    return (
   
      <ConnectedRouter history={history}>   
      {/* ConnectedRouter : 리덕스 스토어에서 히스토리를 인자로 전달 */}
        <Switch>
          <PublicLayout path="/login" component={Login} />
           {/* compo인자로 전달된 컴포를 router로 감싸서 랜더링 해주는 common layout용도의 컴포 제작 */}
          <PublicLayout path="/signup" component={SignUp} />
          <DefaultLayout path="/u/:name" component={User} />
          <DefaultLayout path="/" component={Home} />
        </Switch>
      </ConnectedRouter>
    );
  }
}

export default App;
