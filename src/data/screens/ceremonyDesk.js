export const ceremonyDeskScreen = {
  id: 'ceremony-desk',
  name: 'Ceremony Desk',
  description: 'Reception and ceremony desk display',
  color: '#F59E0B',
  technicalSpecs: {
    screenSize: 'Desk display',
    quantity: '1 screen'
  },
  image: '/zones/ceremony-desk.png',
  topics: [
    {
      id: 'ceremony-welcome',
      name: 'Ceremony Welcome',
      type: 'content',
      content: {
        title: 'Reception Desk Display',
        description: 'Welcome and ceremony information',
        mediaType: 'display',
        explanation: 'The ceremony desk display provides welcome messages and event information for visitors.'
      }
    }
  ]
};
