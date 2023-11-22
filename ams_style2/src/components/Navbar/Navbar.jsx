import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarItem,
  Link,
  Button,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
} from "@nextui-org/react";
import { RiArrowDropDownLine } from "react-icons/ri";
import AmsLogo from "../../assets/ams_logo.png";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const [t, i18n] = useTranslation("global");
  const baseurl = import.meta.env.VITE_BASE_URL;

  const Menu1 = () => {
    return (
      <Dropdown>
        <DropdownTrigger>
          <Button
            disableRipple
            className="sm:m-0 ml-[10px] p-0 bg-transparent data-[hover=true]:bg-transparent text-[#959595]"
            // endContent="<RiArrowDropDownLine />"
            radius="sm"
            variant="light"
          >
            
            {t("Nav.menu1")}
            <RiArrowDropDownLine className="mt-[2px]" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="ACME features"
          className=""
          itemClasses={{
            base: "gap-4",
          }}
        >
          <DropdownItem className="text-center" href={`${baseurl}/starting`}>
            {t("Nav.menu1_1")}
          </DropdownItem>

          <DropdownItem className="text-center" href={`${baseurl}/gpu`}>
            {t("Nav.menu1_2")}
          </DropdownItem>
          <DropdownItem
            key="production_ready"
            href={`${baseurl}/mining`}
            className="text-center"
          >
            {t("Nav.menu1_3")}
          </DropdownItem>
          <DropdownItem
            key="99_uptime"
            href={`${baseurl}/earn`}
            className="text-center"
          >
            {t("Nav.menu1_4")}
          </DropdownItem>
          <DropdownItem
            key="99_uptime"
            href={`${baseurl}/hardware`}
            className="text-center"
          >
            {t("Nav.menu1_5")}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  };

  const Menu2 = () => {
    return (
      <Dropdown>
        <DropdownTrigger>
          <Button
            disableRipple
            className="sm:m-0 ml-[10px] p-0 bg-transparent data-[hover=true]:bg-transparent text-[#959595]"
            // endContent="<RiArrowDropDownLine />"
            radius="sm"
            variant="light"
          >
            {t("Nav.menu2")}
            <RiArrowDropDownLine className="mt-[2px]" />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          aria-label="ACME features"
          className=""
          itemClasses={{
            base: "gap-4",
          }}
        >
          <DropdownItem key="Market" className="text-center">
            <a href={`${baseurl}/Market`}>{t("Nav.menu2_1")}</a>
          </DropdownItem>
          <DropdownItem key="price" href={`${baseurl}/price`} className="text-center">
            {t("Nav.menu2_2")}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  };

  const Menu3 = () => {
    return (
      <Link className="text-[#959595] flex justify-center" href={`${baseurl}/AMSMining`}>
        <Button
          disableRipple
          className="p-0 bg-transparent data-[hover=true]:bg-transparent text-[#959595] "
          // endContent="<RiArrowDropDownLine />"
          radius="sm"
          variant="light"
        >
          <a href={`${baseurl}/AMSMining`}>{t("Nav.menu3")}</a>
        </Button>
      </Link>
    );
  };

  return (
    <Navbar className="justify-start bg-white" height="80px" maxWidth="full">
      <NavbarBrand>
        <Link href={`${baseurl}/`}>
          {" "}
          {/* Update the URL to your home page */}
          <img src={AmsLogo} alt="" className="sm:w-[220px] sm:h-[56px] h-[45px]" />
        </Link>
        {/* <p className="font-bold text-inherit">ACME</p> */}
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem>
          <Menu1 />
        </NavbarItem>

        {/* ------------------------------------------------------------------------------------------------ */}
        <NavbarItem>
          <Menu2 />
        </NavbarItem>
        {/* ------------------------------------------------------------------------------------------------ */}
        <NavbarItem>
          <Menu3 />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="bg-[#000000c5]  mt-[1px] ">
        <Menu1 />
        <Menu2 />
        <Menu3 />
      </NavbarMenu>

      <NavbarContent className="invisible hidden sm:block" justify="end">
        <NavbarItem className="hidden lg:flex ">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Nav;
