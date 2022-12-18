import * as React from 'react';
import Header from "../Header/Header";
import {Search} from "../Components/Search";
import {MAIN} from "../../../helpers/colors";
import {SideBar} from "./SideBar";
import {Content} from "./Content";
import {Footer} from "../Footer/Footer";

export const Categories = () => {
    return (
        <div>
            <Header/>
            <div className={'p-3 border-top'}>
            <Search/>
            </div>
            <div style={{background:MAIN}} className={'row mx-0 col-12 p-3'}>
                <div className={'d-sm-none d-md-block col-md-4'}>
                    <SideBar/>
                </div>
                <div className={'col col-md-8'}>
                    <Content/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};