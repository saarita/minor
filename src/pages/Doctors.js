import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import APIServices from "../apiUtils/APIServices";
import DoctorForm from "../components/doctor/DoctorForm";

const Doctor = () => {
  const [doctor, setDoctor] = useState();
  const [doctorList, setDoctorList] = useState();
  const [showDoctorList, setShowDoctorList] = useState(true);

  useEffect(() => {
    if (!!doctorList) {
    } else fetchDoctor();
  }, [doctorList]);
  const api = new APIServices("doctor");

  const fetchDoctor = async () => {
    const { data, success } = await api.get();
    if (success) {
      setDoctorList(data);
    }
  };

  const onCreate = (data) => {};

  const onUpdate = (data) => {};

  const onDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete doctor id:${id}`)) {
      alert(`Doctor deleted successfully. ID:${id}`);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setDoctor(undefined);
    const form = e.target;
    let isValid = true;
    let data = {};
    Array.from(form.elements).forEach((a) => {
      if (a.checkValidity()) {
        if (!!a.id) data[a.id] = a.value;
      } else isValid = false;
    });
    if (!!isValid) !!data.id ? onUpdate(data) : onCreate(data);
  };

  return (
    <section className="d-flex justify-content-between">
      <div className="col col-2">
        <img src={require("../assets/images/doctor.png")} alt="dp" />
      </div>

      <div className="col col-9 mt-4 bg-white p-4">
        <div
          className="col col-12 p-0"
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0px 0px 10px 0px",
          }}
        >
          <div className="col col-3 h3 p-0">
            Doctor {!!showDoctorList ? "List" : "Form"}
          </div>
          <button
            className={`col col-2 btn btn-${
              showDoctorList ? "success" : "danger"
            } btn-sm m-0`}
            style={{ height: 40 }}
            onClick={(_) => setShowDoctorList(!showDoctorList)}
          >
            {showDoctorList ? "Add new Doctor" : "Back"}
          </button>
        </div>
        {showDoctorList ? (
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">NMC No.</th>
                <th scope="col">Full Name</th>
                <th scope="col">Qualification</th>
                <th scope="col">Works At</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1234</th>
                <td>Mark</td>
                <td>MD</td>
                <td>Fewa City</td>
                <td>
                  <FontAwesomeIcon
                    icon={faPen}
                    size="lg"
                    color="blue"
                    title="Edit"
                    onClick={(_) => {
                      setShowDoctorList(false);
                      setDoctor();
                    }}
                  />
                  &nbsp; &nbsp;
                  <FontAwesomeIcon
                    icon={faTrash}
                    size="lg"
                    color="red"
                    title="Delete"
                    onClick={(_) => onDelete(10)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <DoctorForm
            onSubmit={submitHandler}
            onCancel={(_) => {
              setShowDoctorList(true);
              setDoctor();
            }}
            data={doctor}
          />
        )}
      </div>
    </section>
  );
};

export default Doctor;
