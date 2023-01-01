import * as React from 'react';
import Header from "../../Header/Header";
import {MAIN} from "../../../../helpers/colors";
import {Footer} from "../../Footer/Footer";

import {Outlet} from "react-router-dom";
import {JobSideBar} from "./JobSideBar";

const Jobs = () => {
    return (
        <div>
            <Header/>
            <div style={{background:MAIN}} className={'row mx-0 col-12 p-5'}>
                <div className={'col-12 col-md-auto me-5'}>
                    <JobSideBar/>
                </div>
                <div className={'col-12 col-md-8'}>
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};
export default Jobs;