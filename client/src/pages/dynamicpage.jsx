import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "./loader";
function DynamicPage() {
  const { id } = useParams();
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/user")
      .then((res) => res.json())
      .then((data) => setList(data));
  }, []);

  if (!list.length || !list[id]) {
    return <Loader />;
  }

  const title = list[id]?.title;
  document.title = title;

  return (
    <div>
      <h2>{title}</h2>
      <p>{list[id]?.text}</p>
    </div>
  );
}

export default DynamicPage;
