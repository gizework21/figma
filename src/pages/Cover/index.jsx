import React from "react";
import { Helmet } from "react-helmet";
import { Img, Button, Heading } from "../../components";

export default function CoverPage() {
  return (
    <>
      <Helmet>
        <title>sampleFigma</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center w-full pt-[75px] gap-[38px] px-14 md:pt-5 md:px-5 bg-gradient">
        <div className="flex flex-col items-center w-[59%] md:w-full gap-[37px]">
          <Img src="images/img_logo.svg" alt="logo_one" className="h-[56px]" />
          <Heading as="h1" className="text-center">
            Figma - Tailwind CSS Admin Dashboard Template
          </Heading>
        </div>
        <div className="flex flex-col items-center w-full gap-[41px] mx-auto max-w-[1267px]">
          <div className="flex md:flex-col self-stretch justify-center gap-[31px]">
            <Button
              shape="round"
              leftIcon={<Img src="images/img_icon01.svg" alt="icon-01" />}
              className="w-full sm:px-5 flex-1"
            >
              Figma-Tailwind-React
            </Button>
            <Button
              shape="round"
              leftIcon={<Img src="images/img_icon02.svg" alt="icon-02" />}
              className="sm:px-5 min-w-[359px]"
            >
              400+ UI Elements
            </Button>
            <Button
              shape="round"
              leftIcon={<Img src="images/img_icon03.svg" alt="icon-03" />}
              className="w-full sm:px-5 flex-1"
            >
              4 Unique Dashboards
            </Button>
          </div>
          <div className="flex md:flex-col w-[49%] md:w-full gap-[19px]">
            <div className="flex flex-col items-center w-full p-[17px] md:p-5 bg-white-A700 shadow-sm rounded-[50%]">
              <Img src="images/img_figma_logo.svg" alt="figmalogo_one" className="h-[38px]" />
            </div>
            <div className="flex flex-col items-center justify-center w-full p-3.5 md:p-5 bg-white-A700 shadow-sm rounded-[50%]">
              <Img src="images/img_vector.svg" alt="vector_one" className="h-[26px] my-2" />
            </div>
            <div className="flex flex-col items-center w-full p-4 md:p-5 bg-white-A700 shadow-sm rounded-[50%]">
              <Img src="images/img_html5_without_wordmark_color.svg" alt="html5without" className="h-[38px] w-[38px]" />
            </div>
            <div className="flex flex-col items-center w-full p-4 md:p-5 bg-white-A700 shadow-sm rounded-[50%]">
              <Img src="images/img_react_2_1.svg" alt="react2one_one" className="h-[40px]" />
            </div>
            <div className="flex flex-col items-center w-full p-5 bg-white-A700 shadow-sm rounded-[50%]">
              <Img src="images/img_group.svg" alt="image" className="h-[31px] w-[31px]" />
            </div>
            <div className="flex flex-col items-center justify-center w-full p-3.5 md:p-5 bg-white-A700 shadow-sm rounded-[50%]">
              <Img src="images/img_group_1000004074.svg" alt="image" className="h-[42px]" />
            </div>
            <div className="flex flex-col items-center justify-center w-full p-3.5 md:p-5 bg-white-A700 shadow-sm rounded-[50%]">
              <Img src="images/img_alpine_js_seeklogo_com.svg" alt="alpinejs_one" className="h-[21px] my-2.5" />
            </div>
          </div>
        </div>
        <div className="h-[515px] w-full mx-auto relative max-w-[1124px]">
          <Img
            src="images/img_hero_03.png"
            alt="herothree_one"
            className="h-[475px] w-[43%] bottom-0 right-0 m-auto object-cover absolute rounded-lg"
          />
          <Img
            src="images/img_hero_01.png"
            alt="heroone_one"
            className="h-[469px] w-[43%] bottom-0 left-0 m-auto object-cover absolute rounded-lg"
          />
          <Img
            src="images/img_hero_02.png"
            alt="herotwo_one"
            className="justify-center h-[501px] w-[48%] left-0 bottom-0 right-0 top-0 m-auto object-cover absolute rounded-lg"
          />
        </div>
      </div>
    </>
  );
}
