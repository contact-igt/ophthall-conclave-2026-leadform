import { useFormik } from "formik";
import styles from "./styles.module.css";
import * as Yup from "yup";
import { useState } from "react";
import Button from "../Button";
import { ChevronDown } from "lucide-react";

import { saveAs } from "file-saver";

const Form = ({ handleTogglecontactForm }) => {
  const [loading, setisLoading] = useState(false);
  const agenda_url = localStorage.getItem("agenda_url");

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      is_doctor: "",
      designation: "",
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
      is_doctor: Yup.string().required(
        "Please select whether you are a doctor"
      ),

      designation: Yup.string()
        .required("Designation is required")
        .matches(/^[A-Za-z\s'.-]+$/, "Enter a valid designation (letters only)")
        .max(50, "Designation is too long"),
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
          is_doctor: value.is_doctor,
          designation: value.designation,
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
          "https://script.google.com/macros/s/AKfycbyQdLWypKsHpF3w02YfVBvXcMI6iHhhwjGViBfINCsZUxEHMdqoZgC3psX2xRefyLMSmg/exec",
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

        if (agenda_url) {
          console.log("d,md,", `${agenda_url}`);

          const saveFile = () => {
            saveAs(
              `${agenda_url}`,
              "Ophthall 2026 Conclave Conference Program Agenda.pdf"
            );
          };
          saveFile();
        }

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
          <div className={styles.selectContainer}>
            <select
              id="is_doctor"
              className={`${styles.customSelect} ${
                formik.values.is_doctor ? styles.hasValue : ""
              }`}
              {...formik.getFieldProps("is_doctor")}
            >
              <option value="" disabled hidden></option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
            <label htmlFor="is_doctor" className={styles.floatingLabel}>
              Are you a Doctor?
            </label>
            <span className={styles.selectArrow}>
              {" "}
              <ChevronDown size={18} color="#00a0e3" />
            </span>
          </div>

          {formik.touched.is_doctor && formik.errors.is_doctor && (
            <small className="text-danger">{formik.errors.is_doctor}</small>
          )}
        </div>
        <div className={styles.inputgrp}>
          <input
            type="text"
            className="form-control"
            placeholder="Designation"
            {...formik.getFieldProps("designation")}
          />
          {formik.touched.designation && formik.errors.designation && (
            <small className="text-danger">{formik.errors.designation}</small>
          )}
        </div>
        <div className={styles.inputgrp}>
          <Button
            disabled={loading}
            title={loading ? "Submitting..." : "Submit"}
            bgcolor="#00a0e3"
            colors="#fff"
            type="submit"
            url={agenda_url ? agenda_url : ""}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
