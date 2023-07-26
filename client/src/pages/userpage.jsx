import "./style.css";
import Work from "./work";
import Footer from "./footer";
import { useEffect, useState } from "react";
function UserPage() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/user").then((res) =>
      res.json().then((data) => setList(data))
    );
  }, []);
  return (
    <div className="user">
      <div className="head">
        <h1>Todays Work</h1>
      </div>
      {list.length === 0 ? (
        <h2>No Work...</h2>
      ) : (
        <div className="body">
          <Work list={list} />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default UserPage;
