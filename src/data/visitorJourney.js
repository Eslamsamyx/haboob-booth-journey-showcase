import images from '../assets/images';
import {
  HiSparkles,
  HiCursorArrowRays,
  HiShieldCheck,
  HiTrophy,
  HiRocketLaunch,
  HiUserGroup,
  HiChatBubbleLeftRight,
  HiCommandLine,
  HiPresentationChartLine,
  HiBriefcase,
  HiBeaker,
  HiNewspaper
} from 'react-icons/hi2';

export const journeyStations = [
  // GROUND FLOOR - Visible from outside
  {
    id: 'outer-vip-lounge-display',
    order: 1,
    phase: 'attract',
    title: 'Outer VIP-Lounge Display',
    subtitle: 'Transparent Screen Attraction',
    emotionalGoal: 'Capture attention with cutting-edge transparent technology',
    visitorState: 'Passing by booth, curiosity sparked',
    location: 'Outside booth - VIP Lounge exterior',
    screens: [
      {
        type: 'Transparent display screen',
        quantity: 1,
        media: [
          {
            type: 'image',
            url: '/zones/outer-meeting-room.png',
            caption: 'Transparent screen visible from outside booth'
          }
        ]
      }
    ],
    keyFeatures: [
      'Visible from outside the booth',
      'Transparent screen technology',
      'Trust Secures Sustainability messaging',
      'Continuous Haboob branding loop'
    ],
    duration: '2 minutes loop',
    color: '#00B27A',
    gradient: 'linear-gradient(135deg, #00B27A 0%, #8EDD65 100%)',
    image: '/zones/outer-meeting-room.png',
    icon: HiSparkles,
    description: 'First visual attraction - transparent screen facing outward showcasing Haboob\'s cybersecurity leadership and Saudi innovation.'
  },
  {
    id: 'booth-screens-attraction',
    order: 2,
    phase: 'attract',
    title: 'Booth Screens & Central Demo',
    subtitle: 'Immersive Visual Experience',
    emotionalGoal: 'Captivate with large-scale visual displays',
    visitorState: 'Drawn in by stunning screen array',
    location: 'Central booth area - highly visible',
    screens: [
      {
        type: 'Multiple large displays + central interactive demo',
        quantity: 'Full booth coverage',
        media: [
          {
            type: 'image',
            url: '/zones/central-interactive-demo.png',
            caption: 'Booth screens and central demo creating immersive attraction'
          }
        ]
      }
    ],
    keyFeatures: [
      'Large booth screens creating visual impact',
      'Central interactive demo with anamorphic 3D',
      'Continuous attraction in idle state',
      'Engaging even when actively triggered',
      'Visible from outside - draws visitors in'
    ],
    duration: 'Continuous visual attraction',
    color: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
    image: '/zones/central-interactive-demo.png',
    icon: HiCursorArrowRays,
    description: 'Second visual attraction - the big booth screens combined with the central interactive demo create a stunning immersive display. Whether idle with looping content or actively demonstrating, these screens capture and hold visitor attention.'
  },
  {
    id: 'reception-desk',
    order: 3,
    phase: 'attract',
    title: 'Entrance & Welcome',
    subtitle: 'Main Ground Floor Reception',
    emotionalGoal: 'Create warm, professional first impression',
    visitorState: 'Entering booth, being welcomed',
    location: 'Main entrance - Ground floor',
    screens: [
      {
        type: 'Reception desk with elegant design',
        quantity: 1,
        media: [
          {
            type: 'image',
            url: '/zones/reception-desk.png',
            caption: 'Elegant reception desk welcoming visitors'
          }
        ]
      }
    ],
    keyFeatures: [
      'Main entrance point',
      'Elegant, welcoming design',
      'Professional visitor greeting',
      'First touchpoint for all guests',
      'Information and orientation hub'
    ],
    duration: '2-3 minutes',
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
    image: '/zones/reception-desk.png',
    icon: HiUserGroup,
    description: 'Reception desk - welcoming visitors with elegant design at the main ground floor entrance.'
  },
  {
    id: 'ceremony-desk',
    order: 4,
    phase: 'attract',
    title: 'Partners Desk (Ceremony Desk)',
    subtitle: 'Partnership & Collaboration Hub',
    emotionalGoal: 'Foster strategic partnerships',
    visitorState: 'Partner engagement, collaboration discussions',
    location: 'Adjacent to reception - Ground floor',
    screens: [
      {
        type: 'Desk display',
        quantity: 1,
        media: [
          {
            type: 'image',
            url: '/zones/ceremony-desk.png',
            caption: 'Partners desk for collaboration and ceremonies'
          }
        ]
      }
    ],
    keyFeatures: [
      'Partnership coordination',
      'Strategic collaboration discussions',
      'Ceremony and event handling',
      'Partner onboarding',
      'Alliance building hub'
    ],
    duration: '3-5 minutes',
    color: '#F59E0B',
    gradient: 'linear-gradient(135deg, #F59E0B 0%, #FBBF24 100%)',
    image: '/zones/ceremony-desk.png',
    icon: HiUserGroup,
    description: 'Partners desk (ceremony desk) - dedicated space for partnership discussions, strategic collaborations, and special ceremonies with Haboob partners.'
  },
  {
    id: 'services-screens',
    order: 5,
    phase: 'experience',
    title: 'Services Screens',
    subtitle: 'Solutions Showcase (Ground Floor)',
    emotionalGoal: 'Demonstrate comprehensive capabilities',
    visitorState: 'Informed, evaluating solutions',
    location: 'Ground floor services area',
    screens: [
      {
        type: 'Multiple displays',
        quantity: 'Services zone',
        media: [
          {
            type: 'image',
            url: '/zones/services-screens.png',
            caption: 'Services and solutions display'
          }
        ]
      }
    ],
    keyFeatures: [
      'Full service portfolio',
      'Cybersecurity solutions overview',
      'Industry-specific offerings',
      'Partnership capabilities'
    ],
    duration: '5-10 minutes',
    color: '#14B8A6',
    gradient: 'linear-gradient(135deg, #14B8A6 0%, #2DD4BF 100%)',
    image: '/zones/services-screens.png',
    icon: HiPresentationChartLine,
    description: 'Comprehensive displays showcasing Haboob\'s complete range of cybersecurity services across government and private sectors.'
  },
  {
    id: 'first-floor-activation',
    order: 6,
    phase: 'experience',
    title: 'First Floor Activation',
    subtitle: 'Interactive Engagement Zone',
    emotionalGoal: 'Create memorable interactive moments',
    visitorState: 'Active participation',
    location: 'Ground floor activation area',
    screens: [
      {
        type: 'Interactive displays',
        quantity: 'First floor zone',
        media: [
          {
            type: 'image',
            url: '/zones/first-floor-activation.png',
            caption: 'Interactive activation zone'
          }
        ]
      }
    ],
    keyFeatures: [
      'Gamified security awareness',
      'Interactive challenges',
      'Educational content',
      'Engagement activities'
    ],
    duration: '10-15 minutes',
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
    image: '/zones/first-floor-activation.png',
    icon: HiUserGroup,
    description: 'Engaging activation zone with interactive cybersecurity challenges and educational experiences.'
  },
  {
    id: 'capture-the-flag',
    order: 7,
    phase: 'experience',
    title: 'Capture the Flag',
    subtitle: 'Cybersecurity Challenge (Ground Floor)',
    emotionalGoal: 'Excitement through gamified learning',
    visitorState: 'Engaged, competitive',
    location: 'Ground floor challenge zone',
    screens: [
      {
        type: 'Gaming displays',
        quantity: 'Challenge zone',
        media: [
          {
            type: 'image',
            url: '/zones/capture-the-flag.png',
            caption: 'CTF cybersecurity challenges'
          }
        ]
      }
    ],
    keyFeatures: [
      'Hands-on hacking challenges',
      'Real-world security scenarios',
      'Competitive gameplay',
      'Skill-building exercises'
    ],
    duration: '15-30 minutes',
    color: '#DC2626',
    gradient: 'linear-gradient(135deg, #DC2626 0%, #EF4444 100%)',
    image: '/zones/capture-the-flag.png',
    icon: HiTrophy,
    description: 'Test cybersecurity skills in our CTF competition - hands-on challenges demonstrating Haboob\'s expertise in security training.'
  },
  {
    id: 'central-interactive-demo',
    order: 8,
    phase: 'attract',
    title: 'Central Interactive Demo',
    subtitle: 'Anamorphic 3D Centerpiece',
    emotionalGoal: 'Wow visitors with stunning visual effects',
    visitorState: 'Attracted by visuals, approaching booth',
    location: 'Central area - visible from outside',
    screens: [
      {
        type: 'Large interactive display',
        quantity: 'Central zone',
        media: [
          {
            type: 'image',
            url: '/zones/central-interactive-demo.png',
            caption: 'Anamorphic 3D videos and interactive demonstrations'
          }
        ]
      }
    ],
    keyFeatures: [
      'Anamorphic 3D video animations',
      'Visible from outside booth',
      'Idle mode: looping visual content',
      'Active mode: hands-on demos',
      'Eye-catching centerpiece'
    ],
    duration: 'Continuous loop / 10-15 min demos',
    color: '#0EA5E9',
    gradient: 'linear-gradient(135deg, #0EA5E9 0%, #38BDF8 100%)',
    image: '/zones/central-interactive-demo.png',
    icon: HiRocketLaunch,
    description: 'The booth centerpiece - stunning anamorphic 3D videos attract attention when idle, transforming into interactive cybersecurity demonstrations during active sessions.'
  },
  {
    id: 'coffee-zone',
    order: 9,
    phase: 'experience',
    title: 'Coffee Zone',
    subtitle: 'Refreshment & Networking Hub',
    emotionalGoal: 'Create comfortable networking atmosphere',
    visitorState: 'Relaxed, informal networking',
    location: 'Ground floor - hospitality area',
    screens: [
      {
        type: 'Coffee zone with branded elements',
        quantity: 1,
        media: [
          {
            type: 'image',
            url: '/zones/coffee-zone.png',
            caption: 'Coffee zone with barista space and branded amenities'
          }
        ]
      }
    ],
    keyFeatures: [
      'Professional barista space',
      'Storage drawers for supplies',
      'Power outlets for device charging',
      'Haboob branded cups and materials',
      'Comfortable networking area'
    ],
    duration: '5-15 minutes',
    color: '#92400E',
    gradient: 'linear-gradient(135deg, #92400E 0%, #B45309 100%)',
    image: '/zones/coffee-zone.png',
    icon: HiBeaker,
    description: 'Coffee zone - a welcoming hospitality area featuring barista space, drawers, power outlets, and Haboob branded cups for comfortable networking and refreshment.'
  },
  {
    id: 'visitors-lounge',
    order: 10,
    phase: 'experience',
    title: 'Visitors Lounge',
    subtitle: 'Relaxation & Social Hub',
    emotionalGoal: 'Provide comfortable space for relaxation and informal discussions',
    visitorState: 'Relaxed, casual networking',
    location: 'Ground floor - lounge area',
    screens: [
      {
        type: 'Lounge seating area',
        quantity: 1,
        media: [
          {
            type: 'image',
            url: '/zones/visitors-lounge.png',
            caption: 'Comfortable visitors lounge for relaxation'
          }
        ]
      }
    ],
    keyFeatures: [
      'Comfortable seating arrangements',
      'Casual networking space',
      'Relaxation area',
      'Informal meeting point',
      'Social interaction hub'
    ],
    duration: '10-20 minutes',
    color: '#7C3AED',
    gradient: 'linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)',
    image: '/zones/visitors-lounge.png',
    icon: HiUserGroup,
    description: 'Visitors lounge - a comfortable relaxation and social hub providing casual seating for informal networking and discussions.'
  },
  // SECOND FLOOR - Private spaces
  {
    id: 'vip-lounge',
    order: 11,
    phase: 'engage',
    title: 'VIP Lounge',
    subtitle: 'Second Floor - Premium Guest Experience',
    emotionalGoal: 'Create exclusivity and comfort',
    visitorState: 'Relaxed, premium engagement',
    location: 'Second floor VIP area',
    screens: [
      {
        type: 'Multiple displays',
        quantity: 'VIP area',
        media: [
          {
            type: 'image',
            url: '/zones/VIP-lounge.png',
            caption: 'Exclusive VIP lounge on second floor'
          }
        ]
      }
    ],
    keyFeatures: [
      'Second floor premium space',
      'Comfortable seating',
      'Private consultations',
      'Executive engagement'
    ],
    duration: '15-30 minutes',
    color: '#9333EA',
    gradient: 'linear-gradient(135deg, #9333EA 0%, #A855F7 100%)',
    image: '/zones/VIP-lounge.png',
    icon: HiShieldCheck,
    description: 'Premium second-floor space for VIP guests - comfortable environment for executive-level cybersecurity consultations.'
  },
  {
    id: 'meeting-room-screen-1',
    order: 12,
    phase: 'collaborate',
    title: 'Meeting Room 1',
    subtitle: 'Second Floor - Consultation Space',
    emotionalGoal: 'Enable focused business discussions',
    visitorState: 'Decision-making mode',
    location: 'Second floor meeting room 1',
    screens: [
      {
        type: 'Conference display',
        quantity: 1,
        media: [
          {
            type: 'image',
            url: '/zones/meeting-room-screen-1.png',
            caption: 'Conference room presentation display'
          }
        ]
      }
    ],
    keyFeatures: [
      'Second floor location',
      'Private consultation space',
      'Presentation mode capabilities',
      'Idle branding when available'
    ],
    duration: '30-60 minutes',
    color: '#6366F1',
    gradient: 'linear-gradient(135deg, #6366F1 0%, #818CF8 100%)',
    image: '/zones/meeting-room-screen-1.png',
    icon: HiChatBubbleLeftRight,
    description: 'Second-floor meeting space for in-depth consultations. Screen shows Haboob branding when idle, switches to presentation mode when device is plugged in.'
  },
  {
    id: 'meeting-room-screen-2',
    order: 13,
    phase: 'collaborate',
    title: 'Meeting Room 2',
    subtitle: 'Second Floor - Consultation Space',
    emotionalGoal: 'Enable focused business discussions',
    visitorState: 'Decision-making mode',
    location: 'Second floor meeting room 2',
    screens: [
      {
        type: 'Conference display',
        quantity: 1,
        media: [
          {
            type: 'image',
            url: '/zones/meeting-room-screen-2.png',
            caption: 'Conference room presentation display'
          }
        ]
      }
    ],
    keyFeatures: [
      'Second floor location',
      'Parallel consultation capability',
      'Presentation mode capabilities',
      'Idle branding when available'
    ],
    duration: '30-60 minutes',
    color: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
    image: '/zones/meeting-room-screen-2.png',
    icon: HiChatBubbleLeftRight,
    description: 'Second meeting space enabling parallel client engagements. Dual-mode display for idle branding and active presentations.'
  },
  {
    id: 'brochure-stands',
    order: 14,
    phase: 'experience',
    title: 'Brochure Stands',
    subtitle: 'Strategically Placed Throughout the Booth',
    emotionalGoal: 'Provide easy access to information materials',
    visitorState: 'Information gathering, takeaway materials',
    location: 'Multiple locations throughout booth',
    screens: [
      {
        type: 'Information stands',
        quantity: 'Multiple stands distributed',
        media: [
          {
            type: 'image',
            url: '/zones/Brochure-Stands.png',
            caption: 'Brochure stands strategically placed throughout booth'
          }
        ]
      }
    ],
    keyFeatures: [
      'Multiple stands distributed throughout booth',
      'Easy access to marketing materials',
      'Haboob service brochures',
      'Product information sheets',
      'Strategic placement for maximum visibility'
    ],
    duration: '1-3 minutes',
    color: '#059669',
    gradient: 'linear-gradient(135deg, #059669 0%, #10B981 100%)',
    image: '/zones/Brochure-Stands.png',
    icon: HiNewspaper,
    description: 'Brochure stands - strategically placed throughout the booth providing easy access to Haboob marketing materials, service brochures, and product information.'
  },
  {
    id: 'hr-room',
    order: 15,
    phase: 'collaborate',
    title: 'HR Room',
    subtitle: 'Second Floor - Talent & Recruitment',
    emotionalGoal: 'Attract top cybersecurity talent',
    visitorState: 'Career-focused, exploring opportunities',
    location: 'Second floor HR space',
    screens: [
      {
        type: 'Display screen',
        quantity: 1,
        media: [
          {
            type: 'image',
            url: '/zones/hr-room.png',
            caption: 'HR and recruitment space'
          }
        ]
      }
    ],
    keyFeatures: [
      'Second floor location',
      'Private recruitment interviews',
      'Career opportunity presentations',
      'Saudi talent development focus'
    ],
    duration: '20-45 minutes',
    color: '#7C3AED',
    gradient: 'linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)',
    image: '/zones/hr-room.png',
    icon: HiBriefcase,
    description: 'Dedicated second-floor space for talent acquisition and recruitment - showcasing career opportunities with Saudi Arabia\'s leading cybersecurity company.'
  }
];

// Journey phases that visitors experience
export const journeyPhases = [
  { id: 'attract', name: 'Attract', color: '#EC4899', description: 'Capture attention from outside the booth' },
  { id: 'engage', name: 'Engage', color: '#9333EA', description: 'Create premium experiences on second floor' },
  { id: 'experience', name: 'Experience', color: '#0EA5E9', description: 'Hands-on interaction on ground floor' },
  { id: 'collaborate', name: 'Collaborate', color: '#6366F1', description: 'Private consultations on second floor' }
];

// Journey statistics
export const journeyStats = [
  { label: 'Total Stations', value: '15', icon: HiCommandLine },
  { label: 'Average Time', value: '70-125 min', icon: HiRocketLaunch },
  { label: 'Interactive Zones', value: '11', icon: HiUserGroup }
];
