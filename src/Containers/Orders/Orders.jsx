
import React, { useEffect, useState } from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
} from "mdb-react-ui-kit";
import axios from "axios";

const API_URL = "https://proyectobackendpeliculas-production.up.railway.app/orders/getUserOrders";
const API_URL_Admin = "https://proyectobackendpeliculas-production.up.railway.app/orders/getAll";

const Orders = () => {

    const username = localStorage.getItem('username'.toString());
    const token = localStorage.getItem("jwt");
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    };

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get(API_URL, config)
            .then((res) => {
                console.log(res.data);
                setOrders(res.data);
            })
    }, [])

    const [ordersAdmin, setOrdersAdmin] = useState([]);

    useEffect(() => {
        axios.get(API_URL_Admin, config)
            .then((res) => {
                console.log(res.data);
                setOrdersAdmin(res.data);
            })
    }, [])

    const isAdmin = localStorage.getItem('isAdmin');

    if (token) {
        if (isAdmin == true) {
            return (
                <section className="vh-100" style={{ backgroundColor: "#eeeee4" }}>
                    <MDBContainer className="h-100">
                        <MDBRow className="justify-content-center align-items-center h-100">
                            <MDBCol>
                                <p>
                                    <span className="h2">All users' history orders </span>
                                </p>
                                <MDBCard className="mb-4">
                                    <MDBCardBody className="p-4">
                                        <MDBRow className="align-items-center">
                                            <MDBCol md="2">
                                            {ordersAdmin.map((order) => {
                                                        return (
                                                <MDBCardImage
                                                    fluid
                                                    src={order.url_img}
                                                    alt="Movie poster"
                                                    />
                                                        );
                                                    })}
                                            </MDBCol>
                                            <MDBCol md="2" className="d-flex justify-content-center">
                                                <div>
                                                    <p className="small text-muted mb-4 pb-2">Title</p>
                                                    <p className="lead fw-normal mb-0">
                                                        {ordersAdmin.map((order) => {
                                                            return (
                                                                <p key={order.title}>{order.title}</p>
                                                            )
                                                        })}
                                                    </p>
                                                </div>
                                            </MDBCol>
                                            <MDBCol md="2" className="d-flex justify-content-center">
                                                <div>
                                                    <p className="small text-muted mb-4 pb-2">Rent date</p>
                                                    <p className="lead fw-normal mb-0">
                                                        <MDBIcon
                                                            fas
                                                            icon="circle me-2"
                                                            style={{ color: "#fdd8d2" }}
                                                        />
                                                        {ordersAdmin.map((order) => {
                                                            return (
                                                                <p key={order.order_date}>{order.order_date}</p>
                                                            )
                                                        }
                                                        )}
                                                    </p>
                                                </div>
                                            </MDBCol>
                                            <MDBCol md="2" className="d-flex justify-content-center">
                                                <div>
                                                    <p className="small text-muted mb-4 pb-2">Return date</p>
                                                    <p className="lead fw-normal mb-0">
                                                        {ordersAdmin.map((order) => {
                                                            return (
                                                                <p key={order.return_date}>{order.return_date}</p>
                                                            )
                                                        })}
                                                    </p>
                                                </div>
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>
            )
        } else {
            return (
                <section className="vh-100" style={{ backgroundColor: "#eeeee4" }}>
                    <MDBContainer className="h-100">
                        <MDBRow className="justify-content-center align-items-center h-100">
                            <MDBCol>
                                <p>
                                    <span className="h2">{username}'s orders history </span>
                                </p>
                                <MDBCard className="mb-4">
                                    <MDBCardBody className="p-4">
                                        <MDBRow className="align-items-center">
                                            <MDBCol md="2">
                                            {orders.map((order) => {
                                                        return (
                                                <MDBCardImage
                                                    fluid
                                                    src={order.url_img}
                                                    alt="Movie poster"
                                                    />
                                                        );
                                                    })}
                                            </MDBCol>
                                            <MDBCol md="2" className="d-flex justify-content-center">
                                                <div>
                                                    <p className="small text-muted mb-4 pb-2">Title</p>
                                                    <p className="lead fw-normal mb-0">
                                                        {orders.map((order) => {
                                                            return (
                                                                <p key={order.title}>{order.title}</p>
                                                            )
                                                        })}
                                                    </p>
                                                </div>
                                            </MDBCol>
                                            <MDBCol md="2" className="d-flex justify-content-center">
                                                <div>
                                                    <p className="small text-muted mb-4 pb-2">Rent date</p>
                                                    <p className="lead fw-normal mb-0">
                                                        <MDBIcon
                                                            fas
                                                            icon="circle me-2"
                                                            style={{ color: "#fdd8d2" }}
                                                        />
                                                        {orders.map((order) => {
                                                            return (
                                                                <p key={order.order_date}>{order.order_date}</p>
                                                            )
                                                        }
                                                        )}
                                                    </p>
                                                </div>
                                            </MDBCol>
                                            <MDBCol md="2" className="d-flex justify-content-center">
                                                <div>
                                                    <p className="small text-muted mb-4 pb-2">Return date</p>
                                                    <p className="lead fw-normal mb-0">
                                                        {orders.map((order) => {
                                                            return (
                                                                <p key={order.return_date}>{order.return_date}</p>
                                                            )
                                                        })}
                                                    </p>
                                                </div>
                                            </MDBCol>
                                        </MDBRow>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </section>
            );
        };
    }
}

export default Orders;