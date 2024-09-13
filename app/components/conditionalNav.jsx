"use client";

import styles from "../../styles/header.module.css";
import ButtonOut from "../components/buttonout";
import Link from "next/link";
import UserContext from "../context/UserProvider";
import { useContext } from "react";

const ConditionalNav = () => {
  const { userData, isLogged } = useContext(UserContext);

  return (
    <div className={`contenedor ${styles.barre}`}>
      <Link href={"/"} className="{styles.navigation">
        Accueil
      </Link>
      <Link href={"/club"} className="{styles.navigation">
        Notre Club
      </Link>
      {isLogged ? (
        <div>
          <Link href={"/profil"} className="{styles.navigation">
            {userData.firstname}
          </Link>
          <ButtonOut />
        </div>
      ) : (
        <div>
          <Link href={"/register"}>Inscription</Link>
          <Link href={"/login"}>Connexion</Link>
        </div>
      )}
    </div>
  );
};

export default ConditionalNav;
