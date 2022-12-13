import * as React from 'react';
import Header from "./Header/Header";
import logo from './../../assets/logo.png'
import {Search} from "./Components/Search";
import './HomePage.scss'
import {Footer} from "./Footer/Footer";
const HomePage = () => {
    return (
        <div>
            <Header/>
            <main className={'text-center'} style={{marginBottom: "100px"}}>
                <div>
                    <img src={logo} alt={'logo'}/>
                    <Search/>
                    <div className={'mt-5 d-flex justify-content-center'}>
                        <h5>آخرین جستجوهای شما</h5>
                        <p className={'bazdid'}>
                           <span> آرایشگاه</span>
                        </p>
                        <p className={'bazdid'}>
                            <span> سالن قصر </span>
                        </p>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};
export default HomePage;