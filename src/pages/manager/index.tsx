import React, { useState } from "react";
import UserInfo from "../../components/managers/UserInfo";
import Sidebutton from "../../components/managers/Sidebutton";
import TopSideBar from "../../components/common/TopSideBar";
import Clerks from "../../components/managers/Clerks";
import Writers from "../../components/managers/Writers";
import Docs from "../../components/managers/Docs";
import Editor from "../../components/common/ManagerEditor";

export default function ManagerDashboard() {
  const [page, setPage] = useState('info');
  return (
    <main id="main">
      <section className="section-bg">
        {/* <div className="container"> */}
          <div className="row">
            <div className="col-lg-2 mt-5">
              <Sidebutton page={page} setPage={setPage}/>
            </div>
            <div className="col-lg-9">
              <TopSideBar />
              {page == 'info' && (<UserInfo setPage={setPage} />)}
              {page == 'clerk' && (<Clerks />)}
              {page == 'writer' && (<Writers />)}
              {page == 'doc' && (<Docs />)}
              {page == 'editor' && (<Editor />)}

              
              
            </div>
            <div className="col-lg-1 mt-5">
            </div>
          </div>
        {/* </div> */}
      </section>
    </main>
  );
}
