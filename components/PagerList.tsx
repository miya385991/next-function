import Link from "next/link";
import styles from "../styles/Home.module.css";

const PagerList = ({ page, pageList }) => {
    return (
      <div className={styles.pagerItem}>
        <Link href={`?page=${page.backPage}`} passHref>
          <a>前へ</a>
        </Link>
        <ul>
          {pageList.map((i) => (
            <Link href={`?page=${i}`} passHref key={i}>
              <a> {i} </a>
            </Link>
          ))}
        </ul>
        <Link href={`?page=${page.nextPage}`} passHref>
          <a>次へ</a>
        </Link>
      </div>
    );
}

export default PagerList
