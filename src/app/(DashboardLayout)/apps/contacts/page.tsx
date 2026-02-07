import PageContainer from "@/components/container/PageContainer";
import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";
import AppCard from "@/components/shared/AppCard";
import ContactApp from "@/components/apps/contacts/index";

const Contacts = () => {
  return (
    <PageContainer title="Contact" description="this is Contact">
      <Breadcrumb title="Contact app" subtitle="List Your Contacts" />
      <AppCard>
        <ContactApp />
      </AppCard>
    </PageContainer>
  );
};

export default Contacts;
