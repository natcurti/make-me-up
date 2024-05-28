import { useSignOut } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "src/firebase/firebase-config";

import { setUserInfo } from "src/store/reducers/user";
import { useAppDispatch } from "src/types/hooks";

const useLogout = () => {
  const [signOut] = useSignOut(auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await signOut();
      localStorage.removeItem("user-make-me-up");
      dispatch(setUserInfo({}));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return { logout };
};

export default useLogout;
