import React from 'react';
import styled from 'styled-components';
import Timeline from './Timeline';
import Feed from './Feed';

// Styled components for the Community page
const CommunityContainer = styled.section`
  background-color: #f7f7f7;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeading = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const FeatureContainer = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 40px;
`;

const FeatureHeading = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
`;

// Media queries for responsive design
const media = {
  tablet: '@media (max-width: 768px)',
  mobile: '@media (max-width: 576px)',
};

// Responsive styling
const ResponsiveFeatureHeading = styled(FeatureHeading)`
  ${media.tablet} {
    font-size: 18px;
  }

  ${media.mobile} {
    font-size: 16px;
  }
`;

const ResponsiveFeatureDescription = styled(FeatureDescription)`
  ${media.tablet} {
    font-size: 14px;
  }

  ${media.mobile} {
    font-size: 12px;
  }
`;

const Community = () => {
  return (
    <CommunityContainer>
      <SectionHeading>Community</SectionHeading>

      {/* User-Generated Content */}
      <FeatureContainer>
        <Timeline />
        <ResponsiveFeatureHeading>User-Generated Content</ResponsiveFeatureHeading>
        <ResponsiveFeatureDescription>
          Encourage users to share their skateboarding experiences through videos, photos, and stories.
        </ResponsiveFeatureDescription>
        {/* Add content display for user-generated content */}
        <Feed />
      </FeatureContainer>

      {/* Skateboarding Challenges */}
      <FeatureContainer>
        <ResponsiveFeatureHeading>Skateboarding Challenges</ResponsiveFeatureHeading>
        <ResponsiveFeatureDescription>
          Organize fun challenges for the community to participate in.
        </ResponsiveFeatureDescription>
        {/* Add content display for skateboarding challenges */}
      </FeatureContainer>

      {/* Spot Recommendations */}
      <FeatureContainer>
        <ResponsiveFeatureHeading>Spot Recommendations</ResponsiveFeatureHeading>
        <ResponsiveFeatureDescription>
          Allow users to share their favorite skateboarding spots and parks.
        </ResponsiveFeatureDescription>
        {/* Add content display for spot recommendations */}
      </FeatureContainer>

      {/* Skateboarding Events */}
      <FeatureContainer>
        <ResponsiveFeatureHeading>Skateboarding Events</ResponsiveFeatureHeading>
        <ResponsiveFeatureDescription>
          Promote local skateboarding events, competitions, and meetups.
        </ResponsiveFeatureDescription>
        {/* Add content display for skateboarding events */}
      </FeatureContainer>

      {/* Skateboarding Stories */}
      <FeatureContainer>
        <ResponsiveFeatureHeading>Skateboarding Stories</ResponsiveFeatureHeading>
        <ResponsiveFeatureDescription>
          Feature inspiring stories of skateboarders who have overcome challenges or made a positive impact.
        </ResponsiveFeatureDescription>
        {/* Add content display for skateboarding stories */}
      </FeatureContainer>

      {/* Forums and Discussion Boards */}
      <FeatureContainer>
        <ResponsiveFeatureHeading>Forums and Discussion Boards</ResponsiveFeatureHeading>
        <ResponsiveFeatureDescription>
          Create discussion boards or forums for users to ask questions, seek advice, and share tips.
        </ResponsiveFeatureDescription>
        {/* Add content display for forums */}
      </FeatureContainer>

      {/* User Profiles */}
      <FeatureContainer>
        <ResponsiveFeatureHeading>User Profiles</ResponsiveFeatureHeading>
        <ResponsiveFeatureDescription>
          Allow users to create profiles with their skateboarding achievements and history.
        </ResponsiveFeatureDescription>
        {/* Add content display for user profiles */}
      </FeatureContainer>

      {/* Skateboarding Art and Culture */}
      <FeatureContainer>
        <ResponsiveFeatureHeading>Skateboarding Art and Culture</ResponsiveFeatureHeading>
        <ResponsiveFeatureDescription>
          Showcase skateboarding-related artwork, music, fashion, and culture.
        </ResponsiveFeatureDescription>
        {/* Add content display for art and culture */}
      </FeatureContainer>

      {/* Skateboarding Videos */}
      <FeatureContainer>
        <ResponsiveFeatureHeading>Skateboarding Videos</ResponsiveFeatureHeading>
        <ResponsiveFeatureDescription>
          Create a video library featuring skateboarding content from the community.
        </ResponsiveFeatureDescription>
        {/* Add content display for skateboarding videos */}
      </FeatureContainer>

      {/* Community Challenges */}
      <FeatureContainer>
        <ResponsiveFeatureHeading>Community Challenges</ResponsiveFeatureHeading>
        <ResponsiveFeatureDescription>
          Challenge the community to contribute to skateboarding-related causes or initiatives.
        </ResponsiveFeatureDescription>
        {/* Add content display for community challenges */}
      </FeatureContainer>

      {/* Community Feedback */}
      <FeatureContainer>
        <ResponsiveFeatureHeading>Community Feedback</ResponsiveFeatureHeading>
        <ResponsiveFeatureDescription>
          Invite users to provide feedback on the app and suggest improvements.
        </ResponsiveFeatureDescription>
        {/* Add content display for community feedback */}
      </FeatureContainer>

      {/* Skateboarding Tips and Tricks */}
      <FeatureContainer>
        <ResponsiveFeatureHeading>Skateboarding Tips and Tricks</ResponsiveFeatureHeading>
        <ResponsiveFeatureDescription>
          Share valuable tips and tricks contributed by experienced skateboarders within the community.
        </ResponsiveFeatureDescription>
        {/* Add content display for tips and tricks */}
      </FeatureContainer>

      {/* Featured Community Members */}
      <FeatureContainer>
        <ResponsiveFeatureHeading>Featured Community Members</ResponsiveFeatureHeading>
        <ResponsiveFeatureDescription>
          Celebrate outstanding community members and their contributions.
        </ResponsiveFeatureDescription>
        {/* Add content display for featured community members */}
      </FeatureContainer>

      {/* Local Skateboarding News */}
      <FeatureContainer>
        <ResponsiveFeatureHeading>Local Skateboarding News</ResponsiveFeatureHeading>
        <ResponsiveFeatureDescription>
          Provide updates on local skateboarding news and events.
        </ResponsiveFeatureDescription>
        {/* Add content display for local news */}
      </FeatureContainer>

      {/* User-Generated Contests */}
      <FeatureContainer>
        <ResponsiveFeatureHeading>User-Generated Contests</ResponsiveFeatureHeading>
        <ResponsiveFeatureDescription>
          Organize contests where users can submit their skateboarding-related content for prizes.
        </ResponsiveFeatureDescription>
        {/* Add content display for user-generated contests */}
      </FeatureContainer>
    </CommunityContainer>
  );
};

export default Community;
