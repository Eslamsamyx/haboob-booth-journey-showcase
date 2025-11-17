export const meetingRoomScreen1 = {
  id: 'meeting-room-screen-1',
  name: 'Meeting Room Screen 1',
  description: 'Conference display - shows idle content loop or presentations when device plugged in',
  color: '#6366F1',
  technicalSpecs: {
    screenSize: 'Conference display',
    quantity: '1 screen'
  },
  image: '/zones/meeting-room-screen-1.png',
  topics: [
    {
      id: 'meeting-content-1',
      name: 'Meeting Room Display 1',
      type: 'content',
      content: {
        title: 'Meeting Room Screen 1',
        description: 'Conference display with input-based mode switching',
        mediaType: 'presentation-display',
        explanation: 'Meeting room screen with two simple modes: displays looping idle content when no device is connected, and switches to presentation mode when a laptop or device is plugged in via HDMI or USB-C.',
        operatingModes: {
          idleMode: {
            description: 'Displays when no device is connected',
            duration: 'Continuous 3-minute loop',
            content: [
              'Haboob cybersecurity leadership and trust',
              'Saudi innovation and achievements showcase',
              'Company announcements and highlights',
              'Trust Secures Sustainability messaging'
            ]
          },
          presentationMode: {
            description: 'Activated when device is plugged in',
            trigger: 'HDMI or USB-C connection detected',
            features: [
              'Screen mirroring from connected device',
              'Full HD presentation display',
              'Audio output support',
              'Plug-and-play functionality'
            ]
          }
        },
        features: [
          'Input-based mode switching (HDMI/USB-C detection)',
          'Idle content looping when no device connected',
          'Automatic switch to presentation when device plugged in',
          'Full presentation capabilities from connected devices',
          'Simple plug-and-play operation'
        ]
      }
    }
  ]
};

export const meetingRoomScreen2 = {
  id: 'meeting-room-screen-2',
  name: 'Meeting Room Screen 2',
  description: 'Conference display - shows idle content loop or presentations when device plugged in',
  color: '#8B5CF6',
  technicalSpecs: {
    screenSize: 'Conference display',
    quantity: '1 screen'
  },
  image: '/zones/meeting-room-screen-2.png',
  topics: [
    {
      id: 'meeting-content-2',
      name: 'Meeting Room Display 2',
      type: 'content',
      content: {
        title: 'Meeting Room Screen 2',
        description: 'Conference display with input-based mode switching',
        mediaType: 'presentation-display',
        explanation: 'Meeting room screen with two simple modes: displays looping idle content when no device is connected, and switches to presentation mode when a laptop or device is plugged in via HDMI or USB-C.',
        operatingModes: {
          idleMode: {
            description: 'Displays when no device is connected',
            duration: 'Continuous 3-minute loop',
            content: [
              'Haboob cybersecurity leadership and trust',
              'Saudi innovation and achievements showcase',
              'Company announcements and highlights',
              'Trust Secures Sustainability messaging'
            ]
          },
          presentationMode: {
            description: 'Activated when device is plugged in',
            trigger: 'HDMI or USB-C connection detected',
            features: [
              'Screen mirroring from connected device',
              'Full HD presentation display',
              'Audio output support',
              'Plug-and-play functionality'
            ]
          }
        },
        features: [
          'Input-based mode switching (HDMI/USB-C detection)',
          'Idle content looping when no device connected',
          'Automatic switch to presentation when device plugged in',
          'Full presentation capabilities from connected devices',
          'Simple plug-and-play operation'
        ]
      }
    }
  ]
};
