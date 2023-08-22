import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const limit = 10;

  const [page, setPage] = useState<number>(1);
  const [media, setMedia] = useState<string[]>([]);
  const [fetching, setFetching] = useState<boolean>(false);
  const [totalPageCount, setTotalPageCount] = useState<number>(0);
  const [totalMediaCount, setTotalMediaCount] = useState<number>(0);

  useEffect(() => {
    async () => {
      //@ts-ignore
      const { data, totalCount } = await axios.get(
        "http://localhost:5000/getMedia",
        {
          params: {
            _limit: limit,
            _page: page,
          },
        }
      );

      setPage((prev) => prev + 1);
      setFetching(false);

      setTotalPageCount(Math.ceil(totalCount / limit));

      //@ts-ignore
      setMedia((prev) => [...prev, data]);
    };
  }, [fetching]);

  return <div>{media}</div>;
}
export default Home;
