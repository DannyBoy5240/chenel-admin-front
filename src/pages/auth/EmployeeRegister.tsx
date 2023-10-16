import React, { useState, useRef, useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import axios from "axios";
import { BACKEND_URL } from "../../constants";

import "./auth.css";

import { useTranslation } from "react-i18next";

export default function EmployeeRegister() {
  const location = useLocation();
  const context = location.state;

  const navigate = useNavigate();

  const { t, i18n } = useTranslation();

  const [selectedPassportImage, setSelectedPassportImage] = useState(null);
  const [selectedWorkpermitImage, setSelectedWorkpermitImage] = useState(null);
  const [selectedSecurityImage, setSelectedSecurityImage] = useState(null);

  const genderMaleRef = useRef<HTMLInputElement>(null);
  const genderFemaleRef = useRef<HTMLInputElement>(null);
  const birthdayRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  // const relationshipRef = useRef<HTMLInputElement>(null);

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const [registerError, setRegisterError] = useState("");

  useEffect(() => {
    if (genderMaleRef && genderMaleRef.current) {
      genderMaleRef.current.setAttribute("checked", "true");
    }
    if (document.getElementById("e_admin"))
      document.getElementById("e_admin")?.setAttribute("checked", "true");
  }, []);

  const handlePassportImageChange = (event: any) => {
    const file = event.target.files[0];

    setSelectedPassportImage(file);
  };

  const handleWorkPermitImageChange = (event: any) => {
    const file = event.target.files[0];

    setSelectedWorkpermitImage(file);
  };

  const handleSecurityImageChange = (event: any) => {
    const file = event.target.files[0];

    setSelectedSecurityImage(file);
  };

  const documentUploadHandler = async (image: any, email: any, type: any) => {
    const formData = new FormData();
    formData.append(type, image || "");
    formData.append("email", email);

    try {
      const response = await axios.post(
        `${BACKEND_URL}/users/upload/${type}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // Handle the response from the server (e.g., display a success message)
      console.log("File uploaded successfully", response.data);
      // Clear the uploaded file
    } catch (error) {
      console.error("Error uploading file", error);
    }
  };

  const registerHandler = async () => {
    // null exception handler
    if (
      !(
        genderMaleRef &&
        genderMaleRef.current &&
        genderFemaleRef &&
        genderFemaleRef.current &&
        birthdayRef &&
        birthdayRef.current &&
        phoneRef &&
        phoneRef.current &&
        addressRef &&
        addressRef.current
      )
    ) {
      return;
    }

    // empty field exception
    if (
      birthdayRef.current.value === "" ||
      phoneRef.current.value === "" ||
      addressRef.current.value === ""
    ) {
      setRegisterError(t("all_the_fields_must_be_filled"));
      return;
    }

    // work documents upload checking
    // if (!selectedPassportImage) {
    //   setRegisterError(t("passport_upload_failed"));
    //   return;
    // }
    // if (!selectedWorkpermitImage) {
    //   setRegisterError(t("workpermit_upload_failed"));
    //   return;
    // }
    // if (!selectedSecurityImage) {
    //   setRegisterError(t("security_upload_failed"));
    //   return;
    // }

    // get values
    const curGender = genderMaleRef.current.checked; // true: male, false: female
    const curBirthday = birthdayRef.current.value;
    const curPhone = phoneRef.current.value;
    const curAddress = addressRef.current.value;
    // const curRelationship = relationshipRef.current.value;

    // Document Required Validation : at least 1 required
    let documentsCount = 0;
    if (selectedPassportImage && selectedPassportImage !== "") documentsCount++;
    if (selectedWorkpermitImage && selectedWorkpermitImage !== "")
      documentsCount++;
    if (selectedSecurityImage && selectedSecurityImage !== "") documentsCount++;

    if (documentsCount === 0) {
      setRegisterError(t("document_required_at_least_one"));
      return;
    }

    const selectedEmployee = document.querySelector(
      'input[name="employee"]:checked'
    ) as HTMLInputElement;
    const curEmployeeType = selectedEmployee.value;

    // Register Employee
    const data = {
      email: context.email,
      fullName: context.name,
      gender: curGender,
      birthday: curBirthday,
      phoneNumber: curPhone,
      address: curAddress,
      relationship: "",
      roles:
        curEmployeeType === "e_admin"
          ? "ADMIN"
          : curEmployeeType === "e_manager"
          ? "MANAGER"
          : curEmployeeType === "e_writer"
          ? "WRITER"
          : "CLERK",
      password: context.password,
    };

    let flag = true;

    const url = `${BACKEND_URL}/users/SignUp/employee`;
    await axios
      .post(url, data)
      .then((response) => {
        console.log("Response: ", response.data);
        if (response.data.success == true) {
          navigate("/login");
        } else {
          setRegisterError(response.data.message);
          flag = false;
          return;
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
        return;
      });

    if (!flag) return;

    // Documents Upload
    if (selectedPassportImage && selectedPassportImage !== "")
      await documentUploadHandler(
        selectedPassportImage,
        context.email,
        "passport"
      );
    if (selectedWorkpermitImage && selectedWorkpermitImage !== "")
      await documentUploadHandler(
        selectedWorkpermitImage,
        context.email,
        "workpermit"
      );
    if (selectedSecurityImage && selectedSecurityImage !== "")
      await documentUploadHandler(
        selectedSecurityImage,
        context.email,
        "security"
      );
  };

  const getFileNameExtension = (fileName: string): string | null => {
    const parts = fileName.split(".");
    if (parts.length > 1) {
      return parts[parts.length - 1];
    }
    return null; // No extension found
  };

  return (
    <div className="d-flex align-items-center">
      <div className="container">
        <div className="card register-card">
          <div className="card-body">
            <p className="register-card-description">
              {t("register_as_company_employee")}
            </p>
            <div className="row">
              {/* Email */}
              <div className="col-6 form-group">
                <label htmlFor="email" className="sr-only">
                  {t("email")}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={context?.email}
                  disabled
                  className="form-control"
                  placeholder={t("email_address")}
                />
              </div>
              {/* Full Name */}
              <div className="col-6 form-group">
                <label htmlFor="name" className="sr-only">
                  {t("full_name")}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={context?.name}
                  disabled
                  className="form-control"
                  placeholder="John Doe"
                />
              </div>
              {/* Gender */}
              <div className="col-6 form-group">
                <div>
                  <label htmlFor="gender" className="sr-only">
                    {t("gender")}
                  </label>
                </div>
                <div className="w-100 d-flex">
                  <div className="w-50 ps-4">
                    <input
                      type="radio"
                      id="gender_male"
                      name="gender"
                      value="gender_male"
                      ref={genderMaleRef}
                    />
                    <label htmlFor="gender_male">{t("male")}</label>
                  </div>

                  <div className="w-50 ps-4">
                    <input
                      type="radio"
                      id="gender_female"
                      name="gender"
                      value="gender_female"
                      ref={genderFemaleRef}
                    />
                    <label htmlFor="gender_female">{t("female")}</label>
                  </div>
                </div>
              </div>
              {/* Birthday */}
              <div className="col-6 form-group">
                <label htmlFor="birthday" className="sr-only">
                  {t("birthday")}
                </label>
                <input
                  type="text"
                  name="birthday"
                  id="birthday"
                  className="form-control"
                  placeholder="01-31-1970"
                  ref={birthdayRef}
                />
              </div>
              {/* Phone Number */}
              <div className="col-6 form-group">
                <label htmlFor="phone" className="sr-only">
                  {t("phone")}
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="form-control"
                  placeholder={t("your_phone_number")}
                  ref={phoneRef}
                />
              </div>
              {/* Address */}
              <div className="col-6 form-group">
                <label htmlFor="address" className="sr-only">
                  {t("address")}
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="form-control"
                  placeholder={t("your_address")}
                  ref={addressRef}
                />
              </div>
              {/* Relationship */}
              {/* <div className="col-6 form-group">
                <label htmlFor="relationship" className="sr-only">
                  {t("relationship")}
                </label>
                <input
                  type="text"
                  name="relationship"
                  id="relationship"
                  className="form-control"
                  placeholder={t("your_relationship_name")}
                  ref={relationshipRef}
                />
              </div> */}
              {/* Work Documents */}
              <div className="col-12 form-group">
                <div className="row">
                  {/* Passport */}
                  <div className="col-12 col-sm-4 py-1 form-group">
                    <label className="custom-file-upload w-100 text-center">
                      <input
                        type="file"
                        accept="image/*, application/pdf"
                        onChange={handlePassportImageChange}
                      />
                      {t("passport_upload")}
                    </label>
                    {selectedPassportImage &&
                      getFileNameExtension(
                        (selectedPassportImage as any).name
                      ) !== "pdf" && (
                        <div className="p-2">
                          <img
                            src={URL.createObjectURL(selectedPassportImage)}
                            alt="Selected"
                            style={{ maxWidth: "120px" }}
                          />
                        </div>
                      )}
                    {selectedPassportImage &&
                      getFileNameExtension(
                        (selectedPassportImage as any).name
                      ) === "pdf" && (
                        <div className="p-2">
                          {(selectedPassportImage as any).name} {t("uploaded")}
                        </div>
                      )}
                  </div>
                  {/* Work Permission */}
                  <div className="col-12 col-sm-4 py-1 form-group">
                    <label className="custom-file-upload w-100 text-center">
                      <input
                        type="file"
                        accept="image/*, application/pdf"
                        onChange={handleWorkPermitImageChange}
                      />
                      {t("workpermit_upload")}
                    </label>
                    {selectedWorkpermitImage &&
                      getFileNameExtension(
                        (selectedWorkpermitImage as any).name
                      ) !== "pdf" && (
                        <div className="p-2">
                          <img
                            src={URL.createObjectURL(selectedWorkpermitImage)}
                            alt="Selected"
                            style={{ maxWidth: "120px" }}
                          />
                        </div>
                      )}
                    {selectedWorkpermitImage &&
                      getFileNameExtension(
                        (selectedWorkpermitImage as any).name
                      ) === "pdf" && (
                        <div className="p-2">
                          {(selectedWorkpermitImage as any).name}{" "}
                          {t("uploaded")}
                        </div>
                      )}
                  </div>
                  {/* Security Card */}
                  <div className="col-12 col-sm-4 py-1 form-group">
                    <label className="custom-file-upload w-100 text-center">
                      <input
                        type="file"
                        accept="image/*, application/pdf"
                        onChange={handleSecurityImageChange}
                      />
                      {t("security_card_upload")}
                    </label>
                    {selectedSecurityImage &&
                      getFileNameExtension(
                        (selectedSecurityImage as any).name
                      ) !== "pdf" && (
                        <div className="p-2">
                          <img
                            src={URL.createObjectURL(selectedSecurityImage)}
                            alt="Selected"
                            style={{ maxWidth: "120px" }}
                          />
                        </div>
                      )}
                    {selectedSecurityImage &&
                      getFileNameExtension(
                        (selectedSecurityImage as any).name
                      ) === "pdf" && (
                        <div className="p-2">
                          {(selectedSecurityImage as any).name} {t("uploaded")}
                        </div>
                      )}
                  </div>
                </div>
              </div>
              {/* Employee Type */}
              <div className="col-12 form-group pt-4">
                <div className="pb-2">
                  <label htmlFor="gender" className="sr-only">
                    {t("employee_type")}
                  </label>
                </div>
                <div className="w-100 d-flex justify-content-around">
                  {/* <div>
                    <input
                      type="radio"
                      id="e_admin"
                      name="employee"
                      value="e_admin"
                    />
                    <label htmlFor="e_admin">{t("admin")}</label>
                  </div> */}
                  <div>
                    <input
                      type="radio"
                      id="e_manager"
                      name="employee"
                      value="e_manager"
                      checked
                    />
                    <label htmlFor="e_manager">{t("manager")}</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="e_writer"
                      name="employee"
                      value="e_writer"
                    />
                    <label htmlFor="e_writer">{t("writer")}</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="e_clerk"
                      name="employee"
                      value="e_clerk"
                    />
                    <label htmlFor="e_clerk">{t("clerk")}</label>
                  </div>
                </div>
              </div>
              {/* Show Error Messages */}
              <div className="py-2 text-danger">{registerError}</div>
              <input
                name="register"
                id="register"
                className="btn btn-block register-btn my-4"
                type="button"
                value="register"
                onClick={() => registerHandler()}
              />
            </div>
            <p className="register-card-footer-text">
              {t("you_already_have_account")}{" "}
              <a onClick={() => navigate("/login")} className="text-reset">
                {t("login_here")}
              </a>
            </p>
            <nav
              className="register-card-footer-nav"
              style={{ textAlign: "center" }}
            >
              <a
                style={{ textDecoration: "none" }}
                onClick={() => navigate("")}
              >
                {t("term_of_use")}
              </a>{" "}
              <a href="#!">{t("privacy_policy")}</a>
            </nav>
          </div>
          {/* <div className="col-md-5">
              <img
                src="http://195.201.246.182:3000/assets/img/signUp.jpg"
                alt="register"
                // className="login-card-img"
                width={555}
              />
            </div> */}
        </div>
      </div>
    </div>
  );
}
