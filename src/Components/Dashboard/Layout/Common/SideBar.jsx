import {NavLink} from 'react-router-dom'

const SideBar = () => {
  return(


      <div className="left-side">
          <div className="side-wrapper">
              <div className="side-title">داشبورد</div>
              <div className="side-menu">
                  <nav>
                      <NavLink to="/dashboard/home">
                          <span className={"mx-2"}><i className="fa fa-home" aria-hidden="true"/></span>
                           صفحه نخست
                      </NavLink>
                      <NavLink to="/dashboard/products">
                          <span className={"mx-2"}><i className="fa fa-shopping-cart" aria-hidden="true"/></span>
                            محصولات
                      </NavLink>
                      <NavLink to="/dashboard/users">
                          <span className={"mx-2"}><i className="fa fa-user" aria-hidden="true"/></span>
                          کاربران
                      </NavLink>
                      <NavLink to="/dashboard/orders">
                          <span className={"mx-2"}><i className="fa fa-recycle" aria-hidden="true"/></span>
                          سفارشات
                      </NavLink>
                      <NavLink to="/dashboard/update"
                             >
                          <span className={"mx-2"}><i className="fa fa-cogs" aria-hidden="true"/></span>
                         ابزار
                      </NavLink>

                  </nav>
              </div>

          </div>
      </div>
  )
}
export default SideBar;