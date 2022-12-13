import * as React from 'react';
import Logo from "../Components/Logo";
import Login from "../Components/Login";

const Header = () => {
    return (
        <div>
            <div className={'container d-flex justify-content-between mt-3 border-bottom'}>
                <Logo/>
                <Login/>
            </div>
        </div>
    );
};
export default Header;