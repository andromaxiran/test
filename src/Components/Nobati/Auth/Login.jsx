
import * as React from 'react';
import {Link} from "react-router-dom";



export const Login = () => {
    return (
        <div>

            <Link to='/login'>
                <button className={'btn btn-outline-success'}>ورود / ثبت نام</button>
            </Link>
        </div>
    );
};


