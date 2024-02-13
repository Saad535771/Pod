import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import SideBar from '../Sidebar/SideBar'
import style from "./style.module.scss";
const Home = () => {
  return (
    <div className={style.parent}>
      <SideBar/>
      <div className={style.hoc}>
        <Header />
        <main className={style.content_box}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
export default Home