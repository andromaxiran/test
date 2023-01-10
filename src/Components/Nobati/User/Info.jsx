import * as React from 'react';
import Header from "../Header/Header";
import {MAIN} from "../../../helpers/colors";
import {Footer} from "../Footer/Footer";
import {UserSideBar} from "./UserSideBar";
import {Outlet} from "react-router-dom";

const Info = () => {
    return (
        <div>
            <Header/>
            <div style={{background:MAIN}} className={'row mx-0 col-12 p-5'}>
                <div className={'col col-md-3 me-5'}>
                    <UserSideBar/>
                </div>
                <div className={'col col-md-8'}>
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};
export default Info;