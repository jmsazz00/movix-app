import { Card, Skeleton, CardContent } from "@mui/material";

const TeamCardSkeleton = () => {
  return (
    <Card sx={{ maxWidth: 400, margin: "auto" }}>
      <Skeleton variant="rectangular" height={200} animation="wave" />
      <CardContent>
        <Skeleton animation="wave" height={20} style={{ marginBottom: 12 }} />
        <Skeleton
          animation="wave"
          height={20}
          width="80%"
          style={{ marginBottom: 12 }}
        />
        <Skeleton
          animation="wave"
          height={20}
          width="60%"
          style={{ marginBottom: 12 }}
        />
        <Skeleton animation="wave" height={175} width="90%" />
      </CardContent>
    </Card>
  );
};

export default TeamCardSkeleton;
