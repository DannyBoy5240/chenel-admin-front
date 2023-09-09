import React, { useState } from "react";
import SideButton from "../../components/writerprofiles/Sidebutton";
import Home from "../../components/writerprofiles/Home";
import ManageProfile from "../../components/writerprofiles/ManageProfile";

export default function WriterProfiles() {
  const [page, setPage] = useState("info");
  console.log(page)
  return (
    <main id="main">
      <section className="section-bg">
        <div className="row">
          <div className="col-lg-2 mt-5">
            <SideButton page={page} setPage={setPage} />
          </div>
          <div className="col-lg-9">
            {page == "info" && <Home setPage={setPage} />}
            {page == "profile" && <ManageProfile />}
            <div className="col-lg-1 mt-5"></div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </main>
  );
}
