import Image from "next/image";
import styles from "../../styles/header.module.css";
import ConditionalNav from "../components/conditionalNav";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <div className={styles.imgcontainer}>
          <Image src="/img/logo.png" width={235} height={36} alt="logo" />
        </div>
        <ConditionalNav />
      </nav>
    </header>
  );
};

export default Header;
