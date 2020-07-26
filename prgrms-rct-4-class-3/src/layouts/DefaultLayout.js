import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import { useSelector, useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';

import * as selectors from '@/data/rootSelectors';
import * as actions from '@/data/rootActions';

function DefaultLayout(props) {

  const { component: Component, ...rest } = props; {/* 나머지 매개변수 해체할당 component만 Component로 지정할당*/}
  
  const dispatch = useDispatch();

  const user = useSelector(selectors.users.getUser, []); 
  {/* 
    useSelector : selector function 을 전달하여, 리덕스 스토어에  state에 접근할 수 있는 api 
                  selector 는 우리가 기존에 connect 로 사용 할 때 mapStateToProps 와 비슷하다고 생각하시면 됩니다. 
                  deps 배열은 어떤 값이 바뀌었을 때 selector 를 재정의 할 지 설정해줍니다. 
                  deps 값을 생략 하시면 매번 렌더링 될 때마다 selector 함수도 새로 정의됩니다
                  
  */}
  const logOut = () => {
    dispatch(actions.router.push('/login'));
    dispatch(actions.user.logout());
  };

  useEffect(()=>{
    console.log(dispatch)
    console.log(user)
  },[])

  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <>
          <Navigation user={user} onLogout={logOut} />
          <Component {...matchProps} {...rest} />
          <style jsx global>{`
            * {
              box-sizing: border-box;
            }

            html,
            body {
              font-family: Dotum, '맑은 고딕', 'roboto', 'Helvetica Neue', Helvetica, Arial, '맑은 고딕', malgun gothic,
                '돋움', Dotum, sans-serif;
              color: #202b3d;
              background-color: #e9eaed;
              font-size: 12px;
              font-weight: 400;
              line-height: 1.5;
            }

            body {
              padding: 100px 0;
            }
          `}</style>
        </>
      )}
    />
  );
}

export default DefaultLayout;
