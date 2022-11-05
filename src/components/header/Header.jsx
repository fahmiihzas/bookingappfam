import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='headerContainer'>
      <div className='headerList'>
            <div className='headerListItem active'>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>
            <div className='headerListItem'>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flight</span>
            </div>
            <div className='headerListItem'>
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
            </div>
            <div className='headerListItem'>
            <FontAwesomeIcon icon={faBed} />
            <span>Attraction</span>
            </div>
            <div className='headerListItem'>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
            </div>
        </div>
        <h1 className='headerTitle'>A lifetime discount? It's Genius.</h1>
        <p className='headerDesc'>Get rewarded for your travels - unlock instant savings of 10% or more with a free Fambooking account
        </p>   
      </div>
    </div>
  )
}

export default Header