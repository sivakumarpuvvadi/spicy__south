import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Milkshakes.css';
import { addToCart } from './store';

// ✅ Import Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Milkshakes() {
  const milkshakesItems = useSelector(state => state.product.milkshakes) || [];
  const { isAuthenticated } = useSelector(state => state.auth || {});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(milkshakesItems.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = milkshakesItems.slice(indexOfFirstItem, indexOfLastItem);

  // ✅ Handle Add to Cart with toast and auth guard
  const handleAddToCart = (item) => {
    if (!isAuthenticated) {
      toast.warning("Please sign up to add items to your cart! 🔒", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
      setTimeout(() => {
        navigate("/signup");
      }, 1500);
      return;
    }

    dispatch(addToCart(item));
    toast.success(`${item.name} added to cart! 🥛`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="container pt-5 mt-2">
      <div className="text-center mb-4">
        <h2 className="category-heading milkshakes-heading">
          <span className="heading-icon me-2">🧋</span>
          <span className="heading-text">CREAMY MILKSHAKES</span>
          <span className="heading-icon ms-2">🍓</span>
        </h2>
        <div className="heading-underline milkshakes-underline"></div>
      </div>
      <div className="row">
        {currentItems.map(item => (
          <div key={item.id} className="col-md-3 mb-4">
            <div className="card milkshake-card h-100">
              <img src={item.image} className="card-img-top" alt={item.name} />
              <div className="card-body">
                <div>
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-price">Price: ₹{item.price}</p>
                </div>
                <button
                  className="btn btn-success"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Pagination with Prev & Next */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-5 mb-3     pagination gap-2">
          {/* Prev Button */}
          <button
            className="btn btn-outline-warning"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`btn ${currentPage === index + 1 ? 'btn-warning' : 'btn-outline-warning'}`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            className="btn btn-outline-warning"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}

      {/* ✅ Toast Container */}
      <ToastContainer />
    </div>
  );
}

export default Milkshakes;
