import React from "react";
import Navbar from "../components/Navbar";
import WhatsappOrders from "../components/Whatsapp/WhatsappOrders";
import Footer from "../components/Footer/Footer";

const OrdersPage = () => {
    return (
        <div>
            <Navbar />
            <WhatsappOrders />
            <Footer />
        </div>
    )
}

export default OrdersPage;