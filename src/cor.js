import { useState,useEffect } from 'react';
import './core.css';

export default function CoreMark() {

    const [activeIndex, setActiveIndex] = useState(null);    
    const toggleDropdown = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
      };
    
      const [isLoggedIn, setIsLoggedIn] = useState(false);
     // Load login state from localStorage
      useEffect(() => {
     const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
     setIsLoggedIn(loggedInStatus);
     }, []);

      // Toggle login/logout
      const handleAuth = () => {
      if (isLoggedIn) {
      // Logout
      setIsLoggedIn(false);
      localStorage.removeItem("isLoggedIn");
     } else {
      // Login
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
     }
     };
    const [query, setQuery] = useState("");
     //search
       const handleSearch = () => {
         if (query.trim() === "") {
           alert("Please enter something to search!");
         } else {
           alert(`Searching for: ${query}`);
         }
       };
    return(
        <>
        <div className='main'>
            <header className="CoreNav">
                 <div><img className='logo' src="https://www.qas.coremarkcustomerfirst.com/static/media/logo.79a316bca42fd4ddaf09af7167d6393e.svg" alt="core"></img></div>
                <div className='list'>
                    <div><div onClick={() => toggleDropdown(1)} className="menu-item"><svg class="SvgIcon-root SvgIcon-fontSizeMedium css-u6wqgl" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocalMallOutlinedIcon" height="15px" width="20px"><path d="M19 6h-2c0-2.76-2.24-5-5-5S7 3.24 7 6H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-7-3c1.66 0 3 1.34 3 3H9c0-1.66 1.34-3 3-3m7 17H5V8h14zm-7-8c-1.66 0-3-1.34-3-3H7c0 2.76 2.24 5 5 5s5-2.24 5-5h-2c0 1.66-1.34 3-3 3"></path></svg><b>Orders
                        {activeIndex === 1 && (
                            <ul className="dropdown">
                            <li>New Orders</li>
                            <li>Processing</li>
                            <li>Completed</li>
                            </ul>
                        )}</b></div></div>
                    <div><div onClick={() => toggleDropdown(2)} className="menu-item"><svg class="SvgIcon-root SvgIcon-fontSizeMedium css-u6wqgl" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LocalShippingOutlinedIcon" height="15px" width="20px"><path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5zm-.5 1.5 1.96 2.5H17V9.5zM6 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1m2.22-3c-.55-.61-1.33-1-2.22-1s-1.67.39-2.22 1H3V6h12v9zM18 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"></path></svg><b>Deliveries
                        {activeIndex === 2 && (
                            <ul className="dropdown">
                            <li>New Orders</li>
                            <li>Processing</li>
                            <li>Completed</li>
                            </ul>
                        )}</b></div></div>
                    <div><div onClick={() => toggleDropdown(3)} className="menu-item"><svg class="SvgIcon-root SvgIcon-fontSizeMedium css-u6wqgl" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="BusinessCenterOutlinedIcon" height="15px" width="20px"><path d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v5c0 .75.4 1.38 1 1.73V19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-3.28c.59-.35 1-.99 1-1.72V9c0-1.1-.9-2-2-2M10 5h4v2h-4zM4 9h16v5h-5v-3H9v3H4zm9 6h-2v-2h2zm6 4H5v-3h4v1h6v-1h4z"></path></svg><b>Resources
                        {activeIndex === 3 && (
                            <ul className="dropdown">
                            <li>New Orders</li>
                            <li>Processing</li>
                            <li>Completed</li>
                            </ul>
                        )}</b></div></div>
                    <div><div onClick={() => toggleDropdown(4)} className="menu-item"><svg class="SvgIcon-root SvgIcon-fontSizeMedium css-u6wqgl" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="AccountCircleOutlinedIcon" height="15px" width="20px"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M7.35 18.5C8.66 17.56 10.26 17 12 17s3.34.56 4.65 1.5c-1.31.94-2.91 1.5-4.65 1.5s-3.34-.56-4.65-1.5m10.79-1.38C16.45 15.8 14.32 15 12 15s-4.45.8-6.14 2.12C4.7 15.73 4 13.95 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8c0 1.95-.7 3.73-1.86 5.12"></path><path d="M12 6c-1.93 0-3.5 1.57-3.5 3.5S10.07 13 12 13s3.5-1.57 3.5-3.5S13.93 6 12 6m0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11"></path></svg><b>Account
                        {activeIndex === 4 && (
                            <ul className="dropdown">
                            <li>New Orders</li>
                            <li>Processing</li>
                            <li>Completed</li>
                            </ul>
                        )}</b></div></div>
                </div>
                <div className='main-two'>
                    <div><div className='log' onClick={handleAuth}><b>{isLoggedIn ? "Logout" : "Login"}</b></div></div>
                    <div><div onClick={handleSearch}><svg class="SvgIcon-root SvgIcon-fontSizeMedium css-u6wqgl" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="SearchIcon" height="25px" width="20px"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"></path></svg></div></div>
                    <div><div><svg class="SvgIcon-root SvgIcon-fontSizeMedium css-u6wqgl" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="NotificationsOutlinedIcon" height="25px" width="20px" ><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2m6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5z"></path></svg></div></div>
                    <div><div><svg class="SvgIcon-root SvgIcon-fontSizeMedium css-u6wqgl" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ShoppingCartOutlinedIcon" height="25px" width="20px"><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2zM6.16 6h12.15l-2.76 5H8.53zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2"></path></svg></div></div>
                </div>
            </header>
        </div>
        </>
    )
}