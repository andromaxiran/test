import * as React from 'react';
import Header from "../Header/Header";
import {Search} from "../Components/Search";
import {MAIN} from "../../../helpers/colors";
import {SideBar} from "./SideBar";
import {Content} from "./Content";
import {Footer} from "../Footer/Footer";
import {EmployeeContent} from "./EmployeeContent";

const EmployeeShow = () => {
    return (
        <div>
            <Header/>
            <div className={'p-3 border-top'}>
                <Search/>
            </div>
            <div style={{background:MAIN}} className={'row mx-0 col-12 p-5'}>
                <div className={'col-12 col-md-7 mx-3'}>
                    <EmployeeContent/>
                </div>
                <div className={'col-12 col-md-4 mx-3'}>
                    <Content/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};
export default EmployeeShow;