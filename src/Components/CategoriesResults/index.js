import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './index.css';

export default function CategoriesContent(props){

    const [ categoriesClasses, setCategories ] = useState([{leyend:'Motivo de Consulta', class: 'motivo-consulta'}, 
                                                            {leyend: 'Sintomas', class:  'sintoma'},
                                                            {leyend: 'Exploracion' , class:  'exploracion'},
                                                            {leyend: 'Filiacion' , class:  'filiacion'},
                                                            {leyend:'Antecedentes' , class:  'antecedentes'},
                                                            {leyend:'Factores de Riesgo' , class:  'factores-riesgo'},
                                                            {leyend:'Signos' , class:  'signos'}]);

    const deleteAllMarkedCategories = function(){
        unOrcheckedAllCheckBoxes(false)

        for(var category of categoriesClasses){
            var clas = category.class;
            var elementsWithClass = document.getElementsByClassName(clas);

            for(var e of elementsWithClass){
                e.classList.add(clas + '-hide')
                e.classList.remove(clas)
            }
        }
    };

    const markCategory = function(category){
        var clas = categoriesClasses.filter(cat => cat.leyend == category )[0].class;
        var elementsWithClass = document.getElementsByClassName(clas + '-hide');

        for(var e of elementsWithClass){
            e.classList.add(clas)
            e.classList.remove(clas + '-hide')
        }
    };

    const selectAllMarkedCategories = function(){
        unOrcheckedAllCheckBoxes(true);

        for(var category of categoriesClasses){
            var clas = category.class;
            var elementsWithClass = document.getElementsByClassName(clas + '-hide');

            for(var e of elementsWithClass){
                e.classList.add(clas)
                e.classList.remove(clas + '-hide')
            }
        }
    };

    const unOrcheckedAllCheckBoxes = function(state){
        var checkInputs = document.getElementsByClassName('form-check-input');

        for(var input of checkInputs){
            input.checked = state;
        }
    };

    const selectCategory = function(e){

        if(e.target.tagName == 'LABEL'){
            var category = e.target.innerText;
            var parent = e.target.parentNode;
            var checkbox = parent.childNodes[0]
        }else if(e.target.tagName == 'INPUT'){
            var parent = e.target.parentNode;
            var checkbox = parent.childNodes[0]
            var category = parent.childNodes[1].innerText
        }else if(e.target.tagName == 'DIV'){
            var parent = e.target;
            var checkbox = parent.childNodes[0]
            var category = parent.childNodes[1].innerText
        }

        deleteAllMarkedCategories();
        markCategory(category)
        checkbox.checked = true;
    };

    return <div className="categories-result">
            <div className="header-categories-result justify-content-end"><h5>Leyenda</h5></div>
                <div className="row categories">
                    <div className="col-9">
                        <section>
                            <div className="form-check" style={{backgroundColor: "yellow"}} onClick={selectCategory}>
                                <input type="checkbox" className="form-check-input" checked="true" />
                                <label className="form-check-label" for="exampleCheck1">Motivo de Consulta</label>
                            </div>
                            <div className="form-check" style={{backgroundColor: "aqua"}} onClick={selectCategory}>
                                <input type="checkbox" className="form-check-input" checked="true" />
                                <label className="form-check-label" for="exampleCheck1">Sintomas</label>
                            </div>
                            <div className="form-check"  style={{backgroundColor: "#666666"}} onClick={selectCategory}>
                                <input type="checkbox" className="form-check-input" checked="true" />
                                <label className="form-check-label" for="exampleCheck1">Exploracion</label>
                            </div>
                            <div className="form-check"  style={{backgroundColor: "#e600e6"}} onClick={selectCategory}>
                                <input type="checkbox" className="form-check-input" checked="true" />
                                <label className="form-check-label" for="exampleCheck1">Filiacion</label>
                            </div>
                        </section>
                        <section>
                            <div className="form-check" style={{backgroundColor: "lightgrey"}} onClick={selectCategory}>
                                <input type="checkbox" className="form-check-input" checked="true" />
                                <label className="form-check-label" for="exampleCheck1">Antecedentes</label>
                            </div>
                            <div className="form-check" style={{backgroundColor: "red"}} onClick={selectCategory}>
                                <input type="checkbox" className="form-check-input" checked="true" />
                                <label className="form-check-label" for="exampleCheck1">Factores de Riesgo</label>
                            </div>
                            <div class="form-check" style={{backgroundColor: "#00ff00"}} onClick={selectCategory}>
                                <input type="checkbox" className="form-check-input" checked="true" />
                                <label className="form-check-label" for="exampleCheck1">Signos</label>
                            </div>
                        </section>
                    </div>
                    <div className="col-md-3 categories-selection-buttons">
                        <button className="bt" onClick={selectAllMarkedCategories}>SELECCIONAR TODO</button>
                        <button className="bt" onClick={deleteAllMarkedCategories}>BORRAR TODO</button>
                    </div>
                </div>
                <div className="row categories-export-buttons">
                    <div className="col-md-3 offset-md-9">
                        <button className="bt">Exportar CSV</button>
                        <Link to="/upload"><button className="bt">Cancelar</button></Link>
                    </div>
                </div>
    </div>
}