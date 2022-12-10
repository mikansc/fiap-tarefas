import { AddButton, NavBar, NoContent } from "components";

import { NextPage } from "next";
import styles from "./Home.module.scss";

export const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <div className={styles.content}>
        <NoContent />
      </div>
      <AddButton />
    </>
  );
};
