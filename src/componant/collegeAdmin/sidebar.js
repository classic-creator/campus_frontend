import React from 'react'
import "./sidebar.css"
// import logo from "./logo192.png"
import { TreeView,TreeItem } from '@material-ui/lab'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd,  faDashboard, faDoorClosed, faDoorOpen, faFileAlt, faFileImport, faFrownOpen,  faListAlt } from '@fortawesome/free-solid-svg-icons'
// import { MdAdd, MdDashboard, MdExpandMore, MdImportExport, MdListAlt, MdPeople, MdPostAdd, MdRateReview } from 'react-icons/md'
const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Link to="/">
            {/* <img src='#' alt="Ecomarce" /> */}
            <h2>CAMPUS</h2>
        </Link>
        <Link to="/admin/dashboard">
            <p >
                <FontAwesomeIcon icon={faDashboard}/>
                Dashboard
            </p>
        </Link>
        <Link>
        <TreeView defaultCollapseIcon={<FontAwesomeIcon icon={faFileAlt}/>} 
        defaultExpandIcon={<FontAwesomeIcon icon={faFileImport}/> }>
        {/* defaultExpandIcon={'<MdImportExport/>' }> */}
            <TreeItem nodeId="1" label="Products">
                <Link to="/admin/products">
                    <TreeItem nodeId='2' label="All" icon={<FontAwesomeIcon icon={faListAlt}/>}/>
                </Link>

                <Link to="/admin/product">
                    <TreeItem  nodeId='3' label="Create" icon={<FontAwesomeIcon icon={faAdd}/>}/>
                </Link>


            </TreeItem>
        </TreeView>
        </Link>
        <Link >
        <TreeView defaultCollapseIcon={<FontAwesomeIcon icon={faDoorClosed}/>} 
        defaultExpandIcon={<FontAwesomeIcon icon={faDoorOpen}/> }>
        {/* defaultExpandIcon={'<MdImportExport/>' }> */}
            <TreeItem nodeId="1" label="Depertment">
                <Link to="/depertments">
                    <TreeItem nodeId='2' label="All" icon={<FontAwesomeIcon icon={faListAlt}/>}/>
                </Link>

                <Link to="/college/depertment/create">
                    <TreeItem  nodeId='3' label="Create" icon={<FontAwesomeIcon icon={faAdd}/>}/>
                </Link>


            </TreeItem>
        </TreeView>
        </Link>

        <Link to="/admin/users">
            <p>
                <FontAwesomeIcon icon={faFrownOpen}/>
                 Applications
            </p>
        </Link>
        <Link to="/admin/reviews">
            <p>
                {/* <MdRateReview/>  */}
                Reviews
            </p>
        </Link>


    </div>
  )
}

export default Sidebar