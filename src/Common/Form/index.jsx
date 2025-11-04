import { useFormik } from "formik";
import styles from "./styles.module.css";
import * as Yup from "yup";
import { useState } from "react";
import Button from "../Button";

const Form = ({ handleTogglecontactForm }) => {
  const [loading, setisLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      clinic_name: "",
      medical_council_regno: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is required")
        .matches(/^[A-Za-z\s'.-]+$/, "Enter a valid name"),

      email: Yup.string()
        .email("Enter a valid email address")
        .required("Email is required"),

      mobile: Yup.string()
        .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number")
        .required("Mobile number is required"),

      obg_code: Yup.string()
        .matches(/^[A-Za-z0-9-]*$/, "Enter a valid OBG code")
        .nullable(),

      clinic_name: Yup.string()
        .required("Clinic name is required")
        .max(80, "Clinic name is too long"),

      medical_council_regno: Yup.string()
        .matches(/^[A-Za-z0-9/-]+$/, "Enter a valid registration number"),
    }),
    onSubmit: async (value, Formik) => {
      try {
        setisLoading(true);

        const ipResponse = await fetch("https://api.ipify.org?format=json");
        const ipData = await ipResponse.json();

        const Formdata = {
          name: value.name,
          email: value.email,
          mobile: value.mobile,
          clinic_name: value.clinic_name,
          medical_council_regno: value.medical_council_regno,
          ip_address: ipData.ip,
          utm_source: localStorage.getItem("utm_source"),
          utm_medium: localStorage.getItem("utm_medium"),
          utm_campaign: localStorage.getItem("utm_campaign"),
          utm_term: localStorage.getItem("utm_term"),
          utm_content: localStorage.getItem("utm_content"),
        };

        const params = new URLSearchParams();
        Object.keys(Formdata).forEach((key) => {
          params.append(key, Formdata[key]);
        });

        const res = await fetch(
          "https://script.google.com/macros/s/AKfycbzzcJmxWfD5fKCiz0AcpOnN7rZOAFPKqBLPvKKFum9g_BGxJ7mFWKUayeCMocXzX5GkRg/exec",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: params.toString(),
          }
        );

        if (!res.ok) throw new Error("Submission failed");


        const data = await res.json();

        Formik.resetForm();
        handleTogglecontactForm(false);
        if (window.location !== undefined) {
          window.location.href = "/thank-you";
        }
      } catch (err) {
        console.error("Error:", err);
        handleTogglecontactForm(false);
      } finally {
        setisLoading(false);
      }
    },
  });

  return (
    <div className={styles.formContainer}>
      <div className={styles.formTopic}>
        <h4>Conference Register Form</h4>
        {/* <p>India’s premier ophthalmology conference.</p> */}
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.inputgrp}>
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name && (
            <small className="text-danger">{formik.errors.name}</small>
          )}
        </div>
        <div className={styles.inputgrp}>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email && (
            <small className="text-danger">{formik.errors.email}</small>
          )}
        </div>
        <div className={styles.inputgrp}>
          <input
            type="text"
            className="form-control"
            placeholder="Mobile"
            {...formik.getFieldProps("mobile")}
          />
          {formik.touched.mobile && formik.errors.mobile && (
            <small className="text-danger">{formik.errors.mobile}</small>
          )}
        </div>
        <div className={styles.inputgrp}>
          <input
            type="text"
            className="form-control"
            placeholder="Clinic Name"
            {...formik.getFieldProps("clinic_name")}
          />
          {formik.touched.clinic_name && formik.errors.clinic_name && (
            <small className="text-danger">{formik.errors.clinic_name}</small>
          )}
        </div>
        <div className={styles.inputgrp}>
          <input
            type="text"
            className="form-control"
            placeholder="Medical Council Reg No"
            {...formik.getFieldProps("medical_council_regno")}
          />
          {formik.touched.medical_council_regno && formik.errors.medical_council_regno && (
            <small className="text-danger">{formik.errors.medical_council_regno}</small>
          )}
        </div>
        <div className={styles.inputgrp}>
          <Button
            disabled={loading}
            title={loading ? "Submitting..." : "Submit"}
            bgcolor="#00a0e3"
            colors="#fff"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
