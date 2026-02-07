import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";

import PageContainer from "@/components/container/PageContainer";
import AppCard from "@/components/shared/AppCard";
import Image from "next/image";
import EmailsApp from "@/components/apps/email";

const Email = () => {
  return (
    <PageContainer title="Email" description="this is Email">
      <Breadcrumb title="Email app" subtitle="Look at Inbox">
        <Image
          src="/images/breadcrumb/emailSv.png"
          alt={"emailIcon"}
          width={195}
          height={195}
        />
      </Breadcrumb>

      <AppCard>
        <EmailsApp />
      </AppCard>
    </PageContainer>
  );
};

export default Email;
