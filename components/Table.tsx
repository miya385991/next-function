import Link from "next/link";
import PagerList from "./PagerList";

const Table = ({ page, users, totalCount }) => {
  // ////////////////////////////pagerここから///////////////////////////////////

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
  const pageList = Array.from(Array(maxPage).keys()).map((i) => i + 1);
  // ////////////////////////////pagerここまで///////////////////////////////////
  return (
    <div>
      <table>
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

      <PagerList page={{ nextPage, backPage }} pageList={pageList} />
    </div>
  );
};

export default Table;
