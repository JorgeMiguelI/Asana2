import React, { Component } from 'react'
import TareasProximas from './TareasProximas'
import TareasRecientes from './TareasRecientes'

export default class MisTareas extends Component {
    render() {
        return (
            <div className="container"  style={{marginTop:"1em"}}>
                <div className="row">
                     <div className="col-sm-1"></div>
                    <div className="col-sm-8"><button type="button" className="btn btn-primary"><i className="fas fa-plus"></i>Agregar Tarea</button> </div>

                </div>
                <div className="row">
                    <div className="col-md-10">
                        <div className="accordion" id="accordionExample" style={{ width: "80%" }}>
                            <TareasRecientes/>
                            <TareasProximas/>

                        </div>
                    </div>
                    <div className="col-sm-2"></div>
                </div>

            </div>
        )
    }
}
