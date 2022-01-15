import useSWR from "swr";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";

const Chat = () => {
  const [name, setName] = useState("");
  const [money, setMoney] = useState(0);

  const { data } = useSWR(
    "http://localhost:9000/auction-color",
    (url: string) => axios(url).then((res) => res.data),
    { refreshInterval: 1000 }
  );

  const fetchAPI = async () => {
    await fetch("http://localhost:9000/auction-color", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    });
  };

  const buttonHandler = () => {
    name;
    fetchAPI();
    // getAPI()
    // console.log(user);
    
  };


  
  if (!data) {
      return (
        <div>
          <Link href="/" passHref>
            <a>isLoading....</a>
          </Link>
        </div>
      );
  }
  return (
    <div>
      <h1>オークション</h1>
      <p>{1000 * data.length}円</p>
      <p>名前を記述してください</p>
      <Link href="/" passHref>
        <a>戻る</a>
      </Link>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={buttonHandler}>送信</button>

      {data.map((user) => (
        <li key={user.id}>
          id:{user.id} name:{user.name}
        </li>
      ))}
    </div>
  );
};

export default Chat;
