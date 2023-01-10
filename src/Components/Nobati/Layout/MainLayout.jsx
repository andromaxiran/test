import * as React from 'react';
import Header from "../../Dashboard/Layout/Header";
import SideBar from "../../Dashboard/Layout/Common/SideBar";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div className={"body"}>
            <div className="app">
                <Header />
                <div className="wrapper">
                    <SideBar />
                    <div className="main-container">
                        <div className="content-wrapper">
                            <Outlet/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MainLayout;