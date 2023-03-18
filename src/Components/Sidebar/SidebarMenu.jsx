import React from 'react'
import Sidebar from "./Sidebar";
const menuItemList = [
    {
      
      name: "Favorites",
      iconClass: "fa-solid fa-chevron-right",
      link: "/",
      active: true,
    },
    {
      name: "Folders",
      iconClass: "fa-solid fa-chevron-down",
      link: "/",
    },
    {
      name: "Inbox",
      iconClass: "fa-solid fa-inbox",
      link: "/",
    },
    {
      name: "Junk Email",
      iconClass: "fa-solid fa-ban",
      link: "/",
    },
    {
      name: "Drafts",
      iconClass: "fa-solid fa-pen-ruler",
      link: "/",
    },
    {
      name: "Sent Items",
      iconClass: "fa-regular fa-paper-plane",
      link: "/",
    },
    {
      name: "Scheduled",
      iconClass: "fa-regular fa-clock",
      link: "/",
    },
    {
      name: "Deleted Items",
      iconClass: "fa-regular fa-trash-can",
      link: "/",
    },
    {
      name: "Archive",
      iconClass: "fa-solid fa-box-archive",
      link: "/",
    },
    {
      name: "Notes",
      iconClass: "fa-regular fa-note-sticky",
      link: "/",
    },
    ];


const SidebarMenu = () => {
  return (
<>

<Sidebar menuItems={menuItemList} />

</>  )
}

export default SidebarMenu;