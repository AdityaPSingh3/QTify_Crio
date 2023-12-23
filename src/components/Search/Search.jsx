import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/Searchi.svg";

function Search(props) {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={styles.wrapper} onSubmit={onSubmit}>
      <input
        className={styles.search}
        required
        placeholder={props.placeholder}
      />
      <button className={styles.SearchButton} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
}

export default Search;
