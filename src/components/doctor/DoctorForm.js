import React from "react";

const DoctorForm = ({ onSubmit, onCancel, data }) => {
  return (
    <div className="form">
      <form onSubmit={onSubmit}>
        <input type="hidden" id="id" value={data?.id} />
        <div className="form-row">
          <InputField
            id="name"
            value={data?.name}
            label="Full Name"
            width={4}
          />
          <InputField id="age" type="number" value="10" label="Age" width={4} />
          <InputField
            id="phone"
            type="number"
            value={data?.phone}
            label="Phone"
            width={4}
          />
          <div className="form-group form-group-1 col-4">
            <label htmlFor="gender">Gender</label>
            <div className="form-control" style={{ border: 0 }}>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  className="custom-control-input"
                />
                <label className="custom-control-label" for="male">
                  Male
                </label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  className="custom-control-input"
                />
                <label className="custom-control-label" for="female">
                  Female
                </label>
              </div>
            </div>
          </div>
          <InputField
            id="nmcNo"
            value={data?.nmcNo}
            label="NMC Number"
            width={4}
          />
          <InputField
            id="noOfCases"
            type="number"
            value={data?.noOfCases}
            label="No. of Cases"
            width={4}
          />
          <InputField
            id="qualification"
            value={data?.qualification}
            label="Qualifications"
            width={4}
          />
          <InputField
            id="worksAt"
            value={data?.workAt}
            label="Works At"
            width={4}
          />
          <InputField
            id="password"
            type="password"
            value={data?.password}
            label="Password"
            width={4}
          />
        </div>
        <div className="form-row">
          <button
            className="btn btn-sm btn-primary col-2 m-2"
            style={{ height: 40 }}
          >
            Save
          </button>
          <button
            className="btn btn-sm btn-danger col-2 m-2"
            style={{ height: 40 }}
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default DoctorForm;

const InputField = ({ id, value, label, width = 6, ...rest }) => (
  <div className={`form-group form-group-1 col-${width}`}>
    <label htmlFor={id}>{label}</label>
    <input className="form-control" id={id} defaultValue={value} {...rest} />
  </div>
);
