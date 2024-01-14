/**
 * The external imports
 */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';

export default function QuiJeSuisButton({ path }) {
  return (
    <div className="btnInfo">
      <Link to={path} className="buttonQuiJeSuis">
        <span className="textButton">À propos de alix</span>
        <FontAwesomeIcon className="rotate" icon={faArrowRight} />
      </Link>
    </div>
  );
}

QuiJeSuisButton.propTypes = {
  path: PropTypes.string.isRequired,
};
