import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";
import PageContainer from "@/components/container/PageContainer";
import AppCard from "@/components/shared/AppCard";
import NotesApp from "@/components/apps/notes";

const BCrumb = [
  {
    to: "/",
    title: "Home",
  },
  {
    title: "Notes",
  },
];

export default function Notes() {
  return (
    <PageContainer title="Note App" description="this is Note App">
      <Breadcrumb title="Note app" items={BCrumb} />
      <AppCard>
        <NotesApp />
      </AppCard>
    </PageContainer>
  );
}
