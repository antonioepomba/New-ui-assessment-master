import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './account-overview.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export const Header = (props) => {
    const {
        email,
        title,
        telephone } = props

    return (
        <div className="row mt-2 w-57 p-0">
            <div className="col-sm-1 col-md-5 pt-0 mt-1">
                <h5 className='mx-auto'>{title}</h5>
            </div>
            <div className="card ml- p-0" style={{ width: '5%', background: '#c9a908' }}>
                <div className="card-body  mt-0">
                    <h5 className="card-title">S</h5>
                </div>
            </div>
            <div className="col-2  pt-lg-0">
                <div className='col mt-0 flex'>
                    <strong class="d-flex justify-content-start p-0">Support</strong>
                    <p className='justify-content-right col-0'>  <FontAwesomeIcon color='black' icon={faEnvelope} />  {email}</p>
                </div>
            </div>
            <div className="col-2 pt-lg-0">
                <div className='col-sm-1 mt-0 flex pt-4'>
                    <p>{telephone}</p>
                </div>
            </div>
        </div>
    )
}
export default Header