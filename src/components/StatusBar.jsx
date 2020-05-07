import React from 'react';
import { Alert } from 'reactstrap';

const StatusBar= props=> {
    // Alerts will be different depending on number of items left
    let alert;
    if(props.items.length <=0){
        alert = (
            <Alert color="success"> Success! All done! <span role='img'aria-label='img'> 👍🏼 </span>
            </Alert>
        )
    }
    if(props.items.length <=2){
        alert = (
            <Alert color="info"> Almost there! {props.items.length} left!
            </Alert>
        )
    }
    else{
        alert = (
            <Alert color="dark"> Keep going, {props.items.length} to go!
            </Alert>
        )
    }

   return(
          <div className="status">
            {alert}
          </div>
        )
    }

export default StatusBar