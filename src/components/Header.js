import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid , email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    // Unsubscribe when component unmounts
    return () => unsubcribe();
  }, [])

  const handleSignOut = () => {
    signOut(auth).then(() => {}).catch((error) => {
      navigate('/error');
    });
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between">
      <img
        className="w-44"
        src={LOGO}
        alt="LOGO"
      />
      {user && <div className="flex p-4">
        <img
          className="w-12 h-12"
          src={user?.photoURL}
          alt="usericon"
        />
        <button onClick={handleSignOut} className="font-bold text-white">(Sign Out)</button>
      </div>}
    </div>
  );
};

export default Header;
