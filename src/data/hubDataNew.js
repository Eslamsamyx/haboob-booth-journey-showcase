// Import screen components
import { vipLoungeScreen } from './screens/vipLounge.js';
import { captureTheFlagScreen } from './screens/captureTheFlag.js';
import { centralInteractiveDemoScreen } from './screens/centralInteractiveDemo.js';
import { ceremonyDeskScreen } from './screens/ceremonyDesk.js';
import { firstFloorActivationScreen } from './screens/firstFloorActivation.js';
import { meetingRoomScreen1, meetingRoomScreen2 } from './screens/meetingRoomScreens.js';
import { outerVIPLoungeDisplayScreen } from './screens/outerMeetingRoom.js';
import { servicesScreensScreen } from './screens/servicesScreens.js';
import { hrRoomScreen } from './screens/hrRoom.js';

export const hubData = {
  entrance: {
    quote: "Trust Secures Sustainability",
    welcomeMessages: [
      "One Stop Shop For Cybersecurity Services and Solutions",
      "Professional cybersecurity powered by a Saudi team and cutting-edge technologies"
    ],
    ceoMessage: "Haboob ensures business continuity and security through advanced services and solutions, safeguarding your assets and empowering a resilient digital future. As Saudi Arabia's leading cybersecurity company, we're proud to protect what matters most."
  },

  // Physical screens in the hub
  screens: [
    outerVIPLoungeDisplayScreen,
    centralInteractiveDemoScreen,
    ceremonyDeskScreen,
    captureTheFlagScreen,
    servicesScreensScreen,
    firstFloorActivationScreen,
    vipLoungeScreen,
    meetingRoomScreen1,
    meetingRoomScreen2,
    hrRoomScreen
  ]
};

// Helper functions
export const getScreenById = (screenId) => {
  return hubData.screens.find(screen => screen.id === screenId);
};

export const getTopicById = (screenId, topicId) => {
  const screen = getScreenById(screenId);
  return screen?.topics.find(topic => topic.id === topicId);
};

export const getAllTopics = () => {
  const allTopics = [];
  hubData.screens.forEach(screen => {
    screen.topics.forEach(topic => {
      allTopics.push({
        topic: topic,
        screen: screen,
        screenId: screen.id
      });
    });
  });
  return allTopics;
};

export const getAllScreens = () => {
  return hubData.screens;
};
