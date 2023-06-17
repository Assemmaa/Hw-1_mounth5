import './App.css'
import {Routes, Route, NavLink} from "react-router-dom";
import MainPage from "./pages/Main/MainPage.jsx";
import PostList from "./pages/Post/PostList.jsx";
import NotFoundPage from "./pages/NotFound/NotFoundPage.jsx";
import Layout from "./components/LayOut/Layout.jsx";
import SinglePost from "./pages/SIngle/SinglePost.jsx";
import LoginPage from "./pages/Login/LoginPage.jsx";
import ProfilePage from "./pages/Profile/ProfilePage.jsx";
import CreatePost from "./pages/CreatePost/CreatePost.jsx";

// const activeMenuClass = ({isActive}) => isActive ? 'active-menu' : ''

function App() {

  return (
    <>
        {/*TODO - NAV*/}
        {/*<nav>*/}
        {/*    <ul>*/}
        {/*        <li><NavLink*/}
        {/*            to={'/'}*/}
        {/*        className={({isActive}) => isActive ? 'activeMenuClass' : ''}>*/}
        {/*            Home</NavLink></li>*/}
        {/*        <li><NavLink*/}
        {/*            to={'/posts'}*/}
        {/*            className={({isActive}) => isActive ? 'activeMenuClass' : ''}>*/}
        {/*            Posts</NavLink></li>*/}
        {/*        <li><NavLink*/}
        {/*            to={'/qwerty'}*/}
        {/*            className={({isActive}) => isActive ? 'activeMenuClass' : ''}>*/}
        {/*            404</NavLink></li>*/}
        {/*    </ul>*/}
        {/*</nav>*/}

        {/*//CRUD*/}
        {/*// create - PostList*/}
        {/*// Read - получить данные - о списке сущностей GET*/}
        {/*//- о одной сущности Get*/}
        {/*// upDate - изменение  PUT , PATCH , POST*/}
        {/*// Delete- удаление сущности*/}


      <Routes>
          <Route path='/' element={<Layout />} >

              <Route index element={ <MainPage /> } />
              <Route path='posts' element={ <PostList /> } />
              <Route  path='posts/:id' element={<SinglePost />} />

              <Route  path='login' element={<LoginPage />} />
              <Route  path='profile' element={<ProfilePage />} />

              <Route path='create' element={<CreatePost />} />

              <Route path='*' element={ <NotFoundPage /> } />


          </Route>
      </Routes>


    </>
  )
}

export default App
