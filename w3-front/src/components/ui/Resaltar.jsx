import PropTypes from "prop-types";

const Resaltar = ({ cadena, valor }) => {
  var pos = cadena.toUpperCase().indexOf(valor.toUpperCase());

  var pre = cadena.substring(0, pos);
  var val = cadena.substring(pos, pos + valor.length);
  var end = cadena.substring(pos + valor.length);

  return (
    <div>
      {pre}
      <span className="font-bold" style={{ color: "#1dd38f" }}>
        {val}
      </span>
      {end}
    </div>
  );
};

Resaltar.propTypes = {
  cadena: PropTypes.string.isRequired,
  valor: PropTypes.string.isRequired,
};

export default Resaltar;
