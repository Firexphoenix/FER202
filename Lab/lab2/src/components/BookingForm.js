import React from "react";

function BookingForm() {
    return (
        <section className="bg-dark text-white py-5">
            <div className="container">
                <h2 className="text-center mb-4">Book Your Table</h2>
                <form>
                    <div className="row mb-3">
                        <div className="col-md-4">
                            <input type="text" className="form-control" placeholder="Your Name *" required />
                        </div>
                        <div className="col-md-4">
                            <input type="email" className="form-control" placeholder="Your Email *" required />
                        </div>
                        <div className="col-md-4">
                            <select className="form-select" required>
                                <option value="">Select a Service</option>
                                <option>Dine In</option>
                                <option>Takeaway</option>
                                <option>Delivery</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" rows="4" placeholder="Please write your comment"></textarea>
                    </div>
                    <div>
                        <button className="btn btn-warning px-4">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default BookingForm;