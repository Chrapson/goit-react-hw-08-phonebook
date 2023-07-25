import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  // const isLoggedIn = false;
  // const isRefreshing = false;
  // const user = 'Chrapi';
  return { isLoggedIn, isRefreshing, user };
};
