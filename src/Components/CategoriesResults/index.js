import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function CategoriesContent(){

    return <div className="categories-result">
            <div className="header-categories-result justify-content-end"><h5>Leyenda</h5></div>
                <div className="row categories">
                    <div className="col-9">
                        <section>
                            <div className="form-check" style={{backgroundColor: "yellow"}}>
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label" for="exampleCheck1">Motivo de Consulta</label>
                            </div>
                            <div className="form-check" style={{backgroundColor: "aqua"}}>
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label" for="exampleCheck1">Sintomas</label>
                            </div>
                            <div className="form-check"  style={{backgroundColor: "#666666"}}>
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label" for="exampleCheck1">Exploracion</label>
                            </div>
                            <div className="form-check"  style={{backgroundColor: "#e600e6"}}>
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label" for="exampleCheck1">Filiacion</label>
                            </div>
                        </section>
                        <section>
                            <div className="form-check" style={{backgroundColor: "lightgrey"}}>
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label" for="exampleCheck1">Antecedentes</label>
                            </div>
                            <div className="form-check" style={{backgroundColor: "red"}}>
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label" for="exampleCheck1">Factores de Riesgo</label>
                            </div>
                            <div class="form-check" style={{backgroundColor: "#00ff00"}}>
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label" for="exampleCheck1">Signos</label>
                            </div>
                        </section>
                    </div>
                    <div className="col-md-3 categories-selection-buttons">
                        <button className="bt">SELECCIONAR TODO</button>
                        <button className="bt">BORRAR TODO</button>
                    </div>
                </div>
                <div className="row categories-export-buttons">
                    <div className="col-md-3 offset-md-9">
                        <button className="bt">Exportar CSV</button>
                        <Link to="/"><button className="bt">Cancelar</button></Link>
                    </div>
                </div>
    </div>
}