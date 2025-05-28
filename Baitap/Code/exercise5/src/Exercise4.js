import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Ex4.css";

function Exercise4() {
  return (
    <div className="App">
      {/* Header */}
      <header className="bg-orange text-center py-4">
        <img
          src="/logofpt.jpg"
          alt="FPT University"
          className="logo"
        />
      </header>

      {/* Navbar */}
      <nav className="bg-orange text-center py-2">
        <a href="#home" className="nav-link d-inline text-white px-3">Home</a>
        <a href="#about" className="nav-link d-inline text-white px-3">About</a>
        <a href="#contact" className="nav-link d-inline text-white px-3">Contact</a>
      </nav>

      {/* Main content */}
      <main className="container my-5 text-center">
        <section id="about" className="mb-5">
          <h3><strong>About</strong></h3>
          <p>This is the about section of the website.</p>
        </section>

        <section id="contact">
          <h3><strong>Contact</strong></h3>
          <p>For any inquiries, please contact us at <a href="mailto:example@example.com">example@example.com</a>.</p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-footer text-center py-3">
        © 2023 Website. All rights reserved.
      </footer>
    </div>
  );
}

export default Exercise4;
