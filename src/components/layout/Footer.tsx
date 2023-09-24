import React from "react";

import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t, i18n } = useTranslation();

  return (
    <div className="position-absolute bottom-0 vw-100 z-index-50 bg-white">
      <div className="d-flex p-4 justify-content-between w-full footer">
        <div>
          &copy; {t("copyright")}{" "}
          <strong>
            <span>Chenel</span>
          </strong>
          . {t("all_rights_reserved")}
        </div>
        <div>
          <strong>{t("phone")}:</strong> +1 5589 55488 55
        </div>
        <div>
          <strong>{t("email")}:</strong> info@example.com
        </div>
        <div>www.reallygreatsite.com</div>
      </div>
    </div>
  );
}
