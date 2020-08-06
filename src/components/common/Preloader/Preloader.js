import React from 'react';
import spinner from '../../../assets/images/Spinner.svg'

let Preloader = (props) => {
   return <img src={spinner} style={ {width: '20vw'} }/>
}

export default Preloader