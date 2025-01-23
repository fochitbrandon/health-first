import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { assets ,doctors } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  console.log("Params here:",docId)
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc._id === docId);
    setDocInfo(docInfo);
  };
  const getAvailableSlots = async () => {
    setDocSlots([]);
  };
  useEffect(() => {
    fetchDocInfo();
  }, [docId, doctors]);

  //getting curent date
  let today = new Date();
  // for (let i = 0; i < 7; i++) {
  //   //geting date with index
  //   let currentDate = new Date(today);
  //   currentDate.setDate(today.getDate() + i);

  //   // setting end time of the daywith index
  //   let endTime = new Date();
  //   endTime.setDate(today.getDate() + 1);
  //   endTime.setHours(21, 0, 0, 0);

  //   // settinfg hours
  //   if (today.getDate() === currentDate.getDate()) {
  //     currentDate.setHours(
  //       currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
  //     );
  //     currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
  //   } else {
  //     currentDate.setHours(10);
  //     currentDate.setMinutes(0);
  //   }
  //   let timeSlots = [];

    while (currentDate < endTime) {
      let formattedTime = currentDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      //add slot to array
      timeSlots.push({
        datetime: new Date(currentDate),
        time: formattedTime,
      });
      //increment time by 30min
      currentDate.setMinutes(currentDate.getMinutes() + 30);
    }
    setDocSlots((prev) => [...prev, timeSlots]);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    console, log(docSlots);
  }, []);

  return (
    
    docInfo && (
      <div>
        {/* Doctor deails */}

        <div className="fleex flex-col  sm:flex sm:flex-row gap-4 ">
          <div>
            <img
              className="bg-primary w-full sm:max-w-72 rounded-lg "
              src={docInfo.image}
              alt=""
            />
          </div>
          <div className=" flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0 ">
            {/* Doc info :name , degree,experience */}
            <p className=" flex items-center gap-2 text-2xl font-medium txt-gray-900">
              {docInfo.name}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>
            <div className=" flex items-center gap-2 teext-sm mt-1 text-gray-600 ">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {" "}
                {docInfo.experience}{" "}
              </button>
            </div>
            {/* Doctor about */}
            <div>
              <p className=" flex items-center gap-1 text-sm font-medium text-gray-900 mt-3 ">
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className=" text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Appointment{" "}
              <span className="text-gray-600">
                {currencySymbol} {docInfo.fees}
              </span>
            </p>
          </div>
        </div>
        {/* booking slots */}
        <div className=" sm:ml-72 sm:pl-4 font-medium text-gray-700 ">
            <p> Booking slots</p>
            <div className=" flex  gap-3 items-center w-full overflow-x-scroll mt-4 ">
              {
                docSlots.length && docSlots.map ((item, index)=>(
                 <div onClick={ ()=>setSlotIndex(index) } className={` text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ?'bg-primary text-white ' :'border border-gray-200'}   `} key={index}>
                  <P>{item[0] && daysOfWeek[item[0].datetime.getDate()]} </P>
                  <p>{item[0] && item[0].datetime.getDate()}</p>

                 </div>
                ))
              }
            </div>
            <div className="flex item-center gap-3 w-full overflow-x-scroll mt-4">
              {docSlots.length && docSlots[slotIndex].map ((item, index)=>(
                <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-lingt flex-shrink-0 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`} key={index}>
                  {item.time.toLowerCase()}

                </p>
              )) }
            </div>
            <button className=" bg-primary text-white text-sm font-lignt px-14 py-3 rounded-full my-6 "> Book an appointment </button>
        </div>
        {/* listing Related doctors */}
        <RelatedDoctors docId= {docId} speciality={docInfo.speciality}/>

      </div>
    )

    // <div>
    //   some content{JSON.stringify(docInfo)}
    // </div>
  );
}


export default Appointment;
