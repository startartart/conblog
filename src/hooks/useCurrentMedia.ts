import { useMediaQuery } from 'react-responsive';
import { MediaProps, MediaReturnType } from './currentMedia.types';

export default function useCurrentMedia({
  method,
}: MediaProps): MediaReturnType {
  const isHugeDesktop = useMediaQuery({ query: '(min-width: 1920px)' });
  const isMiddleDesktop = useMediaQuery({
    query: '(min-width:1420px) and (max-width:1919px)',
  });
  const isDesktop = useMediaQuery({
    query: '(min-width:1024px) and (max-width:1419px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width:768px) and (max-width:1023px)',
  });
  const isMobile = useMediaQuery({
    query: '(max-width:767px)',
  });

  if (method === 'row') {
    if (isMobile) return 1;
    if (isTablet) return 2;
    if (isDesktop) return 3;
    if (isMiddleDesktop) return 4;
    if (isHugeDesktop) return 5;
  }

  if (method === 'display') {
    if (isMobile) return '90%';
    if (isTablet) return '95%';
    if (isDesktop) return '1024px';
    if (isMiddleDesktop) return '1420px';
    if (isHugeDesktop) return '1880px';
  }

  if (method === 'template') {
    if (isMobile) return '100%';
    if (isTablet) return '356px';
    if (isDesktop) return '500px';
    if (isMiddleDesktop) return '660px';
    if (isHugeDesktop) return '930px';
  }
  return 0;
}
