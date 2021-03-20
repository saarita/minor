import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import APIServices from "../apiUtils/APIServices";
import HospitalForm from "../components/hospital/HospitalForm";

const Hospital = () => {
  const [hospital, setHospital] = useState();
  const [hospitalList, setHospitalList] = useState();
  const [showHospitalList, setShowHospitalList] = useState(true);

  useEffect(() => {
    if (!!hospitalList) {
    } else fetchHospital();
  }, [hospitalList]);
  const api = new APIServices("hospital");

  const fetchHospital = async () => {
    const { data, success } = await api.get();
    if (success) {
      setHospitalList(data);
    }
  };

  const onCreate = (data) => {};

  const onUpdate = (data) => {};

  const onDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete hospital id:${id}`)) {
      alert(`Hospital deleted successfully. ID:${id}`);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setHospital(undefined);
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
      <div className="col col-4">
        <img src={require("../assets/images/hsptl.png")} alt="dp" />
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
            Hospital {!!showHospitalList ? "List" : "Form"}
          </div>
          <button
            className={`col col-2 btn btn-${
              showHospitalList ? "success" : "danger"
            } btn-sm m-0`}
            style={{ height: 40 }}
            onClick={(_) => setShowHospitalList(!showHospitalList)}
          >
            {showHospitalList ? "Add new Hospital" : "Back"}
          </button>
        </div>
        {showHospitalList ? (
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Services</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Manipal</th>
                <td>Fulbari</td>
                <td>All</td>
               
                <td>
                  <FontAwesomeIcon
                    icon={faPen}
                    size="lg"
                    color="blue"
                    title="Edit"
                    onClick={(_) => {
                      setShowHospitalList(false);
                      setHospital();
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
          <HospitalForm
            onSubmit={submitHandler}
            onCancel={(_) => {
              setShowHospitalList(true);
              setHospital();
            }}
            data={hospital}
          />
        )}
      </div>
    </section>
  );
};

export default Hospital;
