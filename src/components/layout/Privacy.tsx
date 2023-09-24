import React from "react";

import { useTranslation } from "react-i18next";

export default function Privacy() {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="card-body position-relative"
      style={{ height: "632px", overflow: "auto", padding: "42px" }}
    >
      <h3 className="text-center">{t("privacy_note_header")}</h3>{" "}
      {t("privacy_note_summary")}
      <h6 className="pt-4">{t("privacy_note_1")}</h6>
      <div>{t("privacy_note_1_1")}</div>
      <div>{t("privacy_note_1_2")}</div>
      <div>{t("privacy_note_1_3")}</div>
      <div>{t("privacy_note_1_4")}</div>
      <div>{t("privacy_note_1_5")}</div>
      <div>{t("privacy_note_1_6")}</div>
      <div>{t("privacy_note_1_7")}</div>
      <h6 className="pt-4">{t("privacy_note_2")}</h6>
      <div>{t("privacy_note_2_1")}</div>
      <div>{t("privacy_note_2_2")}</div>
      <div>{t("privacy_note_2_3")}</div>
      <div>{t("privacy_note_2_4")}</div>
      <div>{t("privacy_note_2_5")}</div>
      <div>{t("privacy_note_2_6")}</div>
      <div>{t("privacy_note_2_7")}</div>
      <h6 className="pt-4">{t("privacy_note_3")}</h6>
      <div>{t("privacy_note_3_1")}</div>
      <div>{t("privacy_note_3_2")}</div>
      <div>{t("privacy_note_3_3")}</div>
      <div>{t("privacy_note_3_4")}</div>
      <div>{t("privacy_note_3_5")}</div>
      <h6 className="pt-4">{t("privacy_note_4")}</h6>
      <h6 className="pt-4">{t("privacy_note_5")}</h6>
      <h6 className="pt-4">{t("privacy_note_6")}</h6>
      <h6 className="pt-4">{t("privacy_note_7")}</h6>
      <div className="pt-4">{t("privacy_note_8")}</div>
      <div>{t("privacy_note_9")}</div>
    </div>
  );
}
