import React from "react";
import {Outlet} from "react-router-dom"
import './MainLayout.css';
import myvid from '../../../assets/video.mp4'
import Theme from "./Common/Theme";
import Header from "./Header";
import SideBar from "./Common/SideBar";

const MainLayout = () =>{
    return(
            <div className={"body"}>
            <div className="video-bg">
                <video width="320" height="240" autoPlay loop muted>
                    <source src={myvid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <Theme />
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
    )
}
export  default MainLayout;