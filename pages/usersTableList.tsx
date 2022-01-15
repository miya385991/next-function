import Table from "components/Table";
import Link from "next/link";


const TableList = ({page,users,totalCount}) => {
    return (
      <div>
        <Table page={page} users={users} totalCount={totalCount} />
        <Link href="/" passHref>
          <a>戻る</a>
        </Link>
      </div>
    );
}

export default TableList


export async function getServerSideProps({ query: { page = 1 } }) {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL);
  const users = await res.json();
  const totalCount = users.length;
  page = Number(page);

  return {
    props: {
      users,
      totalCount,
      page,
    },
  };
}