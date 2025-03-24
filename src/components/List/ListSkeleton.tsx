import { Box, Skeleton } from "@mui/material";
import Grid from "@mui/material/Grid2";

const SKELETON_COUNT = 10;

const ListSkeleton = () => {
  const skeletons = new Array(SKELETON_COUNT).fill("skeleton");

  return (
    <Grid container spacing={2}>
      {skeletons.map((_, i) => (
        <Grid key={i} size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
          <Skeleton variant="rectangular" width={260} height={118} />
          <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ListSkeleton;
