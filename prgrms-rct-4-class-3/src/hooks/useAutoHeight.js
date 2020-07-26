import { useRef, useLayoutEffect } from 'react';

export default function useAutoHeight(lineHeight, contents) {
  const ref = useRef(null);

  
  // textarea 높이 자동 조절 훅스
  useLayoutEffect(() => {

    ref.current.style.height = 'auto';
    ref.current.style.height = ref.current.scrollHeight + lineHeight + 'px';
    
    console.log(ref)
  }, [contents]);
  
  return [ref];
}
