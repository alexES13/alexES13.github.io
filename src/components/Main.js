import React from 'react';

const Main = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-dark text-white">
            <h1 className="display-3 fw-bold">Alejandro Espada</h1>
            <p className="lead">Fullstack developer</p>
            <div className="d-flex gap-4">
                <a
                    href="https://www.linkedin.com/in/alejandro-espada-angel-676192108"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white fs-3"
                >
                    <i className="bi bi-linkedin"></i>
                </a>
                <a
                    href="https://github.com/alexES13"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white fs-3"
                >
                    <i className="bi bi-github"></i>
                </a>
                <a
                    href="mailto:butano_tren.7r@icloud.com"
                    className="text-white fs-3"
                    aria-label="Contacto"
                >
                    <i className="bi bi-envelope"></i>
                </a>
            </div>
        </div>
    );
};

export default Main;
