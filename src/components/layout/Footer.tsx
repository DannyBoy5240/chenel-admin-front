import React from "react";

import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-white">
      <div className="container-fluid">
        <div className="row py-3">
          <div className="col-12 col-md-6 col-lg-3 text-center">
            &copy; Copyright <strong><span>Chenel</span></strong><small>. All Rights Reserved</small>
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-center">
            <strong>Phone:</strong> +1 239-657-7000
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-center">
            <strong>Email:</strong> Taxgration@gmail.com
          </div>
          <div className="col-12 col-md-6 col-lg-3 text-center">
            chenelsuperservice.com
          </div>
        </div>
      </div>
    </div>
  );
}
