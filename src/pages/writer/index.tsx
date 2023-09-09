import React, { useState } from "react";
import SearchBar from "../../components/common/SearchBar";
import RightSideBar from "../../components/writers/RightSideBar";
import Editor from "../../components/writers/Editor";

export default function WriterDashboard(props: any) {
  const [name, setName] = useState<string>('Name');
  return (
    <main id="main">
      <section className="section-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <SearchBar />
              <RightSideBar setName={setName} name={name} />
            </div>
            <div className="col-lg-8">
              <Editor name={name} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
