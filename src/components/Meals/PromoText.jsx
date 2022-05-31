import styles from "./PromoText.module.css"

const PromoText = () => {
  return (
    <section className={styles["promo-text"]}>
      <h2>Online Sushi Restaurant "Japanese Kitchen"</h2>
      <p>
        Japanese Cuisine is an online sushi restaurant with favorite sushi and
        sashimi, rolls and other dishes of national Japanese cuisine are made by
        the professional chefs' team.
      </p>
      <p>
        Fast work and high-quality products, as well as the most real components
        give a good taste to dishes, give pleasure from the meal.
      </p>
    </section>
  );
};

export default PromoText;
