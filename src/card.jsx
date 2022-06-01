import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faExclamationCircle, faStore } from '@fortawesome/free-solid-svg-icons';
import { Card, ListGroup } from 'react-bootstrap';
import './account-overview.css';
export const Cards = (props) => {
    const {
        title_Sale,
        title_Upload,
        title_Saved
    } = props

    return (
        <div class="card w-51 mr-5 p-auto ml-5" >
            <div class="card-body">

                <div class="row p-0">
                    <div class="d-lg-flex col-sm-12 justify-content-start p-1">
                        <strong class="card-title"> <FontAwesomeIcon  className='icon-style' color='blue' icon={faUpload} /> Sales</strong>
                        <br/>
                    </div>
                    <div className='d-lg-flex  p-0 left-content-start'>   <p className=''>You had<strong> {title_Sale}</strong> and <strong> 0 </strong> line added</p></div>
                   
                    <div class="d-lg-flex  col-sm-12 align-items-row  justify-content-end t-15">
                        <h5 class="card-title text-right"><FontAwesomeIcon className='icon-style' color='grey' icon={faExclamationCircle}/></h5>
                        <p></p>
                    </div>
                </div>
            </div>
            <ul class="list-group list-group ">
            </ul>
            <div class="card-body">
                <div class="container-sm">
                    <div class="d-flex">
                        <div class=" col-sm-5">
                            <h4 className='text-success'>0 %</h4>
                            <p className=''>{title_Upload}</p>
                        </div>
                        <div class="col-sm-5  border-start boder-grey">
                            <h4 className='text-success'>0 %</h4>
                            <p> {title_Saved}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Cards