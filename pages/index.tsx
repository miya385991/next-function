import styles from "../styles/Home.module.css";
import s from "../styles/Index.module.css";
import Link from "next/link";
import useSWR, { Key, Fetcher, useSWRConfig } from "swr";
import axios from "axios";
import { useState } from "react";

import Table from "components/table";




export default function Home({ users, totalCount, page }) {


  // ////////////////////////////swrここから///////////////////////////////////
  const [name, setName] = useState("");
  const { mutate } = useSWRConfig();
  const [money,setMoney] = useState(0);

      const { data } = useSWR(
        "http://localhost:9000/auction-color",
        (url: string) => axios(url).then((res) => res.data),
        { refreshInterval: 1000, }
      );
  
    const fetchAPI = async () => {
      await fetch(
        "http://localhost:9000/auction-color",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
          }),
        }
      );
    };
  
  const buttonHandler = () => {
    name;
    fetchAPI();
  };

if (!data) {
  return <div>isLoading....</div>
}


  return (
    <div className={styles.container}>
      <h1>オークション</h1>
      <p>{1000 * data.length}円</p>
      <p>名前を記述してください</p>
      <input
        type="text"
        value={name}
        className={s.input}
        onChange={(e) => setName(e.target.value)}
      />
      <button className={s.button} onClick={buttonHandler}>
        送信
      </button>
      {data.map((user) => (
        <li key={user.id}>
          id:{user.id} name:{user.name}
        </li>
      ))}

      <Table
        page={page}
        users={users}
        totalCount={totalCount}
      />
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