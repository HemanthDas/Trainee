import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Work(props) {
  const { list } = props;
  const titles = Object.values(list);

  return (
    <div className="user">
      {titles.map((title, index) => (
        <Link key={index} to={`/dynamic/${index}`} className="wordcards">
          {title.title}
        </Link>
      ))}
    </div>
  );
}

Work.propTypes = {
  list: PropTypes.object.isRequired,
};

export default Work;
