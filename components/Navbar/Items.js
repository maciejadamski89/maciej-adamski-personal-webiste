import Navlink from "./Navlink";
import axios from "axios";
import useSWR from "swr";
import Button from "../Button";

export default function Items() {
  const address = `/api/menu`;
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);

  if (error) <p>Loading failed...</p>;
  if (!data) <h1>Loading...</h1>;

  return (
    <>
      <div>
        <ul className="items-center hidden space-x-6 lg:flex">
          {data && data.menu.map((item) => <Navlink key={item} name={item} />)}
        </ul>
      </div>
    </>
  );
}
