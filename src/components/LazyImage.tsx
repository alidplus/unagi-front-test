import { ImgHTMLAttributes, useEffect, useState } from 'react';
import { Loading } from './Loading';

export const LazyImage = (props: ImgHTMLAttributes<unknown>) => {
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const img = document.createElement('img');
    console.log('lazzzz', props.src);

    img.src = props.src;
    img.onload = () => {
      setLoading(false);
    };
  }, [props.src]);

  return isLoading ? <Loading /> : <img {...props} />;
};
