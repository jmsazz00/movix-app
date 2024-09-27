import { Alert, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import VenueDescription from "../components/venues/VenueDescription";
import VenueDetailsSection from "../components/venues/VenueDetailsSection";
import VenueHero from "../components/venues/VenueHero";
import VenueImageGallery from "../components/venues/VenueImageGallery";
import useVenue from "../hooks/useVenue";

const VenueDetailPage = () => {
  const { venue } = useParams();
  const { data: venues, isLoading, error } = useVenue(venue!);

  if (isLoading) return <CircularProgress sx={{ m: 3 }} />;

  if (error || !venues || !venues.venues || venues.venues.length === 0)
    return (
      <Alert severity="error" sx={{ m: 2 }}>
        Venue details currently not available.
      </Alert>
    );

  const stadium = venues?.venues[0]!;

  // Better format for readability, e.g. '90000' => '90,000'
  const formattedCapacity = stadium.intCapacity?.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ","
  );

  return (
    <>
      <VenueHero
        imageUrl={stadium.strThumb || stadium.strFanart1}
        venueName={stadium.strVenue}
        alternateName={stadium.strVenueAlternate}
      />
      <VenueDetailsSection
        details={[
          { label: "Country", value: stadium.strCountry },
          { label: "Location", value: stadium.strLocation },
          { label: "Capacity", value: formattedCapacity },
          { label: "Cost", value: stadium.strCost },
          { label: "Formed Year", value: stadium.intFormedYear },
        ]}
      />
      {stadium.strDescriptionEN && (
        <VenueDescription
          description={stadium.strDescriptionEN}
          venueName={stadium.strVenue}
        />
      )}
      <VenueImageGallery
        imagesSrc={[stadium.strFanart2, stadium.strFanart3, stadium.strFanart4]}
      />
    </>
  );
};

export default VenueDetailPage;
