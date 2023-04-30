import React, { useState } from 'react'
import "./sidebar.css"

import { TreeView,TreeItem } from '@material-ui/lab'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd,  faBars,  faBookAtlas,  faClose,  faDashboard, faDoorClosed, faDoorOpen, faFileAlt, faFileImport, faFrownOpen,  faListAlt } from '@fortawesome/free-solid-svg-icons'
 
const Sidebar = () => {


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
        <Link to="/college/course">
            <p >
                <FontAwesomeIcon icon={faBookAtlas}/>
               <span>Courses</span>
            </p>
        </Link>
        {/* <Link>
        <TreeView defaultCollapseIcon={<FontAwesomeIcon icon={faFileAlt}/>} 
        defaultExpandIcon={<FontAwesomeIcon icon={faFileImport}/> }>
       
            <TreeItem nodeId="1" label="Products">
                <Link to="/admin/products">
                    <TreeItem nodeId='2' label="All" icon={<FontAwesomeIcon icon={faListAlt}/>}/>
                </Link>

                <Link to="/admin/product">
                    <TreeItem  nodeId='3' label="Create" icon={<FontAwesomeIcon icon={faAdd}/>}/>
                </Link>


            </TreeItem>
        </TreeView>
        </Link> */}
           <Link to="/college/manager/profile">
            <p >
                <FontAwesomeIcon icon={faDashboard}/>
               <span>Deashboard</span>
            </p>
        </Link>

        <Link >
        <TreeView defaultCollapseIcon={<FontAwesomeIcon icon={faDoorOpen}/>} 
        defaultExpandIcon={<FontAwesomeIcon icon={faDoorClosed}/> }>
      
            <TreeItem nodeId="1" label="Depertment">
                <Link to="/depertments">
                    <TreeItem nodeId='2' label="All Deperement" icon={<FontAwesomeIcon icon={faListAlt}/>}/>
                </Link>

                <Link to="/college/depertment/create">
                    <TreeItem  nodeId='3' label="Create" icon={<FontAwesomeIcon icon={faAdd}/>}/>
                </Link>


            </TreeItem>
        </TreeView>
        </Link>

        <Link to="/admin/users">
            <p>
                <FontAwesomeIcon  icon={faFrownOpen}/>
                <span className='spantext'>Users</span>
            </p>
        </Link>
      


    </div>



  )
}

export default Sidebar