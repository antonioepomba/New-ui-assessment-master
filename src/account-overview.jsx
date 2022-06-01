import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Cards } from './card';
import './account-overview.css';
import Header from './header';

export const AccountOverview = () => {
  
  return (
    <div className="container AccountOverview ml-5 mt-3 mr-10">
      <h6 className='mx-auto text-muted'>YOUR FEEFO SUPPORT CONTACT</h6>
      <Header email={'support@feefo.com'} 
              telephone={'02033624208'}
              title= {'Account Overview'}/>
      <div className="container w-80 p-2 mt-3">
        <Cards
          title_Sale={'0 upload'}
          title_Upload={'ULOAD SUCCESS'}
          title_Saved={'LINES SAVED'}
        />
      </div>
    </div>
  )
}

export default AccountOverview;