import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import APIServices from "../apiUtils/APIServices";
import NoticeForm from "../components/notice/NoticeForm";

const Notice = () => {
  const [notice, setNotice] = useState();
  const [noticeList, setNoticeList] = useState();
  const [showNoticeList, setShowNoticeList] = useState(true);

  useEffect(() => {
    if (!!noticeList) {
    } else fetchNotice();
  }, [noticeList]);
  const api = new APIServices("notice");

  const fetchNotice = async () => {
    const { data, success } = await api.get();
    if (success) {
      setNoticeList(data);
    }
  };

  const onCreate = (data) => {};

  const onUpdate = (data) => {};

  const onDelete = (id) => {
    if (window.confirm(`Are you sure you want to delete notice id:${id}`)) {
      alert(`Notice deleted successfully. ID:${id}`);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setNotice(undefined);
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
     

      <div className="col col-12 mt-4 bg-white p-4">
        <div
          className="col col-12 p-0"
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0px 0px 10px 0px",
          }}
        >
          <div className="col col-3 h3 p-0">
          Notice {!!showNoticeList ? "List" : "Form"}
          </div>
          <button
            className={`col col-2 btn btn-${
              showNoticeList ? "success" : "danger"
            } btn-sm m-0`}
            style={{ height: 40 }}
            onClick={(_) => setShowNoticeList(!showNoticeList)}
          >
            {showNoticeList ? "Add new Notice" : "Back"}
          </button>
        </div>
        {showNoticeList ? (
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">2076/6/28</th>
                <td>Blood Donation</td>
                <td>Tomorrow at 8 am ,program will be conducted at hsptl chowk.</td>
               
                <td>
                  <FontAwesomeIcon
                    icon={faPen}
                    size="lg"
                    color="blue"
                    title="Edit"
                    onClick={(_) => {
                      setShowNoticeList(false);
                      setNotice();
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
          <NoticeForm
            onSubmit={submitHandler}
            onCancel={(_) => {
              setShowNoticeList(true);
              setNotice();
            }}
            data={notice}
          />
        )}
      </div>
    </section>
  );
};

export default Notice;
