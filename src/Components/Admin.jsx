import MainLayout from "./Dashboard/Layout/MainLayout";
import {Product, Read, Update, HomePage, NotFound} from "./index";
import {Route, Routes} from "react-router-dom";
import CreateProduct from "./Dashboard/Product/CreateProduct";
import EditProduct from "./Dashboard/Product/EditProduct";
import Users from "./Dashboard/User/Users";
import EditUser from "./Dashboard/User/EditUser";
import {Categories} from "./Nobati/Pages/Categories";
import EmployeeShow from "./Nobati/Pages/EmployeeShow";
import Booking from "./Nobati/Pages/Booking";
import Info from "./Nobati/User/Info";
import EditNewUser from "./Nobati/User/EditNewUser";
import MyReserve from "./Nobati/User/MyReserve";
import MyList from "./Nobati/User/MyList";
import MyUsers from "./Nobati/User/MyUsers";
import Jobs from "./Nobati/User/Job/Jobs";
import {EditNewJob} from "./Nobati/User/Job/EditNewJob";
import {EmployeeJob} from "./Nobati/User/Job/EmployeeJob";
import {AddEmployee} from "./Nobati/User/Job/AddEmployee";
import {ReserveTimes} from "./Nobati/User/Job/ReserveTimes";

const Admin = () => {
    return (

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/category" element={<Categories/>}/>
                <Route path="/show" element={<EmployeeShow/>}/>
                <Route path="/booking" element={<Booking/>}/>
                <Route path="/user" element={<Info/>} >
                    <Route index element={<EditNewUser />} />
                    <Route path="editUser" element={<EditNewUser />} />
                    <Route path="my-reserve" element={<MyReserve />} />
                    <Route path="my-list" element={<MyList />} />
                    <Route path="my-users" element={<MyUsers />} />
                </Route>
                <Route path="/job" element={<Jobs/>}>
                    <Route index  element={<EditNewJob/>} />
                    <Route path="edit-job" element={<EditNewJob/>} />
                    <Route path="employee-job" element={<EmployeeJob/>} />
                    <Route path="add-employee" element={<AddEmployee/>} />
                    <Route path="reserve-times" element={<ReserveTimes/>} />

                </Route>
                <Route path="/dashboard" element={<MainLayout/>} >
                    <Route path="home" element={<Read />} />
                    <Route path="update" element={<Update/>}/>
                    <Route path="products" element={<Product/>}/>
                    <Route path="products/create" element={<CreateProduct/>}/>
                    <Route path="products/edit" element={<EditProduct/>}/>
                    <Route path="users" element={<Users/>}/>
                    <Route path="users/edit" element={<EditUser/>}/>
                </Route>
                <Route path={'*'} element={<NotFound/>}/>
            </Routes>

    )
}
export default Admin;