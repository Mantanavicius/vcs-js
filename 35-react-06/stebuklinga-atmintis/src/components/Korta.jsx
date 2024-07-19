import './Korta.css'
import PropTypes from "prop-types";


export default function Korta({korta, handlePasirinkimas, flipped, disabled}){
    const handleClick = () => {
        if(!disabled){
            handlePasirinkimas(korta)
        }
    }
    
    return (
      <div className="korta">
        <div className={flipped ? "flipped" : ""}>
          <div>
            <img
              src={korta.src}
              alt="kortos priekinė pusė"
              className='priekis'
            />
            <img
              src="/img/cover.webp"
              alt="kortos nugarinė pusė"
              onClick={handleClick}
              className='nugara'
            />
          </div>
        </div>
      </div>
    );
}

    Korta.propTypes = {
      korta: PropTypes.shape({
        src: PropTypes.string.isRequired,
        matched: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      }).isRequired,
      handlePasirinkimas: PropTypes.func.isRequired,
      flipped: PropTypes.bool.isRequired,
      disabled: PropTypes.bool.isRequired,
    };