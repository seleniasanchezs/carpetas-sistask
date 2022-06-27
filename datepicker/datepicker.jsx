import "rsuite/dist/rsuite.min.css";
import Contenedorcalendario from "../calendarios/contenedorcalendariomonth";
import { DateRangePicker } from "rsuite";



import React from "react";

const Daterange = ()=> {

    return (
      <>

<div className="cajaDate px-3 py-5">
    <DateRangePicker />
</div>
    
     
      </>
    )
  }
  
  export default Daterange;