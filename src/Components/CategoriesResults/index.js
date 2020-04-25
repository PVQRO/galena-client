import React from 'react';
import './index.css';

export default function CategoriesContent(){

    return <div className="categories-result">
            <div className="header-categories-result justify-content-end"><h5>Leyenda</h5></div>
            <div className="container">
                <div className="row">
                    <div className="col-8 categories">
                        <section>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label" for="exampleCheck1">Motivo de Consulta</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label" for="exampleCheck1">Sintomas</label>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label" for="exampleCheck1">Exploracion</label>
                            </div>
                        </section>
                        <section>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label" for="exampleCheck1">Antecedentes</label>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" className="form-check-input" />
                                <label className="form-check-label" for="exampleCheck1">Signos</label>
                            </div>
                        </section>
                    </div>
                    <div className="col-4 categories-selection-buttons">
                        <button className="bt">SELECCIONAR TODO</button>
                        <button className="bt">BORRAR TODO</button>
                    </div>
                </div>
                <div className="row categories-export-buttons justify-content-end">
                    <div className="col-4">
                        <button className="bt">Exportar CSV</button>
                        <button className="bt">Cancelar</button>
                    </div>
                </div>
            </div>
    </div>
}