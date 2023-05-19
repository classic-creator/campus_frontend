import React, { useState } from 'react'
// import "../../sidebar.css"


import { TreeView,TreeItem } from '@material-ui/lab'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd,  faBars,  faBookAtlas,  faBuilding,  faClose,  faDashboard, faDoorClosed, faDoorOpen, faFileAlt, faFileImport, faFrownOpen,  faImage,  faLink,  faListAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons'
 
const AdminSidebar = () => {


  const [isactives, setIsactives] = useState(false);



  const handleSidebar = () => {
    setIsactives(!isactives);
     let sidebar = document.querySelector(".sidebar");
     let sidebarBtn = document.querySelector(".sidebarBtn");
    if (sidebar.classList.contains("actives")) {
          sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
        } else
          sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }

    

 
  return (
    
    <div className={`sidebar ${isactives ? 'actives' : 'inactives'} `}>
      <button className="sidebarBtn" onClick={handleSidebar}>
         
         <FontAwesomeIcon icon={isactives ? faBars:faClose }/>
      </button>
        <Link to="/">
            {/* <img src='#' alt="Ecomarce" /> */}
            <h3>CAMPUS</h3>
          
        </Link>
       
       
           <Link to="/admin">
            <p >
                <FontAwesomeIcon icon={faDashboard}/>
               <span>Deashboard</span>
            </p>
        </Link>
        {/* <Link to="/admin/course">
            <p >
                <FontAwesomeIcon icon={faBookAtlas}/>
               <span>Courses</span>
            </p>
        </Link>
       */}
        <Link to="/admin/colleges">
            <p>
                <FontAwesomeIcon  icon={faBuilding}/>
                <span className='spantext'>Colleges</span>
            </p>
        </Link>
        <Link to="/admin/users">
            <p>
                <FontAwesomeIcon  icon={faUserAlt}/>
                <span className='spantext'>Users</span>
            </p>
        </Link>
        <Link to="/admin/images">
            <p>
                <FontAwesomeIcon  icon={faImage}/>
                <span className='spantext'>Images</span>
            </p>
        </Link>
        <Link to="/admin/Schemes">
            <p>
                <FontAwesomeIcon  icon={faImage}/>
                <span className='spantext'>Schemes</span>
            </p>
        </Link>
      
    </div>

  )
}

export default AdminSidebar