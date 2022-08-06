import {NavLink} from 'react-router-dom'
const SideBar = () =>{
    return (
        <>
            <nav>
                <NavLink to="/create"   className={({ isActive }) =>
                    isActive ? "btn btn-success d-block" : "btn d-block"
                } >create</NavLink>
                <NavLink to="/read"  className={({ isActive }) =>
                    isActive ? "btn btn-success d-block" : "btn d-block"
                }>read</NavLink>
                <NavLink to="/update"  className={({ isActive }) =>
                    isActive ? "btn btn-success d-block" : "btn d-block"
                }>update</NavLink>
            </nav>
        </>
    )
}
export default SideBar;