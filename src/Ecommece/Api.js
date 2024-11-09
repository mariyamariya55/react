import React, { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import './Style.css';

const initialState = { cart: [] };

function reduce(state, action) {
  switch (action.type) {
    case 'add to cart':
      return { ...state, cart: [...state.cart, action.product] };
    case 'remove from cart':
      return { ...state, cart: state.cart.filter((item, index) => index !== action.index) };
    default:
      return state;
  }
}

function Api() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState({});
  const [state, dispatch] = useReducer(reduce, initialState);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const [cartCount, setCartCount] = useState(0); // New state for cart count

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        const products = response.data.products;
        console.log(products);
        
        setProducts(products);
        // Group products by category
        const categoriesMap = products.reduce((acc, product) => {
          if (!acc[product.category]) {
            acc[product.category] = [];
          }
          acc[product.category].push(product);
          return acc;
        }, {});
        setCategories(categoriesMap);

      });
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const addToCart = (product) => {
    dispatch({ type: 'add to cart', product });
    setCartCount(cartCount + 1); // Increment cart count
    Swal.fire({
      title: "Do you want to Add to Cart?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Saved!", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  const removeFromCart = (index) => {
    dispatch({ type: 'remove from cart', index });
    setCartCount(cartCount - 1); // Decrement cart count
  };

  const renderProducts = () => {
    const productList = selectedCategory ? categories[selectedCategory] : products;
    return productList.map(product => (
      <Col key={product.id} sm={12} md={6} lg={4}>
        <Card className='car' style={{ width: '18rem', margin: '1rem' }}>
          <Card.Img variant="top" src={product.thumbnail} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Button className='eee' onClick={() => addToCart(product)}>Add to Cart</Button>
          </Card.Body>
        </Card>
      </Col>
    ));
  };

  const renderCart = () => {
    const totalPrice = state.cart.reduce((total, item) => total + item.price, 0);
    return (
      <div>
        {state.cart.map((item, index) => (
          <div key={index} className="cart-item" style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
            <img src={item.thumbnail} alt={item.title} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
            <div style={{ flex: 1 }}>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
              <p className='v1'>Price: ${item.price}</p>
            </div>
            <Button className='s1' variant="danger" onClick={() => removeFromCart(index)}>Remove</Button>
          </div>
        ))}
        <h4>Total Price: ${totalPrice.toFixed(2)}</h4>
      </div>
    );
  };

  return (
    <Container>
      {/* <Row>
        <Col>
          <h2 className='cat'>Categories</h2><br></br>
          <button className='log' onClick={() => setSelectedCategory(null)}>All</button>
          {Object.keys(categories).map(category => (
            <Button key={category} variant="outline-secondary" className="category-button" onClick={() => handleCategoryChange(category)}>
              {category}
            </Button>
          ))}
        </Col>
      </Row> */}
      <Row>
      
        {renderProducts()}
      </Row>
      <Button variant="primary" className="view-cart-button" onClick={() => setShowCart(true)}>
        View Cart ({cartCount}) {/* Display cart count */}
      </Button>
      <Modal show={showCart} onHide={() => setShowCart(false)} className="cart-modal">
        <Modal.Header closeButton>
          {/* <Modal.Title>Cart</Modal.Title> */}
        </Modal.Header>
        <Modal.Body>
          {renderCart()}
        </Modal.Body>
        <Modal.Footer>
          <Button className='m1' variant="secondary" onClick={() => setShowCart(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Api;