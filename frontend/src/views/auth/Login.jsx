import React, { useState } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import { useParams, Link, useNavigate } from "react-router-dom";

import apiInstance from "../../utils/axios";
import { useAuthStore } from "../../store/auth";
import { login, register } from "../../utils/auth";

function Login() {
    const [bioData, setBioData] = useState({ email: "", password: "" });
    const [isLoading, setIsLoading] = useState(false);
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
    const navigate = useNavigate();

    const handleBioDataChange = (event) => {
        setBioData({
            ...bioData,
            [event.target.name]: event.target.value,
        });
    };

    const resetForm = () => {
        setBioData({
            email: "",
            password: "",
        });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const { error } = await login(bioData.email, bioData.password);
        if (error) {
            alert(JSON.stringify(error));
            resetForm();
        } else {
            navigate("/");
        }

        // Reset isLoading to false when the operation is complete
        setIsLoading(false);
    };

    return (
        <>
            <Header />
            <section className="container d-flex flex-column vh-100" style={{ marginTop: "150px" }}>
                <div className="row align-items-center justify-content-center g-0 h-lg-100 py-8">
                    <div className="col-lg-5 col-md-8 py-8 py-xl-0">
                        <div className="card shadow">
                            <div className="card-body p-6">
                                <div className="mb-4">
                                    <h1 className="mb-1 fw-bold">Iniciar Sesion</h1>
                                    <span>
                                        No tienes una Cuenta?
                                        <Link to="/register/" className="ms-1">
                                            Inscribirse
                                        </Link>
                                    </span>
                                </div>
                                {/* Form */}
                                <form className="needs-validation" noValidate="" onSubmit={handleLogin}>
                                    {/* Username */}
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label">
                                            Correo Electronico
                                        </label>
                                        <input type="email" onChange={handleBioDataChange} value={bioData.email} id="email" className="form-control" name="email" placeholder="Example: AngelJim@gmail.com" required="" />
                                        <div className="invalid-feedback">Favor de introducir un correo Valido</div>
                                    </div>
                                    {/* Password */}
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label">
                                            Contraseña
                                        </label>
                                        <input type="password" onChange={handleBioDataChange} value={bioData.password} id="password" className="form-control" name="password" placeholder="**************" required="" />
                                        <div className="invalid-feedback">Favor de escribir correcto la Contraseña</div>
                                    </div>
                                    {/* Checkbox */}
                                    <div className="d-lg-flex justify-content-between align-items-center mb-4">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="rememberme" required="" />
                                            <label className="form-check-label" htmlFor="rememberme">
                                                Recordarme
                                            </label>
                                            <div className="invalid-feedback">You must agree before submitting.</div>
                                        </div>
                                        {/*<div>
                                            <Link to="/forgot-password/">Olvidaste tu Contraseña?</Link>
                                        </div>*/}
                                    </div>
                                    <div>
                                        <div className="d-grid">
                                            <button className="btn btn-primary w-100" type="submit" disabled={isLoading}>
                                                {isLoading ? (
                                                    <>
                                                        <span className="mr-2 ">Processing...</span>
                                                        <i className="fas fa-spinner fa-spin" />
                                                    </>
                                                ) : (
                                                    <>
                                                        <span className="mr-2">Sign In </span>
                                                        <i className="fas fa-sign-in-alt" />
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Login;