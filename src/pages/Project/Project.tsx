import { useLocation } from 'react-router-dom';

export default function Project() {
  const { state } = useLocation();

  return <>{state.content}</>;
}
