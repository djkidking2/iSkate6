import React from 'react';
import styled from 'styled-components';

// Styled components for the Tricks and Tutorials section
const TricksAndTutorialsContainer = styled.div`
  padding: 20px;
  background-color: #f4f4f4;
`;

const SectionHeader = styled.h2`
  font-size: 24px;
  margin-top: 20px;
`;

const TutorialCard = styled.div`
  background-color: white;
  padding: 20px;
  margin: 20px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const TutorialTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
`;

const TutorialDescription = styled.p`
  font-size: 16px;
`;

const VideoEmbed = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  margin-top: 10px;

  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
`;

const TricksAndTutorials = () => {
  return (
    <TricksAndTutorialsContainer>
      <SectionHeader>Trick Tutorials</SectionHeader>
      <TutorialCard>
        <TutorialTitle>Ollie Tutorial</TutorialTitle>
        <TutorialDescription>
          Learn how to perform a perfect ollie with this step-by-step guide.
        </TutorialDescription>
        <VideoEmbed>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Ollie Tutorial"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </VideoEmbed>
      </TutorialCard>

      <SectionHeader>Video Demonstrations</SectionHeader>
      <TutorialCard>
        <VideoEmbed>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VIDEO_ID"
            title="Kickflip Demonstration"
            frameborder="0"
            allowFullscreen
          ></iframe>
        </VideoEmbed>
      </TutorialCard>

      <SectionHeader>Tips and Techniques</SectionHeader>
      <TutorialCard>
        <TutorialTitle>Improving Balance</TutorialTitle>
        <TutorialDescription>
          Tips for improving your balance on the skateboard.
        </TutorialDescription>
      </TutorialCard>

      <SectionHeader>Safety and Gear Guides</SectionHeader>
      <TutorialCard>
        <TutorialTitle>Skateboard Safety</TutorialTitle>
        <TutorialDescription>
          Tips for staying safe while skateboarding.
        </TutorialDescription>
      </TutorialCard>

      <SectionHeader>Skateboard Maintenance</SectionHeader>
      <TutorialCard>
        <TutorialTitle>Grip Tape Replacement</TutorialTitle>
        <TutorialDescription>
          Step-by-step guide to replacing grip tape.
        </TutorialDescription>
      </TutorialCard>

      {/* Add more sections for spot recommendations, guest tutorials, user-generated content, Q&A, challenges, and recommended resources */}
    </TricksAndTutorialsContainer>
  );
};

export default TricksAndTutorials;
