"use client";
import styles from "../../styles/form.module.css";
import UserContext from "../context/UserProvider";
import { useContext } from "react";
import { useRouter } from "next/navigation";

const ButtonOut = () => {
  const { setIsLogged } = useContext(UserContext);
  const router = useRouter();

  return (
    <>
      <button
        className={styles.submitButton}
        onClick={() => {
          setIsLogged(false);
          router.push("/");
        }}
      >
        Se déconnecter
      </button>
    </>
  );
};

export default ButtonOut;
