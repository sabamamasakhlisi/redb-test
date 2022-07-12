import React from "react";
import styles from "./content.module.scss";
import Image from "../../assets/pictures/Image.jpg";

const ContentLayout = () => {
  return (
    <article className={styles["wrapper"]}>
      <section className={styles["header"]}>
        <h1>Quam Tristique Condimentum</h1>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus.
          <span className={styles["redline-text"]}>
            {" "}
            Curabitur blandit
          </span>{" "}
          tempus porttitor. Integer posuere erat a ante venenatis dapibus
          posuere velit aliquet. Vestibulum id ligula porta felis euismod
          semper.
        </p>
      </section>
      <section className={styles["content"]}>
        <div className={styles["combiner"]}>
           <div className={styles['text-part']}>
          <h2>Fringilla Euismod Adipiscing Ipsum</h2>
          <p>
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Maecenas faucibus mollis interdum. Aenean
            lacinia bibendum nulla sed.
          </p>
          </div>
          <img src={Image} alt="fringilla" />
        </div>
        <dl className={styles['list']}>
          <dt>Tellus Ullamcorper Inceptos</dt>
          <dt>Magna Condimentum</dt>
          <dd>Mattis Tristique</dd>
          <dd>Pharetra Pellentesque Dapibus</dd>
          <dt>Aenean Inceptos</dt>
          <dt>Parturient Bibendum</dt>
        </dl>
      </section>
    </article>
  );
};

export default ContentLayout;
