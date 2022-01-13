import { useRouter } from "next/router";
import Link from "next/link";


const UserSlug = ({ user }) => {

  return (
    <div>
      <table >
        <tbody>
          <tr>
            <th>id:</th>
            <td>{user.id}</td>
          </tr>
          <tr>
            <th>title:</th>
            <td>{user.title}</td>
          </tr>
          <tr>
            <th>body:</th>
            <td>{user.body}</td>
          </tr>
        </tbody>
      </table>
      <Link href="/">
        <a>トップに戻る</a>
      </Link>
    </div>
  );
};

export default UserSlug;


export async function getServerSideProps(query) {
  const id = query.params.id;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`);
  const user = await res.json();


  return {
    props: {
      user,
      },
  };
}
