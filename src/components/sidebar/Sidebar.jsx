import React from "react";

import PerfectScrollbar from "react-perfect-scrollbar";

import useSidebar from "../../hooks/useSidebar";
import SidebarFooter from "./SidebarFooter";
import SidebarNav from "./SidebarNav";


const Sidebar = ({ items, showFooter = true }) => {
  const { isOpen } = useSidebar();

  return (
    <nav className={`sidebar ${!isOpen ? "collapsed" : ""}`}>
      <div className="sidebar-content">
        <PerfectScrollbar>
          <a className="sidebar-brand" href="/">
            <span className="align-middle me-3">Marlo</span>
          </a>
          <SidebarNav items={items} />
        </PerfectScrollbar>
      </div>
    </nav>
  );
};

export default Sidebar;
