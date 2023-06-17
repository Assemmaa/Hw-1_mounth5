import {NavLink, Outlet} from "react-router-dom";


const activeMenuClass = ({isActive}) => isActive ? 'active-menu' : ''


const Layout = () => {
        return (
            <>
                <nav>
                    <ul>
                        <li><NavLink
                            to={'/'}
                            className={({isActive}) => isActive ? 'activeMenuClass' : ''}>
                            Home</NavLink></li>
                        <li><NavLink
                            to={'/posts'}
                            className={({isActive}) => isActive ? 'activeMenuClass' : ''}>
                            Posts</NavLink></li>
                        <li><NavLink
                            to={'/login'}
                            className={({isActive}) => isActive ? 'activeMenuClass' : ''}>
                            Login</NavLink></li>
                        <li><NavLink
                            to={'/qwerty'}
                            className={({isActive}) => isActive ? 'activeMenuClass' : ''}>
                            404</NavLink></li>
                        <li><NavLink
                            to={'/createPost'}
                            className={({isActive}) => isActive ? 'activeMenuClass' : ''}>
                            CreatePost</NavLink></li>
                    </ul>
                </nav>

                <div className='container'>
                    <Outlet />
                </div>

                <footer>Geeks 24-1</footer>
            </>
        );
}

export default Layout;