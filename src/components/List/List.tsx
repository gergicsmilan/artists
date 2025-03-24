import { Card, CardContent, Chip, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useMemo } from "react";
import { Album } from "../../types/api";

type Props = { artists: Album[] };

const List = ({ artists }: Props) => {
  const noData = useMemo(() => artists.length === 0, [artists.length]);

  if (noData) return <Typography>No data found!</Typography>;

  return (
    <Grid container spacing={2}>
      {artists.map((artist) => (
        <Grid key={artist.id} size={{ xs: 12, sm: 6, md: 6, lg: 4 }}>
          <Card>
            <img
              src={artist.portrait}
              alt={`${artist.name}_${artist.id}`}
              style={{ objectFit: "cover", width: "100%", height: "16rem" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {artist.name}
              </Typography>
              <Chip label={`Number of albums: ${artist.albumCount}`} />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default List;
