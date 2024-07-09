import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets1/logo.png';
import cart_icon from '../assets1/cart_icon.png';
import { Link, useNavigate } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

function Navbar() {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    const [sidePanelOpen, setSidePanelOpen] = useState(false);
    const [user, setUser] = useState(null);
    const auth = getAuth();

    const toggleSidePanel = () => {
        setSidePanelOpen(!sidePanelOpen);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, [auth]);

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <div className='Navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="Logo" />
                <p>SHOPPER</p>
            </div>
            <div className='hamburger' onClick={toggleSidePanel}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => { setMenu("shop") }}>
                    <Link style={{ textDecoration: 'none' }} to="/">Shop</Link>
                    {menu === "shop" ? <hr /> : null}
                </li>
                <li onClick={() => { setMenu("mens") }}>
                    <Link style={{ textDecoration: 'none' }} to="/mens">Men</Link>
                    {menu === "mens" ? <hr /> : null}
                </li>
                <li onClick={() => { setMenu("womens") }}>
                    <Link style={{ textDecoration: 'none' }} to="/womens">Women</Link>
                    {menu === "womens" ? <hr /> : null}
                </li>
                <li onClick={() => { setMenu("kids") }}>
                    <Link style={{ textDecoration: 'none' }} to="/kids">Kids</Link>
                    {menu === "kids" ? <hr /> : null}
                </li>
            </ul>
            <div className='nav-login-cart'>
                {user ? (
                    <>
                        <span>{user.displayName || user.email}</span>
                        <button onClick={handleSignOut}>Sign Out</button>
                    </>
                ) : (
                    <Link to='/login'><button>Login</button></Link>
                )}
                <Link to='/cart'><img src={cart_icon} alt="Cart" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
            <div className={`side-panel ${sidePanelOpen ? 'open' : ''}`}>
                <ul>
                    <li onClick={() => { setMenu("shop"); toggleSidePanel(); }}>
                        <Link style={{ textDecoration: 'none' }} to="/">Shop</Link>
                    </li>
                    <li onClick={() => { setMenu("mens"); toggleSidePanel(); }}>
                        <Link style={{ textDecoration: 'none' }} to="/mens">Men</Link>
                    </li>
                    <li onClick={() => { setMenu("womens"); toggleSidePanel(); }}>
                        <Link style={{ textDecoration: 'none' }} to="/womens">Women</Link>
                    </li>
                    <li onClick={() => { setMenu("kids"); toggleSidePanel(); }}>
                        <Link style={{ textDecoration: 'none' }} to="/kids">Kids</Link>
                    </li>
                    {user ? (
                        <>
                            <li onClick={toggleSidePanel}>
                                <button onClick={handleSignOut}>Sign Out</button>
                            </li>
                            <li>
                                <span>{user.displayName || user.email}</span>
                            </li>
                        </>
                    ) : (
                        <>
                            <li onClick={toggleSidePanel}>
                                <Link style={{ textDecoration: 'none' }} to="/login">Login</Link>
                            </li>
                            <li onClick={toggleSidePanel}>
                                <Link style={{ textDecoration: 'none' }} to="/cart">Cart</Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
