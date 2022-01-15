import Link from "next/link";
import s from "../styles/index.module.css";

export default function Home() {
  return (
    <div>
      <ul className={s.list}>
        <li>
          <Link href="/usersTableList" passHref>
            <a>TableList</a>
          </Link>
        </li>
        <li>
          <Link href="/chart" passHref>
            <a>chart</a>
          </Link>
        </li>
        <li>
          <Link href="/chat" passHref>
            <a>chat</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
