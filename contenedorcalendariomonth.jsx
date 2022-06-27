import Calendario2 from "./calendario2"
import Calendario3 from "./calendario3"
import Perfil from "../perfil/perfil";
import { useState } from "react";
import Daterange from "../datepicker/datepicker";


const Contenedorcalendariomonth = () => {
    const calendarios = ["Month", "Week"]
    const [myCalendario, setMyCalendario] = useState('')


    return (
        <>
            <div className="resultadoperfil d-flex ">
                <div className="contenedorpefil">
                    <Perfil />
                </div>



                <div className="list-calendar ">
                    <div className="topcalendario d-flex px-5 pt-3">

                        <h1 className="ps-5  ">Junio 2021</h1>

                        <div>
                            <Daterange />
                        </div>
                    </div>


                    <div className=" d-flex justify-content-end" role="group" aria-label="Basic example" >
                        <Calendario2 />
                    </div>
                </div>



            </div>
        </>
    )
}


const Month = () => {
    return
    <Calendario2 />
}


const Week = () => {
    return <Calendario3 />
}


export default Contenedorcalendariomonth;