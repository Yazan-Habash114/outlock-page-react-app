import React from "react";
import './GeneralStyle.css';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <>
      <div className="page d-flex">
        <div className="sidebar  p-20 p-relative">
          <ul>
            <li>
              <a
                className="active d-flex align-center fs-14 c-black rad-6 p-10"
                href="/"
              >
                <i className="fa-solid fa-chevron-right" />
                <span>Favorites</span>
              </a>
            </li>
            <li>
              <a
                className="d-flex align-center fs-14 c-black rad-6 p-10"
                href="/"
              >
                <i className="fa-solid fa-chevron-down" />
                <span>Folders</span>
              </a>
            </li>
            <li>
              <a
                className="d-flex align-center fs-14 c-black rad-6 p-10"
                href="/"
              >
                <i className="fa-solid fa-inbox" />
                <span>Inbox</span>
              </a>
            </li>
            <li>
              <a
                className="d-flex align-center fs-14 c-black rad-6 p-10"
                href="/"
              >
                <i className="fa-solid fa-ban" />
                <span>Junk Email</span>
              </a>
            </li>
            <li>
              <a
                className="d-flex align-center fs-14 c-black rad-6 p-10"
                href="/"
              >
                <i className="fa-solid fa-pen-ruler" />
                <span>Drafts</span>
              </a>
            </li>
            <li>
              <a
                className="d-flex align-center fs-14 c-black rad-6 p-10"
                href="/"
              >
                <i className="fa-regular fa-paper-plane" />
                <span>Sent Items</span>
              </a>
            </li>
            <li>
              <a
                className="d-flex align-center fs-14 c-black rad-6 p-10"
                href="/"
              >
                <i className="fa-regular fa-clock" />
                <span>Scheduled</span>
              </a>
            </li>
            <li>
              <a
                className="d-flex align-center fs-14 c-black rad-6 p-10"
                href="/"
              >
                <i className="fa-regular fa-trash-can" />
                <span>Deleted Items</span>
              </a>
            </li>
            <li>
              <a
                className="d-flex align-center fs-14 c-black rad-6 p-10"
                href="/"
              >
                <i className="fa-solid fa-box-archive" />
                <span>Archive</span>
              </a>
            </li>
            <li>
              <a
                className="d-flex align-center fs-14 c-black rad-6 p-10"
                href="/"
              >
                <i className="fa-regular fa-note-sticky" />
                <span>Notes</span>
              </a>
            </li>
            <li className="border-top mt-70">
              <div className="divider-custom-line" />
            </li>
            <div className="down-icon">
              <li className="flex-icon mb-1 ms-1 mt-10">
                <a className="fs-14 c-black  p-10" href="/">
                  <i className="fa-regular fa-envelope" />
                </a>
                <a className="fs-14 c-black p-10" href="/">
                  <i className="fa-regular fa-calendar-days" />
                </a>
                <a className="fs-14 c-black  p-10" href="/">
                  <i className="fa-solid fa-user-group" />
                </a>
                <a className="fs-14 c-black  p-10" href="/">
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
