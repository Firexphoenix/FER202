import React from "react";

function MenuSection() {
    const menu = [
        { title: 'Margherita Pizza', price: '24.00', oldPrice: '40.00', label: 'SALE', image: '/menu1.jpg' },
        { title: 'Mushroom Pizza', price: '25.00', image: '/menu2.jpg' },
        { title: 'Hawaiian Pizza', price: '30.00', label: 'NEW', image: '/menu3.jpg' },
        { title: 'Pesto Pizza', price: '30.00', oldPrice: '50.00', label: 'SALE', image: '/menu4.jpg' },
    ];
    return (
        <section className=" bg-dark menu-section text-white py-5">
            <div className="container">
                <h2 className="mb-4">Our Menu</h2>
                <div className="row">
                    {menu.map((item, i) => (
                        <div className="col-md-3 mb-4" key={i}>
                            <div className="card h-100">
                                {item.label && <span className="badge bg-warning position-absolute m-2">{item.label}</span>}
                                <img src={item.image} className="card-img-top" alt={item.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">
                                        {item.oldPrice && <s className="text-muted me-2">${item.oldPrice}</s>}  {/*giá tiền ở đây*/}
                                        <strong className={item.oldPrice ? 'text-warning' : ''}>${item.price}</strong>
                                    </p>
                                    <button className="btn btn-dark w-100">Buy</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default MenuSection;