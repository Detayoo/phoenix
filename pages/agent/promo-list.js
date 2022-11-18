import { useState } from "react";
import Image from "next/image";

import { PurchaseLayout } from "../../layouts";

const PromoList = () => {
  const [showFilter, setShowFilter] = useState(false);

  const renderPageBody = () => {
    return (
      <div>
        <h1>Hey there</h1>
      </div>
    );
  };
  return (
    <PurchaseLayout
      action="Promo Lists"
      tab="Here you can manage your promotions"
      actionType="Promo lists"
      hasSubtitle={false}
    >
      <div className="pl-[2.25rem] pr-[2.4rem] flex flex-col bg-lightest-gray">
        {renderPageBody()}
      </div>
    </PurchaseLayout>
  );
};

export default PromoList;
