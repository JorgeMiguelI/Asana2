import React, { Component } from 'react'
import Barra from './bar';
import Topbar from './topbar';

export default class NuevoEquipo extends Component {

    miembros

    constructor() {
        super();

        this.miembros=new Array();
    }

    addMember=(id)=>{

        if(this.miembros.indexOf(id)==-1){
            this.miembros.push(id);
            return false;
        }else{
            alert("Miembro ya en la lista");
            return true;
        }






        return true;
    }

    removeMember=(id)=>{
        var i;
        for(i=0;i<this.miembros.length;i++){
            if(id==this.miembros[i]){
                this.miembros.splice(i,1);
            }
        }


    }


    createMember=(id,nombre)=>{

    }

    iniciarComponente = function (ev) {
        console.log("Inciar Componentes");
        var respuesta = [ 
            {
                _id:4564565,
                Nombre:"Kari",
                Correo: "amorcito@correo.com"
            },
            {
                _id:456433565,
                Nombre:"Pau",
                Correo: "cuñis@correo.com"
            }

        ];
        respuesta.map((item)=>{
            console.log("map");
            //seleccionados
            var bodyS=document.getElementById("bodyS");
            var spanT;
            var trS;
            var tdN;
            var tdB;
            var buttonE;
            

            //Todos
            var tbodyME=document.getElementById("bodyT");
            var trE=document.createElement("tr");
            var tdNombre=document.createElement("td");
            var tdCorreo=document.createElement("td");
            var tdButton=document.createElement("td");
            var button=document.createElement("button");

            button.setAttribute("value",JSON.stringify(item));
            button.className="btn-primary btn-sm";
            button.addEventListener("click",(e)=>{
                var caller = e.target;
                var data=JSON.parse(caller.value);
                if(!this.addMember(data._id)){
                    //creamos elemento

                    trS=document.createElement("tr");

                    //Nombre
                    tdN=document.createElement("td");
                    spanT=document.createElement("span");
                    spanT.className="form-control";
                    spanT=document.createTextNode(data.Nombre);
                    tdN.appendChild(spanT);
                    trS.appendChild(tdN);

                    //boton Eliminar
                    buttonE=document.createElement("button");
                    buttonE.className="btn btn-danger";
                    buttonE.setAttribute("value",JSON.stringify(data));
                    buttonE.appendChild(document.createTextNode("Eliminar"));
                    buttonE.addEventListener("click",(ev)=>{
                        var caller1=ev.target;
                        var data1=caller1.value;
                        this.removeMember(data1._id);
                        var padre=caller1.parentElement;
                        var trP=padre.parentElement;
                        trP.remove();

                    });
                    tdB=document.createElement("td");
                    tdB.appendChild(buttonE);
                    trS.appendChild(tdB);

                    //tr
                    bodyS.appendChild(trS);



                }

            });

            button.appendChild(document.createTextNode("Agregar"));
            tdButton.appendChild(button);
            tdNombre.appendChild(document.createTextNode(item.Nombre));
            tdCorreo.appendChild(document.createTextNode(item.Correo));
            trE.appendChild(tdNombre);
            trE.appendChild(tdCorreo);
            trE.appendChild(tdButton);
            tbodyME.appendChild(trE);

        });





    }

    ajax1 = () => {

        //traerá los miembros de la empresa
        console.clear();

        var formData = new FormData();
        formData.append("idE", localStorage.getItem("EmpresaID"));
        formData.append("Operation", "1");

        $.ajax({
            url: 'equipo',
            type: 'POST',
            data: formData,
            async: false,
            cache: false,
            contentType: false,
            processData: false,
            success: this.iniciarComponente(respuesta)
        });





    }
    ajax2 = () => {

    }







    render() {
        return (
            <div className="sb-nav-fixed">

                <Topbar />

                <div id="layoutSidenav">


                    <Barra estado={Topbar} />



                    <div id="layoutSidenav_content">
                        <div className="card shadow-lg border-0 rounded-lg mt-5" style={{ margin: "1em" }}>
                            <div className="card-header"><h3 className="text-center font-weight-light my-4">Crear Equipo</h3></div>
                            <div className="card-body">
                                <form>
                                    <div className="form-row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="small mb-1" htmlFor="inputNombre">Nombre</label>
                                                <input className="form-control py-4" id="inputNombre" type="text" placeholder="Nombre del equipo" name="nombre" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="small mb-1" htmlFor="inputDescripcion">Descripción</label>
                                                <textarea className="form-control py-4" id="inputDescripcion" placeholder="Describa el equipo" name="descripcion"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <input type="hidden" name="estado" value="A" />
                                </form>
                                    <div className="form-row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label className="small mb-1" >Miembros</label>
                                                <div className="table-wrapper-scroll-y my-custom-scrollbar">

                                                    <table className="table table-bordered table-striped mb-0">
                                                        <thead>
                                                            <tr>
                                                                
                                                                <th scope="col">Nombre</th>
                                                                <th scope="col">Correo</th>
                                                                <th scope="col">Seleccionar</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="bodyT">
                                                            <tr>
                                                               
                                                                <td>Mark</td>
                                                                <td>Otto</td>
                                                                <td><button className="btn-primary btn-sm">Agregar</button> </td>
                                                                
                                                            </tr>
                                                            <tr>
                                                                
                                                                <td>Jacob</td>
                                                                <td>Thornton</td>
                                                                <td><button className="btn-primary btn-sm">Agregar</button> </td>
                                                            </tr>
                                                            <tr>
                                                                
                                                                <td>Larry</td>
                                                                <td>the Bird</td>
                                                                <td><button className="btn-primary btn-sm">Agregar</button> </td>
                                                            </tr>
                                                            <tr>
                                                            
                                                                <td>Mark</td>
                                                                <td>Otto</td>
                                                                <td><button className="btn-primary btn-sm">Agregar</button> </td>
                                                            </tr>
                                                            <tr>
                                                                
                                                                <td>Jacob</td>
                                                                <td>Thornton</td>
                                                                <td><button className="btn-primary btn-sm">Agregar</button> </td>
                                                            </tr>
                                                            <tr>
                                                                
                                                                <td>Larry</td>
                                                                <td>the Bird</td>
                                                                <td><button className="btn-primary btn-sm">Agregar</button> </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>

                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <label className="small mb-1" >Miembros</label>
                                            <div className="table-wrapper-scroll-y my-custom-scrollbar">

                                                    <table className="table table-bordered table-striped mb-0">
                                                        <tbody id="bodyS">
                                                            <tr>
                                                               
                                                                <td><span className="form-control">Edgar Ejemplo</span></td>
                                                                
                                                                <td><button className="btn btn-danger">Eliminar</button> </td>
                                                                
                                                            </tr>
                                                            
                                                        </tbody>
                                                    </table>

                                                </div>
















                                        </div>


                                    </div>

                                    
                                    
                                
                                <div className="form-group mt-4 mb-0"><button className="btn btn-primary btn-block" onClick={()=>{this.iniciarComponente()}}>Crear equipo</button></div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
