import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { httpGetAllCustomersDetails, httpGetAllLeadsInfo } from "../../utils/nodejs/admin";
import { AdminAuthContext } from "./auth.context";

export const CustomersContext = createContext({
  customersList: [],
  setCustomersList: () => {},
  leadRows: [],
  setLeadRows: () => {},
});

export const CustomersProvider = ({ children }) => {
  const { isAdminLogin } = useContext(AdminAuthContext);
  const [customersList, setCustomersList] = useState([]);
  const [leadRows, setLeadRows] = useState([]);

  // useEffect(() => {
  //   const getCustomersArray = async () => {
  //     if (isAdminLogin) {
  //       const customersArray = await httpGetAllCustomersDetails();
  //       console.log(customersArray);
  //       setCustomersList(customersArray);
  //     }
  //   };
  //   getCustomersArray()
  // }, [isAdminLogin]);

    useEffect(() => {
    const getLeadArray = async () => {
      if (isAdminLogin) {
        const leadsArray = await httpGetAllLeadsInfo();
        setLeadRows(leadsArray);
      }
    };
    getLeadArray()
  }, [isAdminLogin]);

  const value = {leadRows, setLeadRows, customersList, setCustomersList };

  return (
    <CustomersContext.Provider value={value}>
      {children}
    </CustomersContext.Provider>
  );
};
