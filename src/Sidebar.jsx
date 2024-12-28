import React from 'react'
import 
{BsInstagram, BsGrid1X2Fill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill,
  BsHandThumbsUp,
  BsChat,
  BsSave,
  BsPersonAdd,
  BsPersonDown}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsInstagram  className='icon_header'/> INSTAGRAM
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPersonAdd className='icon'/> Follow
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPersonDown className='icon'/> Unfollow
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsHandThumbsUp className='icon'/> Likes
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsChat className='icon'/> Comments
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsSave className='icon'/> Saved Post
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGearFill className='icon'/> Setting
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar