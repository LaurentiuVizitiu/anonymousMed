import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


export default function Navbar() {
    const [click, setClick] = useState(false);
    //const [button, setButton] = useState(true); 
    const handleClick = () => setClick(!click);
    const closeMobilMenu = () =>setClick(false);

    return (
        <>
           <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo' onClick={closeMobilMenu}>
                        AnonymousMed <i className=' fas fa-hospital p-1'/>
                    </Link>
                    <div className='menu-icon'  onClick = {handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className = 'nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobilMenu}>
                                Services
                            </Link>
                        </li> 
                        <li className = 'nav-item'>
                            <Link to='/team' className='nav-links' onClick={closeMobilMenu}>
                                Team
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobilMenu}>
                                About
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMobilMenu}>
                                Contact
                            </Link>
                        </li>
                         <li className = 'nav-item'>
                            <Link to='/signUp' className='nav-links' onClick={closeMobilMenu}>
                                Sign up
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
