export const centralInteractiveDemoScreen = {
  id: 'central-interactive-demo',
  name: 'Central Interactive Demo',
  description: 'Main demonstration area - Anamorphic 3D videos & interactive activations',
  color: '#0EA5E9',
  technicalSpecs: {
    screenSize: 'Large interactive display',
    quantity: 'Central zone'
  },
  image: '/zones/central-interactive-demo.png',
  topics: [
    {
      id: 'demo-station',
      name: 'Interactive Demo Station',
      type: 'activation',
      content: {
        title: 'Central Demo Experience',
        description: 'Anamorphic 3D videos and hands-on cybersecurity demonstrations',
        mediaType: 'interactive-display',
        explanation: 'The central interactive demo station is the centerpiece of the booth, visible from outside. It features stunning anamorphic 3D videos that create eye-catching visual effects, capturing attention of passersby. When not actively being used for interactive demonstrations, the screen displays looping idle content including Haboob branding, cybersecurity visualizations, and 3D animations. During active sessions, visitors can engage with hands-on cybersecurity tool demonstrations and interactive product experiences.',
        operatingModes: {
          idleMode: {
            description: 'Displays when not actively being used',
            content: [
              'Anamorphic 3D video animations',
              'Eye-catching visual effects visible from outside',
              'Haboob cybersecurity branding loops',
              'Dynamic security visualizations',
              'Rotating product showcases'
            ],
            duration: 'Continuous loop'
          },
          activeMode: {
            description: 'Interactive demonstration sessions',
            content: [
              'Hands-on cybersecurity tool demos',
              'Live threat detection simulations',
              'Interactive product walkthroughs',
              'Real-time security monitoring showcase',
              'Guided solution presentations'
            ]
          }
        },
        features: [
          'Anamorphic 3D video technology',
          'Dual-mode: idle content + active demos',
          'Visible from outside the booth',
          'Attention-grabbing visual centerpiece',
          'Interactive cybersecurity demonstrations',
          'Seamless mode switching'
        ]
      }
    }
  ]
};
