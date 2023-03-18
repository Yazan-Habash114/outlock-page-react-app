import React from "react";
import  styles from "./GeneralStyle.module.css";
import  styless from "./Sidebar.module.css";

const Sidebar = ({ menuItems }) => {
  return (
    <>
      <div className={`${styless['page']} ${styles['d-flex']}`}>
        <div className={`${styless['sidebar']}  ${styles['p-20']} p-relative`}>
          <ul>

          {menuItems.map((menuItem) => (
  <li key={menuItem.id}>
    <a
      className={`${styles['d-flex']} ${styles['align-center']} fs-14 ${styles['c-black']} rad-6 ${styles['p-10']}`}
      href={menuItem.link}
    >
      <i className={`fa-solid ${menuItem.iconClass}`} />
      <span>{menuItem.name}</span> {/* updated this line */}
    </a>
  </li>
))}
            <li className={`border-top ${styles['mt-30']}`}>
              <div className={`${styless['divider-custom-line']}`} />
            </li>
            <div className={`${styless['down-icon']}`}>
              <li className={`${styless['flex-icon']} ${styles['mb-1']} ${styles['ms-1']} ${styles['mt-10']}`}>
                <a className={`fs-14 ${styles['c-black']}  ${styles['p-10']}`} href="/">
                  <i className="fa-regular fa-envelope" />
                </a>
                <a className={`fs-14 ${styles['c-black']} ${styles['p-10']}`} href="/">
                  <i className="fa-regular fa-calendar-days" />
                </a>
                <a className={`fs-14 ${styles['c-black']} ${styles['p-10']}`} href="/">
                  <i className="fa-solid fa-user-group" />
                </a>
                <a className={`fs-14 ${styles['c-black']} ${styles['p-10']}`} href="/">
                  <i className="fa-solid fa-ellipsis" />
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
