"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import loginUser from "../api/login/route";
import styles from "../../styles/form.module.css";
import { toast } from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function onSubmitForm() {
    const response = loginUser(data);
    console.log(response);
  }

  /* if (!response.email) {
        toast.error(callback.error);
      }
      if (callback?.ok) {
        toast.success("vous êtes connecté");
      }
    });
    router.push("/dashboard");*/

  return (
    <div className={styles.container_formul}>
      <h1>S&apos;enregistrer</h1>
      {/*formulaire*/}
      <form
        className={styles.main}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitForm();
        }}
      >
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
            type="submit"
            name="Se connecter"
            className={styles.submitButton}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
