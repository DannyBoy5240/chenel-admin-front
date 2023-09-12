import React from "react";
import { useState, useEffect } from "react";

import tempAvatar from "../../../assets/img/avatar.jpg";

export default function WriterInfo(props: any) {
  const [key, setKey] = useState("home");

  const [tempWriterInfo, setTempWriterInfo] = useState({
    name: "writer1",
    gender: "male",
    email: "writer1@gmail.com",
    phone: "+1 234 56789",
    address: "abddefghiowheiowh",
    avatar: "avatar.png",
    regtime: "08:20 Sep. 5 2023",
  });

  return (
    <div className="d-flex">
      <div className="col-sm-12 col-lg-6 text-center py-2">
        <img src={tempAvatar} style={{ height: "60%" }} />
      </div>
      <div className="col-sm-12 col-lg-6 pt-4" style={{ fontSize: "24px" }}>
        <div className="py-3">Name : {tempWriterInfo.name}</div>
        <div className="py-3">Gender : {tempWriterInfo.gender}</div>
        <div className="py-3">Email : {tempWriterInfo.email}</div>
        <div className="py-3">Phone : {tempWriterInfo.phone}</div>
        <div className="py-3">Address : {tempWriterInfo.address}</div>
        <div className="py-3">Registration Time : {tempWriterInfo.regtime}</div>
      </div>
    </div>
  );
}
