import Work from "./work";
import { useEffect, useState } from "react";
import Loader from "./loader";
function AdminPage() {
  const [item, setItem] = useState({
    title: "",
    text: "",
  });
  const [list, setList] = useState([]);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    setIsLoad(true);
    fetch("http://localhost:4000/admin")
      .then((res) => res.json())
      .then((data) => {
        setList(data);
        setIsLoad(false);
      });
  }, []);

  const addItemToList = () => {
    fetch("http://localhost:4000/admin", {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        setList([...list, data]);
      });
    setItem({
      title: "",
      text: "",
    });
  };

  return (
    <div className="admin">
      <div className="headed">
        <input
          type="text"
          value={item.title}
          onChange={(e) => setItem({ ...item, title: e.target.value })}
          required
          placeholder="Enter Title"
          className="box"
        />
        <textarea
          value={item.text}
          onChange={(e) => setItem({ ...item, text: e.target.value })}
          cols={100}
          rows={15}
          className="box"
        />
        <button onClick={addItemToList}>Send</button>
      </div>
      <div className="body">{isLoad ? <Loader /> : <Work list={list} />}</div>
    </div>
  );
}

export default AdminPage;
