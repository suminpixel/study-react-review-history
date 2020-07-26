import React from 'react';
import { Route } from 'react-router-dom';

function PublicLayout(props) {

     {/* compo인자로 전달된 컴포를 router로 감싸서 랜더링 해주는 큰 layout 구성 용도의 컴포 제작 */}
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={(matchProps) => ( //matchProps :  render경로가 일치 할 때 호출 되는 컴포넌트
        <>
          <Component {...matchProps} /> 
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

export default PublicLayout;
