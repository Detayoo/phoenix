import Image from "next/image";
import { Formik, Form } from "formik";
import * as Yup from "yup";

import { DashboardCard, PrimaryWalletBalance } from "./DashboardCard";
import { SelectField } from "./SelectField";

export const Analytics = ({ children }) => {
  const initialValues = {
    date: "",
    product: "",
  };

  return (
    <div className="bg-lightest-gray pb-10">
      <div className="flex justify-between items-center bg-lightest-gray pt-[2.7rem] pb-[1.2rem] border-b-[1px]">
        <div>
          <div className="flex gap-x-2 tracking-wide">
            <p className="text-2xl font-medium">Welcome, Oluwafemi Alabi</p>
            <Image src="/icons/welcome-user.svg" width={36} height={36} />
          </div>
          <p className="text-black/70 text-sm mt-2">
            Below is an overview of all your transaction accounts for your
            organization
          </p>
        </div>

        <div className="flex items-center gap-x-2 text-sm">
          <p>Filter by:</p>
          <Formik
            initialValues={initialValues}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ values }) => {
              return (
                <Form className="flex gap-x-2">
                  <SelectField name="date" value={values.date} inputClass="h-8">
                    <option value="">-select-</option>
                    <option value="date">Date</option>
                  </SelectField>
                  <SelectField
                    name="product"
                    value={values.product}
                    inputClass="h-8"
                  >
                    <option value="">-select-</option>
                    <option value="product">Product</option>
                  </SelectField>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
      {children}
      <div className="sticky top-50 right-0 bg-lightest-gray flex gap-x-12 items-center w-full mt-5">
        <PrimaryWalletBalance
          title="Primary Wallet Balance"
          balance="NGN215,000.00"
          logo="/icons/primary-wallet-balance-icon.svg"
          percentage="+12.50%"
          analyticArrow={`/icons/green-analytic-arrow.svg`}
        />

        <DashboardCard
          title="Successful Transactions"
          number="995"
          figureInNaira="NGN 430,000.00"
          logo="/icons/dashboard-successful-transactions-icon.svg"
          percentage="-2.50%"
          analyticArrow={`/icons/red-analytic-arrow.svg`}
        />
        <DashboardCard
          title="Failed Transactions"
          number="58"
          figureInNaira="NGN 70,000.00"
          logo="/icons/dashboard-unsuccessful-transactions-icon.svg"
          percentage="-2.50%"
          analyticArrow={`/icons/red-analytic-arrow.svg`}
        />
      </div>
    </div>
  );
};
