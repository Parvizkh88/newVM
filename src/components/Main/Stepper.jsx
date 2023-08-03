import React, { useEffect, useState } from "react";
import axios from "axios";

import Locations from "../Locations";
import Types from "../Types";

const Stepper = ({ currentStep }) => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    switch (currentStep) {
      case 0:
        axios(
          "https://855b3ea4-1afc-42b3-9811-a8d3d4430561.mock.pstmn.io/locations"
        )
          .then((res) => setDataList(res.data.locations))
          .catch((error) => console.log(error));

      case 1:
        axios(
          "https://855b3ea4-1afc-42b3-9811-a8d3d4430561.mock.pstmn.io/types"
        )
          .then((res) => setDataList(res.data.types))
          .catch((error) => console.log(error));
        break;

      default:
        axios(
          "https://855b3ea4-1afc-42b3-9811-a8d3d4430561.mock.pstmn.io/locations"
        )
          .then((res) => setDataList(res.data.locations))
          .catch((error) => console.log(error));
    }
  }, [currentStep]);

  switch (currentStep) {
    case 0:
      return <Locations dataList={dataList} />;
    case 1:
      return <Types dataList={dataList} />;

    default:
      return <Locations dataList={dataList} />;
  }
};

export default Stepper;
