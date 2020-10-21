import React, { Component } from 'react'
import Barra from './bar';
import Topbar from './topbar';

export default class NuevoProyecto extends Component {

    render() {
        return (
            <div className="sb-nav-fixed">

                <Topbar />

                <div id="layoutSidenav">


                    <Barra />



                    <div id="layoutSidenav_content">
                        <div className="card shadow-lg border-0 rounded-lg mt-5" style={{margin:"2em"}}>
                            <div className="card-header"><h3 className="text-center font-weight-light my-4">Crear proyecto</h3></div>
                            <div className="card-body">
                                <form>
                                    <div className="form-row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="small mb-1" htmlFor="inputNombre">Nombre</label>
                                                <input className="form-control py-4" id="inputNombre" type="text" placeholder="Nombre del proyecto" name="nombre" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="small mb-1" htmlFor="inputDescripcion">Descripción</label>
                                                <textarea className="form-control py-4" id="inputDescripcion" placeholder="Describa el proyecto" name="descripcion"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="small mb-1" htmlFor="inputDate">Fecha de Entrega</label>
                                                <input className="form-control py-4" id="inputDate" type="date" name="fecha" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="small mb-1" htmlFor="inputColor">Color</label>
                                                <input className="form-control py-4" id="inputColor" type="color" name="color" />
                                            </div>
                                        </div>


                                    </div>
                                    <div className="form-row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="small mb-1" htmlFor="slectE">Equipo</label>
                                                <select name="liderP" id="slectE" className="form-control">
                                                    <option value="id" >Equipo</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="small mb-1" htmlFor="slectL">Lider de proyecto</label>
                                                <select name="liderP" id="slectL" className="form-control">
                                                    <option value="id" >Nombre</option>
                                                </select>
                                            </div>
                                        </div>

                                    </div>


                                    <div className="form-group mt-4 mb-0"><button className="btn btn-primary btn-block">Crear Proyecto</button></div>
                                </form>
                            </div>

                        </div>




                    </div>

                </div>
            </div>
        )
    }
}
