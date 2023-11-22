import React from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

// img
import Chart1 from "../../assets/Chart1.png";
import Chart2 from "../../assets/Chart2.png";
import Chart3 from "../../assets/Chart3.png";
import Chart1_cn from "../../assets/Chart1_cn.png";
import Chart2_cn from "../../assets/Chart2_cn.png";
import Chart3_cn from "../../assets/Chart3_cn.png";
import ContainPer from "../../assets/Contain1_per.png";
import ContainPerCn from "../../assets/Contain1_per_Cn.png";
import { useTranslation } from "react-i18next";
const F_Content = () => {
  const variants = ["underlined"];
  const [t, i18n] = useTranslation("global");
  return (
    <>
      <div className="h-[50px]"></div>
      <div className="Header_Contain1">{t("EarnMore.span02")}</div>
      <div className="h-[25px]"></div>
      {localStorage.getItem("Lang") === "US" ? (
      <div>
        <img src={ContainPer} className="sm:w-[60%] w-full mx-auto" alt="" />
      </div>
      ):(
      <div>
        <img src={ContainPerCn} className="w-[60%] mx-auto" alt="" />
      </div>
      )}
      <div className="h-[50px]"></div>
      <div className="flex flex-col flex-wrap gap-4">
        {variants.map((variant) => (
          <Tabs
            key={variant}
            variant={variant}
            aria-label="Options"
            classNames={{
              tabList:
                "sm:w-auto w-full  relative rounded-[5px] p-0 border-b border-divider bg-[#CCCCCC]  mx-auto",
              // cursor: "w-full bg-[#42B8FB] p-0",
              tab: "sm:w-[180px] h-[40px] p-0 ",
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
            <Tab key="LAST7DAYS" title={t("EarnMore.day1")}>
              <Card className="Tab_Body">
                <CardBody>
                  {localStorage.getItem("Lang") === "US" ? (
                    <img src={Chart1} alt="" />
                  ) : (
                    <img src={Chart1_cn} alt="" />
                  )}
                </CardBody>
              </Card>
            </Tab>
            <Tab key="LAST30DAYS" title={t("EarnMore.day2")}>
              {" "}
              <Card className="Tab_Body">
                <CardBody>
                {localStorage.getItem("Lang") === "US" ? (
                    <img src={Chart2} alt="" />
                  ) : (
                    <img src={Chart2_cn} alt="" />
                  )}                </CardBody>
              </Card>{" "}
            </Tab>
            <Tab key="LAST6MONTHS" title={t("EarnMore.day3")}>
              {" "}
              <Card className="Tab_Body">
                <CardBody>
                {localStorage.getItem("Lang") === "US" ? (
                    <img src={Chart3} alt="" />
                  ) : (
                    <img src={Chart3_cn} alt="" />
                  )}                </CardBody>
              </Card>{" "}
            </Tab>
          </Tabs>
        ))}
      </div>
      <div className="h-[90px]"></div>
    </>
  );
};

export default F_Content;
