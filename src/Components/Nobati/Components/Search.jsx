import * as React from 'react';
import './search.scss'

export const Search = () => {
    return (
        <div className={'text-center'}>
            <div className="input-group mb-3 w-50 mx-auto">
                <input type="text" className="form-control" placeholder="نام مکان ، تخصص ،نام آرایشگر"/>
                <span className={'sbz'}>
                    <i className="fa fa-map-marker icon-search"/>
                    سبزوار</span>
            </div>
        </div>
    );
};