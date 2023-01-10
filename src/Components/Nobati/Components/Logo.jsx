import * as React from 'react';
import logo from './../../../assets/logo.png'
export const Logo = () => {
    return (
        <div>
            <img className={'w-50'} src={logo} alt="Logo" />
        </div>
    );
};
export default Logo;