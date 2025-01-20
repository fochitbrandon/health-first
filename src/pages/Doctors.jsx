import React, { useContext } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { AppContext } from "../context/AppContext";
const Doctors = () => {
  const {speciality} = useParams()
  const[filterDoc,setfilterDoc] = useState([])
  const {Doctors} = useContext;{AppContext}

  return (
    <div>
      <p>Browse through the doctors specialist.</p>
      <div>
        <p>General physician</p>
        <p>Gynecologist</p>
        <p>Dermatologist</p>
        <p>Pediatricians</p>
        <p>Neurologist</p>
        <p>Gastroenterologist</p>
      </div>
      <div>
        {

        }
      </div>
    </div>
  );
};

export default Doctors;
