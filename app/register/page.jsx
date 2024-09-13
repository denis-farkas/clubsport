"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "../../styles/form.module.css";
import { toast } from "react-hot-toast";
import UserContext from "../context/UserProvider";
import { useContext } from "react";

const RegisterPage = () => {
  const router = useRouter();
  const { setUserData } = useContext(UserContext);
  const [data, setData] = useState({
    lastname: "",
    firstname: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });

  const registerUser = async () => {
    await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    })
      .then(() => toast.success("Membre enregistré"))
      .then(() => setUserData(data))
      .catch(() => toast.error("Erreur d'enregistrement"));
    router.push("/login");
  };
  return (
    <div className={styles.container_formul}>
      <h1>S&apos;enregistrer</h1>
      {/*formulaire*/}
      <form
        className={styles.main}
        onSubmit={(e) => {
          e.preventDefault();
          registerUser();
        }}
      >
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Votre Prénom"
            className={styles.inputField}
            onChange={(e) => {
              setData({ ...data, firstname: e.currentTarget.value });
            }}
            required="required"
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Votre Nom"
            className={styles.inputField}
            onChange={(e) => {
              setData({ ...data, lastname: e.currentTarget.value });
            }}
            required="required"
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="email"
            placeholder="Votre Email"
            className={styles.inputField}
            onChange={(e) => {
              setData({ ...data, email: e.currentTarget.value });
            }}
            required="required"
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Votre Mot de passe"
            className={styles.inputField}
            onChange={(e) => {
              setData({ ...data, password: e.currentTarget.value });
            }}
            required="required"
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Votre Addresse"
            className={styles.inputField}
            onChange={(e) => {
              setData({ ...data, address: e.currentTarget.value });
            }}
            required="required"
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Votre téléphone"
            className={styles.inputField}
            onChange={(e) => {
              setData({ ...data, phone: e.currentTarget.value });
            }}
            required="required"
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="submit"
            name="Enregister"
            className={styles.submitButton}
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
