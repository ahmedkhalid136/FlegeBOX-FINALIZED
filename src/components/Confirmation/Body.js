import React, { useState, useEffect, useRef } from "react";
var SignaturePad = require("react-signature-pad");

export default function Body(props) {
  const [insuranceNumber, setinsurance] = useState("");
  const [date, setDate] = useState("");
  const [order, setorder] = useState("");
  const [order1, setOrder1] = useState("");
  const [year, setYear] = useState("");
  const [insurance, setInsurance] = useState("");
  useEffect(() => {
    console.log(props, "myProps");
    console.log(props.value, "vlaue");
    console.log(insurance, "Insurance");
    console.log(insuranceNumber, "INusance");
    console.log(year, "year");
    console.log(date, "date");
  });
  let sigpad = useRef({});

  function clear() {
    sigpad.current.clear();
  }
  let newArray = [
    {
      item_name: "",
      quantity: "",
      size: "",
    },
  ];
  useEffect(() => {
    console.log(
      props.value.map((item) => ({
        item_name: item.Name,
        quantity: item.pcs,
        size: item.size,
      })),
      "Dynamic array"
    );

    // console.log(props.value[0].Name,"name of product")
    // console.log(props.value[0].pcs,"name of product")
    // console.log(props.value[0].size,"name of product")
  });

  function sendData(event) {
    event.preventDefault();
    fetch("http://23.88.103.58/api/method/flegeapp.utils.create_patient", {
      method: "POST",
      headers: {
        Authorization: "token e5bc1d9d49b103f:d545e06a0a468ad",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: props.fname,
        last_name: props.lname,
        title: props.title,
        street_name: props.sname,
        street_no: "40",
        date_of_birth: date,
        zip_code: props.zip,
        city: props.city,
        country: props.countryy,
        care_level: props.careLevel,
        care_box: props.value.map((item) => ({
          item_name: item.Name,
          quantity: item.pcs,
          size: item.size,
        })),
        phone_number: props.phone,
        email_address: props.email,
        insurance_company: insurance,
        insurance_number: insuranceNumber,
        year: year,
        note: "Patient from germany",
      }),
    })
      .then((res) => {
        console.log(res.status, "response");
      })
      .catch((e) => {
        console.log(e, "error");
      });
  }

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <form>
      <div className="container" style={{ textAlign: "left" }} id="data-sent">
        <h2>{order}</h2>
        <p>{order1}</p>

        <br />

        <p className="confirmation-text" style={{ color: "black" }}>
          Please complete your information :
        </p>

        <div className="confirmation-background">
          <p className="confirmation-text" style={{ color: "black" }}>
            Insurance Company for the careperson
          </p>
          <select
            className="option-box"
            onChange={(e) => setInsurance(e.target.value)}
            required="required"
          >
            <option value="" disabled selected>
              Insurance
            </option>
            <option value="first-Insurance"> first-Insurance</option>
            <option value="second insurance ">second-insurance</option>
          </select>
          <br />
          <br />
          <div className="row">
            <div className="col-lg-4">
              <input
                required
                className="option-box"
                placeholder="Insurance Number"
                onChange={(e) => setinsurance(e.target.value)}
              />
            </div>
            <div className="col-lg-4">
              <input
                required
                type="text"
                onFocus={(e) => {
                  e.currentTarget.type = "date";
                  e.currentTarget.focus();
                }}
                placeholder="Date"
                className="option-box"
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="col-lg-4">
              <select
                id="year"
                className="option-box"
                name="year"
                onChange={(e) => setYear(e.target.value)}
                required="required"
              >
                <option value="" disabled selected>
                  year
                </option>
                <option value="1940">1940</option>
                <option value="1941">1941</option>
                <option value="1942">1942</option>
                <option value="1943">1943</option>
                <option value="1944">1944</option>
                <option value="1945">1945</option>
                <option value="1946">1946</option>
                <option value="1947">1947</option>
                <option value="1948">1948</option>
                <option value="1949">1949</option>
                <option value="1950">1950</option>
                <option value="1951">1951</option>
                <option value="1952">1952</option>
                <option value="1953">1953</option>
                <option value="1954">1954</option>
                <option value="1955">1955</option>
                <option value="1956">1956</option>
                <option value="1957">1957</option>
                <option value="1958">1958</option>
                <option value="1959">1959</option>
                <option value="1960">1960</option>
                <option value="1961">1961</option>
                <option value="1962">1962</option>
                <option value="1963">1963</option>
                <option value="1964">1964</option>
                <option value="1965">1965</option>
                <option value="1966">1966</option>
                <option value="1967">1967</option>
                <option value="1968">1968</option>
                <option value="1969">1969</option>
                <option value="1970">1970</option>
                <option value="1971">1971</option>
                <option value="1972">1972</option>
                <option value="1973">1973</option>
                <option value="1974">1974</option>
                <option value="1975">1975</option>
                <option value="1976">1976</option>
                <option value="1977">1977</option>
                <option value="1978">1978</option>
                <option value="1979">1979</option>
                <option value="1980">1980</option>
                <option value="1981">1981</option>
                <option value="1982">1982</option>
                <option value="1983">1983</option>
                <option value="1984">1984</option>
                <option value="1985">1985</option>
                <option value="1986">1986</option>
                <option value="1987">1987</option>
                <option value="1988">1988</option>
                <option value="1989">1989</option>
                <option value="1990">1990</option>
                <option value="1991">1991</option>
                <option value="1992">1992</option>
                <option value="1993">1993</option>
                <option value="1994">1994</option>
                <option value="1995">1995</option>
                <option value="1996">1996</option>
                <option value="1997">1997</option>
                <option value="1998">1998</option>
                <option value="1999">1999</option>
                <option value="2000">2000</option>
                <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
              </select>
            </div>
          </div>
        </div>

        {/* SIGNATURE SECTION  */}
        <br />
        <div className="confirmation-background">
          <p className="confirmation-text" style={{ color: "black" }}>
            Signature of the contact person
          </p>
          <div className="sigpad-div">
            <SignaturePad ref={sigpad} style={{ border: "1px solid black" }} />
          </div>
          <br />
          <div className="row">
            <div className="col-lg-6">
              <span>
                Use your mouse, Trackpad or finger in the field above for
                signature
              </span>
            </div>
            <div className="col-lg-6 confirmation-button-div">
              <button className="button confirmation-button" onClick={clear}>
                Reset
              </button>
            </div>
          </div>
        </div>

        <div
          className="row"
          style={{ paddingTop: "70px", paddingBottom: "70px" }}
        >
          <div className="col-lg-6"></div>
          <div className="col-lg-6 right">
            <button
              style={{
                backgroundColor: "transparent",
                border: "none",
                marginRight: "30px",
              }}
              onClick={() => {
                {
                  props.change("info");
                }
              }}
            >
              <i class="fas fa-arrow-left" style={{ marginRight: "5px" }}></i>
              back
            </button>

            <button
              type="submit"
              style={{ cursor: "pointer" }}
              className="button confirmation-button"
              onClick={(e) => {
                if (!insuranceNumber || !date || !year || !insurance) {
                  return null;
                } else {
                  sendData(e);
                  setorder("Thankyou for your order");
                  setOrder1("Your order will arrive at 12.08.2021");
                  topFunction();
                }
                // setTimeout( window.location.reload(), 10000)
              }}
            >
              Order
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
