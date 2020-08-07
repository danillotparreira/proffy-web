import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './page/Landing';
import TeacherList from './page/TeacherList';
import TeacherForm from './page/TeacherForm';

function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/study" component={TeacherList} />
            <Route path="/give-classes" component={TeacherForm} />
        </BrowserRouter> 
    )
}

export default Routes;