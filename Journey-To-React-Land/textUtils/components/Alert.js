import React from 'react';

export default function Alerts(props) {
  return ( //shot circuting as we would provide value once any operation gets performed
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{props.alert.type} : </strong> {props.alert.msg}
</div>
  )
}

