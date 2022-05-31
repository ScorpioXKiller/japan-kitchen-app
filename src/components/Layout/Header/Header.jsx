import styles from "./Header.module.css";
import sushiImage from "../../../assets/sushi.jpg";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Japanese Kitchen</h1>
        <HeaderCartButton onClick={props.onCartOpen} />
      </header>
      <div className={styles["main-image"]}>
        <img src={sushiImage} alt="Dishes of Japan" />
      </div>
    </>
  );
};

export default Header;
