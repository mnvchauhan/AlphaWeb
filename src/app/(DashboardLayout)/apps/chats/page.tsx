import React from "react";
import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/components/container/PageContainer";
import AppCard from "@/components/shared/AppCard";
import ChatsApp from "@/components/apps/chats";

const Chats = () => {
  return (
    <PageContainer title="Chat" description="this is Chat">
      <Breadcrumb title="Chat app" subtitle="Messenger" />
      <AppCard>
        <ChatsApp />
      </AppCard>
    </PageContainer>
  );
};

export default Chats;
