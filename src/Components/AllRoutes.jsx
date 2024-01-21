import { Routes, Route } from "react-router-dom";
import { Paymentdetails } from "./Payment/Payment";
import { AddressDetails } from "./Payment/Address";
import Products from "./Products/Products";
import ProductDetails from "./Products/ProductDetails";
import HomePage from "./Home/HomePage";
import About from "./About/About";
import AdminProducts from "./Admin/AdminProducts";
import AdminProductDetails from "./Admin/AdminProductDetails";
import AddNewProduct from "./Admin/AddNewProduct";
import Cart from "./CartPage/Cart";


export default function AllRoutes(){
    return(<>
    <Routes>
        {/* Rohit add home page below */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        {/* Raushan add Login and Sign below */}
        <Route path="/cart" element={<Cart/>}/>

        {/* <Route path="/login"/> */}
        {/* Poornima do edit below if required */}
        <Route path="/payment" element={<Paymentdetails />}/>
        <Route path="/address" element={<AddressDetails />} />
        {/* Heena do edit if required below */}
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* Admin routes */}
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/admin/product/:id" element={<AdminProductDetails />} />
        <Route path="/admin/addProduct" element={<AddNewProduct />} />
    </Routes>
    </>);
}