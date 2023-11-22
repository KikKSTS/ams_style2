import React from "react";
import { Pagination, Button } from "@nextui-org/react";
// img
import arrow_left from "../../assets/icon/arrow_left.png";
import arrow_right from "../../assets/icon/arrow_right.png";
// img
import Table1Img from "../../assets/Table1.png";
import Table1Img_CN from "../../assets/Table1_CN.png";
import Table2Img from "../../assets/Table2.png";
import Table3Img from "../../assets/Table3.png";

const Table = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const TableImg = [
    Table1Img,
    Table2Img,
    Table3Img,
    Table1Img,
    Table2Img,
    Table3Img,
    Table1Img,
    Table2Img,
    Table3Img,
    Table1Img,
  ];
  const TableImg_CN = [
    Table1Img_CN,
    Table2Img,
    Table3Img,
    Table1Img,
    Table2Img,
    Table3Img,
    Table1Img,
    Table2Img,
    Table3Img,
    Table1Img,
  ];

  return (
    <div className="flex items-center flex-col gap-5">
      <div className="h-[65px]"></div>
      {localStorage.getItem("Lang") === "US" ? (
      <div className="w-[70%] mx-auto text-small text-default-500">
        <img src={TableImg[currentPage - 1]} alt="" />
      </div>
      ):(
        <div className="w-[50%] mx-auto text-small text-default-500">
        <img src={TableImg_CN[currentPage - 1]} alt="" />
      </div>
      )}
      <div className="flex items-center gap-2">
        <Button
          onPress={() => setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))}
          className="bg-transparent w-[40px] h-[40px] min-w-[40px] rounded-[100%] p-0"
        >
          <img src={arrow_left} className="w-[30px]" alt="Previous" />
        </Button>
        <Pagination
          total={10}
          page={currentPage}
          variant="light"
          onChange={setCurrentPage}
          classNames={{
            wrapper: "gap-0 overflow-visible h-8 rounded ",
            item: "w-8 h-8 text-small rounded-none bg-transparent",
            cursor: "bg-white shadow-lg text-black font-bold",
          }}
        />
        <Button
          className="bg-transparent w-[40px] h-[40px] min-w-[40px] rounded-[100%] p-0"
          onPress={() =>
            setCurrentPage((prev) => (prev < 10 ? prev + 1 : prev))
          }
        >
          <img src={arrow_right} className="w-[30px]" alt="Next" />
        </Button>
      </div>
      <div className="h-[75px]"></div>
    </div>
  );
};

export default Table;
