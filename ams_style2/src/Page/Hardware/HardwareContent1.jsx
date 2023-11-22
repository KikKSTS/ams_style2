import { Tabs, Tab} from "@nextui-org/react";
import price2 from "../../assets/Hardware/price02.png";
import price1 from "../../assets/Hardware/price01.png";
import price3 from "../../assets/Hardware/price03.png";

const HardwareContent1 = () => {
  const variants = ["underlined"];
  return (
    
      <div className="w-full flex flex-col flex-wrap sm:gap-[90px] gap-6 sm:mt-[-90px] pb-4">
        {variants.map((variant) => (
          <Tabs
            key={variant}
            variant={variant}
            aria-label="Options"
            classNames={{
              tabList:
                "relative rounded-[5px] p-0 border-b border-divider bg-[#EEEEEE]  mx-auto",
              // cursor: "w-full bg-[#42B8FB] p-0",
              tab: "sm:w-[180px] w-[80px] h-[40px] p-0 ",
              tabContent: `Tab_Content
              group-data-[selected=true]:text-[#06b6d4] 
              group-data-[selected=true]:text-[#06b6d4] 
              group-data-[selected=true]:border-b-2 
              group-data-[selected=true]:border-sky-500
              group-data-[selected=true]:bg-[#fff]`,
            }}
            color="primary"
          >
            {" "}
            <Tab key="LAST7DAYS" title="ASIC">
              <div className="flex justify-center items-center">
                <div className="sm:w-[1070px] w-[95%] ">
                  <img src={price1} alt=""/>
                </div>
              </div>
            </Tab>
            <Tab key="LAST30DAYS" title="GPU">
              <div className="flex justify-center items-center">
                <div className="sm:w-[1070px] w-[95%]">
                  <img src={price2} alt="" />
                </div>
              </div>
            </Tab>
            <Tab key="LAST6MONTHS" title="CPU">
            <div className="flex justify-center items-center">
                <div className="sm:w-[1070px] w-[95%]">
                  <img src={price3} alt="" />
                </div>
              </div>
            </Tab>
          </Tabs>
        ))}
      </div>
    
  );
};

export default HardwareContent1;
