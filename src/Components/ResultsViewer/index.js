import React, { useState, useEffect } from 'react';
import ResultsList from '../ResultsListDiagnostic'
import DiagnosticContent from '../ResultsDiagnosticContent';
import CategoriesContent from '../CategoriesResults';
import './index.css';

export default function ResultsViewer(){


    const onClickCategoryList = function(category){

    }

    return <div>
                <div className="results-viewer">
                    <div className="d-inline-block diagnostic">
                            <DiagnosticContent />
                            <CategoriesContent />
                    </div>
                    <div className="d-inline-block result-list">
                        <ResultsList categoryClick={onClickCategoryList}/>
                    </div>
                </div>
            </div>
}
