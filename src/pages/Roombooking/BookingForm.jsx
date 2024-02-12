import React from "react";

import { Button, Img, Input, Line, Text, TextArea } from "components";

function BookingForm() {
  return (
    <div className="bg-white-A700 border border-black-900_66 border-solid  rounded-[10px] shadow-bs6 w-[85%] h-fit px-3 py-3 ">
      <div className="flex flex-col ">
        <Text
          className="mb-1 sm:text-[21px] md:text-[23px] text-[25px] text-black-900_cc"
          size="txtPoppinsBold25"
        >
          Booking Form
        </Text>

        <div className="flex flex-col  items-center justify-center">
          <Text
            className="mt-[21px] text-2xl md:text-[22px] text-black-900 text-center sm:text-xl"
            size="txtPoppinsSemiBold22"
          >
            Please fill your information
          </Text>

          <Input
            name="frameSixtyNine"
            placeholder="Name"
            className="font-opensans font-semibold md:font-extrabold p-0 placeholder:text-black-900_a5  text-[13.08px] text-left w-full"
            wrapClassName="mt-[59px] w-[98%]"
            type="text"
            size="md"
          ></Input>

          <div className="bg-gray-300 flex flex-row font-opensans items-start justify-start mt-12 p-[9px] w-[98%] md:w-full">
            <Text
              className="ml-[9px] mt-[5px] text-[13.08px] text-black-900_a5"
              size="txtOpenSansSemiBold1308"
            >
              +91
            </Text>
            <Line className="bg-gray-400_38 h-[30px] mb-[7px] ml-[23px] w-px" />
            <Text
              className="ml-[7px] mt-1.5 text-[13.08px] text-black-900_a5"
              size="txtOpenSansSemiBold1308"
            >
              Mobile Number
            </Text>
          </div>
          <Input
            name="frameSeventyOne"
            placeholder="Email ID"
            className="font-opensans font-semibold p-0 placeholder:text-black-900_a5 text-[13.08px] text-left w-full"
            wrapClassName="mt-12 w-[98%]"
            type="email"
            size="md"
          ></Input>
          <Input
            name="frameSeventyTwo"
            placeholder="Address"
            className="font-opensans font-semibold p-0 placeholder:text-black-900_a5 text-[13.08px] text-left w-full"
            wrapClassName="mt-12 w-[98%]"
            size="md"
          ></Input>
          <TextArea
            className="bg-gray-300 border-0 font-opensans font-semibold mt-12 pb-[35px] pl-[17px] sm:pr-5 pr-[35px] pt-[18px] text-[13.08px] placeholder:text-black-900_a5 text-black-900_a5 text-left w-[98%] sm:w-full"
            name="frameSeventyFour"
            placeholder="Additional Requirements"
          ></TextArea>
          <Button
            className="common-pointer cursor-pointer font-bold font-sourcesanspro mb-[26px] min-w-[651px] md:min-w-full mt-20 outline outline-[0.5px] outline-black-900_1e rounded text-[17.44px] text-center"
            onClick={() => navigate("/payment")}
            color="amber_600_01"
            size="xl"
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;