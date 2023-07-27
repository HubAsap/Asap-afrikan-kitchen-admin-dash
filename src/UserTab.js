import { UserCheck } from "react-feather";
import { TrendingUp } from "react-feather";
import React, { useState, useEffect } from "react";

function UserTab(props) {
  const [search_keyword_value, setKeywordValue] = useState("");
  const [search_status_value, setStatusValue] = useState("all");
  const [search_category_value, setCategoryValue] = useState("0");
  const [search_limit_value, setLimitValue] = useState("25");
  var [customersDataList, setCustomersDataList] = useState([]);

  const handleSearch_KeywordChange = (event) => {
    setKeywordValue(event.target.value);
  };

  const handleSearch_StatusChange = (event) => {
    setStatusValue(event.target.value);
  };

  const handleSearch_CategoryChange = (event) => {
    setCategoryValue(event.target.value);
  };

  const handleSearch_LimitChange = (event) => {
    setLimitValue(event.target.value);
  };

  const resetfield = () => {
    setKeywordValue("");
    setStatusValue("all");
    setCategoryValue("0");
    setLimitValue("25");
  };

  const handleFetchCustomers = async (event) => {
    customersDataList = [];

    //try {
    var keywordAttribute =
      search_keyword_value.trim() === ""
        ? ""
        : "&keyword=" + search_keyword_value;
    var statusAttribute = "&status=" + search_status_value;
    var categoryAttribute = "&category=" + search_category_value;
    var limitAttribute = "&limit=" + search_limit_value;

    const apiEndpoint =
      "http://afrikankitchen-001-site1.gtempurl.com/api/Main/FetchCustomers?privatekey=12345" +
      keywordAttribute +
      statusAttribute +
      categoryAttribute +
      limitAttribute;
    const response = await fetch(apiEndpoint, {
      referrerPolicy: "unsafe-url",
    });

    const data = await response.json();
    setCustomersDataList(data);
    console.log("Customers apiEndpoint:", apiEndpoint);
    console.log("Customers:", data);
    //} catch {}
  };

  useEffect(() => {
    handleFetchCustomers();
  }, []);

  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-6 col-lg-4">
          <div className="shadow-sm p-4 mb-5 bg-white rounded border border-1 rounded-5">
            <div>
              <div className="row">
                <div className="col-10">
                  <div className="shadow-sm p-3 mb-3 bg-white rounded border border-1 rounded-3 icon-container">
                    <UserCheck className="feather-16" />
                  </div>
                </div>
                {/* <div className="col-1 pt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-three-dots-vertical"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                  </svg>
                </div> */}
              </div>
            </div>
            <div>
              <p className="fw-bold text-muted small-font-size">
                Total customers
              </p>
            </div>
            <div>
              <div className="row">
                <div className="col-4">
                  <h2 className="fw-bold">{props.totalCustomers}</h2>
                </div>
                <div className="col-8 pt-2">
                  <p className="text-end">
                    <TrendingUp color="green" className="feather-16" />
                    &nbsp;
                    <span className="text-success fw-bold">0%</span>
                    vs last month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-lg-4">
          <div className="shadow-sm p-4 mb-5 bg-white rounded border border-1 rounded-5">
            <div>
              <div className="row">
                <div className="col-10">
                  <div className="shadow-sm p-3 mb-3 bg-white rounded border border-1 rounded-3 icon-container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-bookmark-check"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                      />
                      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                    </svg>
                  </div>
                </div>
                {/* <div className="col-1 pt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-three-dots-vertical"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                  </svg>
                </div> */}
              </div>
            </div>
            <div>
              <p className="fw-bold text-muted small-font-size">Total orders</p>
            </div>
            <div>
              <div className="row">
                <div className="col-4">
                  <h2 className="fw-bold">{props.totalOrders}</h2>
                </div>
                <div className="col-8 pt-2">
                  <p className="text-end">
                    <TrendingUp color="green" className="feather-16" />
                    &nbsp;
                    <span className="text-success fw-bold">0%</span>
                    vs last month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-12 col-lg-4">
          <div className="shadow-sm p-4 mb-5 bg-white rounded border border-1 rounded-5">
            <div>
              <div className="row">
                <div className="col-10">
                  <div className="shadow-sm p-3 mb-3 bg-white rounded border border-1 rounded-3 icon-container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-check-circle"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                    </svg>
                  </div>
                </div>
                {/* <div className="col-2 pt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-three-dots-vertical"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                  </svg>
                </div> */}
              </div>
            </div>
            <div>
              <p className="fw-bold text-muted small-font-size">
                Delivered orders
              </p>
            </div>
            <div>
              <div className="row">
                <div className="col-4">
                  <h2 className="fw-bold">{props.totalDeliveredOrders}</h2>
                </div>
                <div className="col-8 pt-2">
                  <p className="text-end">
                    <TrendingUp color="green" className="feather-16" />
                    &nbsp;
                    <span className="text-success fw-bold">0%</span>
                    vs last month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6 col-sm-6 col-md-9 col-lg-9 pl-5">
          <h5 className="fw-bold pl">Users</h5>
          <p className="pl">Manage your users</p>
        </div>
        <div className="col-6 col-sm-6 col-md-3 col-lg-3">
          <button
            type="button"
            className="btn shadow-sm p-3 mb-3 bg-white rounded border border-1 rounded-2 flr"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-download"
              viewBox="0 0 16 16"
            >
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
              <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
            </svg>
            &nbsp; Download all
          </button>
        </div>
      </div>
      <div className="shadow-sm p-4 h-50 bg-white rounded border border-1 rounded-5">
        <div className="row">
          <div className="col-md-3 col-sm-12 col-12 mt-2">
            <div className="form-group">
              <label for="exampleInputEmail1" className="text-muted mb-1">
                Search for users
              </label>
              <div className="input-group">
                <span className="input-group-prepend">
                  <button
                    onClick={handleFetchCustomers}
                    className="btn btn-outline-secondary bg-white border-end-0 border h-100 ms-n3"
                    type="submit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </button>
                </span>
                <input
                  type="text"
                  value={search_keyword_value}
                  onChange={handleSearch_KeywordChange}
                  className="form-control form-item-height border-start-0"
                  id="search_keyword"
                  aria-describedby="emailHelp"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          <div className="col-md-2 col-sm-6 col-6 mt-2">
            <div className="form-group ">
              <label for="inputState" className="text-muted mb-1">
                Status
              </label>
              <select
                id="search_status"
                value={search_status_value}
                onChange={handleSearch_StatusChange}
                className="form-control form-item-height"
              >
                <option value={"all"} selected>
                  Choose...
                </option>
                <option value={"active"}>Active Users</option>
                <option value={"suspended"}>Suspended Users</option>
                <option value={"deleted"}>Deleted Users</option>
              </select>
            </div>
          </div>
          <div className="col-md-2 col-sm-6 col-6 mt-2">
            <div className="form-group">
              <label for="inputState" className="text-muted mb-1">
                Category
              </label>
              <select
                id="search_category"
                value={search_category_value}
                onChange={handleSearch_CategoryChange}
                className="form-control form-item-height"
              >
                <option value={"0"} selected>
                  Choose...
                </option>
                <option value={"1"}>Business Verified</option>
                <option value={"2"}>Business Un-Verified</option>
                <option value={"3"}>All Registered Today</option>
              </select>
            </div>
          </div>
          <div className="col-md-2 col-sm-8 col-8 mt-2">
            <div className="form-group">
              <label for="inputState" className="text-muted mb-1">
                Rows
              </label>
              <select
                id="search_category"
                value={search_limit_value}
                onChange={handleSearch_LimitChange}
                className="form-control form-item-height"
              >
                <option value={"25"} selected>
                  25
                </option>
                <option value={"5"}>50</option>
                <option value={"100"}>100</option>
                <option value={"500"}>500</option>
                <option value={"1000"}>1000</option>
              </select>
            </div>
          </div>
          <div className="col-md-3 col-sm-4 col-4">
            <button
              type="button"
              onClick={resetfield}
              className="btn shadow-sm plr fw-bold bg-white rounded border border-1 rounded-2 flr form-item-height"
              style={{ marginTop: "35px" }}
            >
              Clear all
            </button>
          </div>
        </div>
        <br />
        <div className="table-responsive mt4">
          <table className="table table-striped" style={{ overflow: "auto" }}>
            <thead>
              <tr>
                <th scope="col">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Phone</th>
                <th scope="col">Gender</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {customersDataList.map((customer) => (
                <tr key={customer.id}>
                  <th scope="row">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </th>
                  <td scope="col">{customer.name}</td>
                  <td scope="col">{customer.email}</td>
                  <td scope="col">{customer.address}</td>
                  <td scope="col">{customer.phone}</td>
                  <td scope="col">{customer.gender}</td>
                  <td scope="col">
                    {customer.status === "active" ? (
                      <div
                        type="button"
                        class="btn btn-outline-success btn-small fw-bold"
                        style={{ borderRadius: "50px" }}
                      >
                        {customer.status}
                      </div>
                    ) : (
                      <div
                        type="button"
                        class="btn btn-outline-secondary btn-small fw-bold"
                        style={{ borderRadius: "50px" }}
                      >
                        {customer.status}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default UserTab;
