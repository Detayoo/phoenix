import { useState } from "react";
import Image from "next/image";

import { PrimaryButton } from "./Button";
import { isEven } from "../utils";

export const Users = () => {
  const data = [
    {
      id: 1,
      email: "ayodeletunde04@gmail.com",
      firstName: "Ayodele",
      lastName: "Tunde",
      status: "Active",
    },
    {
      id: 2,
      email: "ajepeademorin08@gmail.com",
      firstName: "Ajepe",
      lastName: "Ademorin",
      status: "Inactive",
    },
  ];
  const [usersList, setUsersList] = useState(data);
  const [search, setSearch] = useState("");
  const users = usersList?.filter((user) => {
    return (
      user.email.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      user.firstName.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      user.lastName.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  });
  const deleteUser = (id) => {
    const newUserList = usersList?.filter((user) => id !== user.id);
    setUsersList(newUserList);
  };

  const renderList = () => {
    return (
      <div className="w-full bg-white pt-6">
        <form className="flex w-full px-7">
          <div className="flex flex-1 items-center pl-2 h-9 border rounded-l-[3px] gap-x-3">
            <Image src="/icons/search-icon.svg" width={24} height={24} />
            <input
              className="flex-1 h-full outline-none text-sm placeholder:text-sm placeholder:text-black/50 placeholder:font-normal"
              placeholder="search user by name or email"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <PrimaryButton
            title="Search"
            className="h-[2.25rem] w-36 rounded-l-none font-normal"
          />
        </form>

        <div className="bg-usage-bg h-11 mt-6 px-7 text-sm flex items-center">
          <p className="w-[28%]">Email</p>
          <p className="w-[23%]">First name</p>
          <p className="w-[22%]">Last name</p>
          <p className="w-[8%]">Status</p>
        </div>

        {users?.length ? (
          users?.map((user) => {
            const { email, firstName, lastName, status, id } = user;
            return (
              <div
                key={id}
                className={`flex-1 h-12 px-7 text-[0.82rem] flex items-center  ${
                  isEven(id) ? "bg-white" : "bg-lightest-gray"
                } `}
              >
                <p className="w-[28%]">{email}</p>
                <p className="w-[23%]">{firstName}</p>
                <p className="w-[22%]">{lastName}</p>
                <p
                  className={`w-[8%] py-1 flex items-center justify-center rounded-sm text-white ${
                    status === "Active"
                      ? "bg-exchange-rate-text"
                      : "bg-black/40"
                  } `}
                >
                  {status}
                </p>
                <div className="flex-1 flex items-center gap-x-4 ml-10 2xl:ml-28 text-[0.75rem] font-semibold">
                  <p className="text-black/60 cursor-pointer">View</p>
                  <p className="text-view-blue cursor-pointer">Edit</p>
                  <p className="text-primary-red cursor-pointer">Deactivate</p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex-1 flex justify-center items-center h-56 w-full">
            <p className="text-2xl">No list oga</p>
          </div>
        )}
      </div>
    );
  };

  return renderList();
};
