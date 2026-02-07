import React from "react";
import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/components/container/PageContainer";
import ProductShop from "@/components/apps/ecommerce/productGrid";
import AppCard from "@/components/shared/AppCard";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Shop",
  },
];
const Ecommerce = () => {
  return (
    <PageContainer title="Shop" description="this is Shop">
      {/* breadcrumb */}
      <Breadcrumb title="Shop" items={BCrumb} />
      <AppCard>
        <ProductShop />
      </AppCard>
    </PageContainer>
  );
};

export default Ecommerce;
