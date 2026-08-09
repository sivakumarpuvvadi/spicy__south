import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Orders.css";
import { clearOrders } from "./store";

function Orders() {
  // ✅ Fallback to empty array if undefined
  const orders = useSelector((state) => state.orders) || [];
  const dispatch = useDispatch();

  // ✅ Clear all orders with confirmation
  const handleClearOrders = () => {
    if (window.confirm("Are you sure you want to clear all orders?")) {
      dispatch(clearOrders());
    }
  };

  return (
    <div className="container mt-5 pt-5">
      <h1 className="text-center mb-4 fw-bold text-primary">📜 Order History</h1>

      {orders.length === 0 ? (
        <p className="text-center fs-5 text-muted">No orders placed yet...</p>
      ) : (
        <>
          <div className="row">
            {orders.map((purchase, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="card order-card shadow-lg rounded-3 border-0">
                  <div className="card-body">
                    {/* Order Header */}
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <h5 className="card-title text-success mb-0">
                        🛒 Order #{index + 1}
                      </h5>
                      <span className="badge bg-info text-dark">
                        {purchase.date || "Unknown Date"}
                      </span>
                    </div>

                    {/* Total Paid */}
                    <p className="fw-bold text-danger fs-6 mb-2">
                     Total Paid: ₹{Number(purchase.price)?.toFixed(2) || 0}
                    </p>

                    <hr />
                    <h6 className="text-secondary">📦 Items:</h6>

                    {/* Scrollable Items List */}
                    <div className="order-items-scroll">
                      <ul className="list-group list-group-flush">
                        {purchase.items?.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="list-group-item d-flex align-items-center"
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className="order-item-img me-3"
                            />
                            <div className="flex-grow-1">
                              <span className="fw-bold text-dark">
                                {item.name}
                              </span>
                              <p className="text-muted small mb-0">
                                ₹{item.price} × {item.quantity}
                              </p>
                            </div>
                            <span className="fw-bold text-primary">
                              ₹{(item.price * item.quantity).toFixed(2)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Clear Orders Button */}
          <div className="text-center mt-3">
            <button
              className="btn btn-sm btn-danger px-3 py-1 rounded-pill shadow clear"
              onClick={handleClearOrders}
            >
              🗑️ Clear All Orders
            </button>
          </div>
        </>
      )}

      
    </div>
  );
}

export default Orders;
