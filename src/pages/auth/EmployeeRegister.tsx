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

  const [selectedImage, setSelectedImage] = useState(null);

  const genderMaleRef = useRef<HTMLInputElement>(null);
  const genderFemaleRef = useRef<HTMLInputElement>(null);
  const birthdayRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const relationshipRef = useRef<HTMLInputElement>(null);

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

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];

    setSelectedImage(file);
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
        addressRef.current &&
        relationshipRef &&
        relationshipRef.current
      )
    ) {
      return;
    }

    // empty field exception
    if (
      birthdayRef.current.value === "" ||
      phoneRef.current.value === "" ||
      addressRef.current.value === "" ||
      relationshipRef.current.value === ""
    ) {
      setRegisterError(t("all_the_fields_must_be_filled"));
      return;
    }

    // passport upload checking
    if (!selectedImage) {
      setRegisterError(t("passport_upload_failed"));
      return;
    }

    // get values
    const curGender = genderMaleRef.current.checked; // true: male, false: female
    const curBirthday = birthdayRef.current.value;
    const curPhone = phoneRef.current.value;
    const curAddress = addressRef.current.value;
    const curRelationship = relationshipRef.current.value;

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
      relationship: curRelationship,
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
          setRegisterError(t("register_failed_failed"));
          flag = false;
          return;
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
        return;
      });

    if (!flag) return;

    // Passport Upload
    const formData = new FormData();
    formData.append("passport", selectedImage);
    formData.append("email", context.email);

    try {
      const response = await axios.post(
        `${BACKEND_URL}/users/upload/passport`,
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

  return (
    <div className="d-flex align-items-center vh-100">
      <div className="container">
        <div className="card register-card">
          <div className="card-body">
            {/* <div className="brand-wrapper">
                  <img
                    src="http://195.201.246.182:3000/assets/img/logo.png"
                    alt="logo"
                    className="logo"
                  />
                </div> */}
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
              <div className="col-6 form-group">
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
              </div>
              {/* Passport */}
              <div className="col-6 form-group pt-4">
                <label className="custom-file-upload">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                  {t("passport_upload")}
                </label>

                {selectedImage && (
                  <div className="p-2">
                    <img
                      src={URL.createObjectURL(selectedImage)}
                      alt="Selected"
                      style={{ maxWidth: "120px" }}
                    />
                  </div>
                )}
              </div>
              {/* Employee Type */}
              <div className="col-12 form-group">
                <div className="pb-2">
                  <label htmlFor="gender" className="sr-only">
                    {t("employee_type")}
                  </label>
                </div>
                <div className="w-100 d-flex justify-content-around">
                  <div>
                    <input
                      type="radio"
                      id="e_admin"
                      name="employee"
                      value="e_admin"
                    />
                    <label htmlFor="e_admin">{t("admin")}</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="e_manager"
                      name="employee"
                      value="e_manager"
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
              <a href="/login" className="text-reset">
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
