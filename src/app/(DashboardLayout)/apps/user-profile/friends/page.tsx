import Grid from "@mui/material/Grid";
import PageContainer from "@/components/container/PageContainer";
import ProfileBanner from "@/components/apps/userprofile/profile/ProfileBanner";
import FriendsCard from "@/components/apps/userprofile/friends/FriendsCard";

const Friends = () => {
  return (
    <PageContainer title="Friends" description="this is Friends">
      <Grid container spacing={3}>
        <Grid item sm={12}>
          <ProfileBanner />
        </Grid>
        <Grid item sm={12}>
          <FriendsCard />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default Friends;
