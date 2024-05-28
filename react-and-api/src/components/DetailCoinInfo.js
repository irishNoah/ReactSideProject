import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function DetailCoinInfo({ rank, id, name, symbol, first_data_at }) {
  return (
    <div>
      <h2>
        <Link to={`/DetailCoin/${id}`}>{id}</Link>
      </h2>
      <ul>
        <li>rank : {rank}</li>
        <li>name : {name}</li>
        <li>symbol : {symbol}</li>
        <li>first_data_at : {first_data_at}</li>
      </ul>
    </div>
  );
}

DetailCoinInfo.propTypes = {
  rank: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  first_data_at: PropTypes.string.isRequired,
};

export default DetailCoinInfo;
