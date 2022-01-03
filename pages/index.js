import styles from "../styles/Home.module.css";
import Link from "next/link";
import {API_URL} from "../config";




export default function Home({users, totalCount,page}) {
  // 出力個数
  const PER_PAGE = 10;
  // ページ数
  const maxPage = Math.ceil(totalCount / PER_PAGE);
  // 最小ペース
  const minPage = 1;

  const nextPage = page == maxPage ? maxPage : page + 1;
  const backPage = page == minPage ? minPage : page - 1;
  // 何個めから表示か
  const userList = users.slice(PER_PAGE * (page - 1), PER_PAGE * page);
  const pageList = Array.from(Array(maxPage).keys()).map(i => i + 1);


  return (
    <div className={styles.container}>

      <table border="1">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>body</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <Link href={`/users/${user.id}`} key={user.id} passHref>
              <tr>
                <td>{user.id}</td>
                <td>
                  <a>{user.title}</a>
                </td>
                <td>{user.body}</td>
              </tr>
            </Link>
          ))}
        </tbody>
      </table>

      <div className={styles.pagerItem}>
        <Link href={`?page=${backPage}`} passHref>
          <a>前へ</a>
      </Link>
      <ul>

      { pageList.map(i =>
        <Link href={ `?page=${i}` } passHref key={ i }>
          <a> { i } </a>
        </Link>
      )}
      </ul>
        <Link href={`?page=${nextPage}`} passHref>
          <a>次へ</a>
        </Link>
      </div>

    </div>
  );
}


export async function getServerSideProps({ query:{page = 1}}) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL);
  const users = await res.json();
  const totalCount = users.length;
  page = Number(page)



  return {
    props: {
      users,
      totalCount,
      page,
    },
  };
}