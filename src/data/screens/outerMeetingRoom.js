export const outerVIPLoungeDisplayScreen = {
  id: 'outer-vip-lounge-display',
  name: 'Outer VIP-Lounge Display',
  description: 'Transparent screen display - attracts external visitors with Haboob branding',
  color: '#EC4899',
  technicalSpecs: {
    screenSize: 'Transparent display screen',
    quantity: '1 screen'
  },
  image: '/zones/outer-meeting-room.png',
  topics: [
    {
      id: 'transparent-display-content',
      name: 'Transparent Display Content',
      type: 'content',
      content: {
        title: 'Outer VIP-Lounge Transparent Display',
        description: 'Premium transparent screen technology targeting external booth visitors',
        mediaType: 'transparent-display',
        explanation: 'This transparent screen is positioned outside the VIP lounge area, facing outward to attract and engage visitors passing by the booth. The content is specifically designed for external viewers, continuously displaying looping content including Haboob brand messages, core values (Trust Secures Sustainability), and cybersecurity leadership. The transparent technology creates an immersive, futuristic appearance while maintaining visibility into the VIP lounge space.',
        targetAudience: 'External booth visitors and passersby',
        viewingDirection: 'Content faces outward - visible to visitors outside the booth',
        features: [
          'Transparent screen technology for premium visual appeal',
          'Continuous looping content - no idle state',
          'Haboob brand messaging and company values',
          'External visitor attraction and engagement',
          'Innovation and achievement highlights',
          'Seamless content transitions'
        ],
        contentLoop: {
          duration: 'Continuous 2-minute loop',
          elements: [
            'Haboob cybersecurity branding and logo animations',
            'Core value: Trust Secures Sustainability',
            'One Stop Shop For Cybersecurity - welcome messaging',
            'Saudi cybersecurity leadership and achievements',
            'Advanced security solutions and 24/7 protection',
            'Call-to-action: Visit our booth'
          ]
        }
      }
    }
  ]
};
