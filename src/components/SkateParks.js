import React, { useState, useEffect  } from 'react';
import { ReactBingmaps } from 'react-bingmaps';
import styled from 'styled-components'; // Import styled-components

// Import the images
import skateparkOfBaltimoreImage from '../images/skatepark_of_baltimore.jpg';
import charmCitySkateParkImage from '../images/charm_city_skate_park.jpg';
import carrollParkSkateParkImage from '../images/carroll_park_skate_park.jpg';
import jakesSkateparkImage from '../images/jakes_skatepark.jpg';
import sandyHillsSkateParkImage from '../images/sandy_hills_skate_park.jpg';
import lansdowneBowlImage from '../images/lansdowne_bowl.jpg';
import rashFieldImage from '../images/rash_field.jpg';

// Styled components
const MainContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const SearchContainer = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

const SearchInput = styled.input`
  width: 80%;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const MapContainer = styled.div`
  height: 300px;
`;

const SkateParkCard = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
  background-color: #f9f9f9;
`;

const SkateParkName = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const ImageContainer = styled.div`
  img {
    max-width: 100%;
    height: auto;
  }
`;

const SkateParks = () => {
  // State for search input
  const [searchInput, setSearchInput] = useState('');

  // Location coordinates for the map center (e.g., a default location)
  const [mapCenter] = useState([39.2904, -76.6122]); // Default center coordinates

  // Function to handle search by location
  const handleLocationSearch = async () => {
    try {
      // Implement your location search logic here
      // For example, you can use a geocoding API to convert the searchInput to coordinates
      // const coordinates = await geocodeLocation(searchInput);

      // Update the searchResults state with the search results
      // setSearchResults([...searchResults, { id: '1', latitude: coordinates.latitude, longitude: coordinates.longitude }]);
    } catch (error) {
      console.error('Error in location search:', error);
    }
  };

  // Function to handle visiting a skate park
  const handleVisitClick = (location) => {
    // Implement the behavior when the "Visit" button is clicked
    // For example, you can open a link to the skate park's website or display a message.
    console.log(`Visiting ${location}`);
  };

  // Sample skate park data
  const skateParks = [
    {
      name: 'Skatepark of Baltimore',
      rating: 4.6,
      reviews: 204,
      type: 'Skateboard park',
      location: 'Baltimore, MD',
      description: 'Favorite park so far',
      imageUrl: skateparkOfBaltimoreImage,
    },
    {
      name: 'Charm City Skate Park',
      rating: 4.6,
      reviews: 336,
      type: 'Skateboard park',
      location: 'Baltimore, MD',
      description: 'Indoor course for boards, bikes & skates',
      imageUrl: charmCitySkateParkImage,
    },
    {
      name: 'Carroll Park Skate Park',
      rating: 4.0,
      reviews: 65,
      type: 'Skateboard park',
      location: 'Baltimore, MD',
      description: 'Great for beginners. Great location. Well kept.',
      imageUrl: carrollParkSkateParkImage,
    },
    {
      name: "Jake's Skatepark",
      rating: 4.4,
      reviews: 17,
      type: 'Skateboard park',
      location: 'Baltimore, MD',
      description: "Decent for its size and location.",
      imageUrl: jakesSkateparkImage,
    },
    {
      name: 'Sandy Hills Skate Park',
      rating: 4.5,
      reviews: 129,
      type: 'Park',
      location: 'Lansdowne, MD',
      description: 'Really cool skatepark but definitely better for advanced skaters.',
      imageUrl: sandyHillsSkateParkImage,
    },
    {
      name: 'Lansdowne Bowl',
      rating: 4.5,
      reviews: 33,
      type: 'Skateboard park',
      location: 'Lansdowne, MD',
      description: 'A mini ramp, metal transitions, and planter boxes.',
      imageUrl: lansdowneBowlImage,
    },
    {
      name: 'Rash Field',
      rating: 4.9,
      reviews: 88,
      type: 'Park',
      location: 'Baltimore, MD',
      description: "My kid loves the skate park... it's a good one for beginners.",
      imageUrl: rashFieldImage,
    },
    // Add more skate park data here if needed
  ];

  useEffect(() => {
    // This code will run when the component mounts or when the state changes
    // For example, you can use it to fetch data or perform side effects
    // If you need to fetch data, use a library like Axios or the Fetch API
  }, []); // Pass an empty array as the second argument to run this effect once when the component mounts


  return (
    <MainContainer>
      <h2>Skate Parks</h2>

      {/* Search by Location */}
      <SearchContainer>
        <h3>Search by Location</h3>
        <SearchInput
          type="text"
          placeholder="Search by Location"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <SearchButton onClick={handleLocationSearch}>Search</SearchButton>
      </SearchContainer>

      {/* Display the Bing Map */}
      <MapContainer>
        <ReactBingmaps
          bingmapKey="Asqx1MbD8hLv3ugrdHmtEuYQWBaaApcaefHB13saDewk0e8IPw6On8JSeNXfo1SV" // Your Bing Maps API Key
          center={mapCenter} // Use the mapCenter state as the initial center
          mapTypeId={'road'}
          zoom={12} // Adjust the initial zoom level as needed
        />
      </MapContainer>

      {/* Divs for Skate Park Information */}
      <div className="skate-park-list">
        {skateParks.map((park, index) => (
          <SkateParkCard key={index}>
            <SkateParkName>{park.name}</SkateParkName>
            <ImageContainer>
              <img src={park.imageUrl} alt={`${park.name} Skate Park`} />
            </ImageContainer>
            <p>Rating: {park.rating}</p>
            <p>Reviews: {park.reviews}</p>
            <p>Type: {park.type}</p>
            <p>Location: {park.location}</p>
            <p>Description: {park.description}</p>
            <SearchButton onClick={() => handleVisitClick(park.location)}>Visit</SearchButton>
          </SkateParkCard>
        ))}
      </div>
    </MainContainer>
  );
};

export default SkateParks;
















