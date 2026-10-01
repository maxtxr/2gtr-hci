const competitors = [
  {
    id: 'facebook-events-eventbrite',
    name: 'Facebook Events / Eventbrite',
    focus: 'General-purpose event creation and discovery',
    strengths: [
      'Large existing user base',
      'Familiar RSVP and calendar flows',
    ],
    weaknesses: [
      'General-purpose and cluttered - sports events sit among everything else',
      'No sports-specific filters: proficiency, gear or accessibility',
      'No casual partner matchmaking for solo newcomers',
    ],
  },
  {
    id: 'sportorganizer-boxoffice',
    name: 'SportOrganizer / BoxOffice',
    focus: 'Sports session administration and venue ticketing',
    strengths: [
      'Robust roster management for established groups',
      'Venue ticketing and payments handled in one place',
    ],
    weaknesses: [
      'Strictly administrative and transactional',
      'Poor ad-hoc discovery for solo newcomers',
      'Zero post-event social engagement',
    ],
  },
]

const differentiators = {
  heading: 'How 2Gether is different',
  body: '2Gether’s fix: sport-specific filtering - skill matching plus accessibility verification - combined with an engaging, gamified social feed tailored for ad-hoc group sports.',
  items: [
    {
      id: 'sports-first',
      title: 'Sport-specific filtering',
      body: 'Sport, distance, accessibility and proficiency (beginner → advanced) are first-class filters, instead of scrolling a cluttered general-purpose listing built for every other kind of event.',
    },
    {
      id: 'proficiency',
      title: 'Skill matching that does not intimidate',
      body: 'Skill level is a first-class attribute on both events and people, so beginners land in beginner sessions and advanced athletes can find competitive peers.',
    },
    {
      id: 'accessibility',
      title: 'Accessibility verified, not implied',
      body: 'Suitability for reduced mobility, seniors and children is stated on the event itself, addressing the inclusivity gap no competitor explicitly covers.',
    },
    {
      id: 'social-feed',
      title: 'A gamified social feed',
      body: 'Post-event photos, badges, streaks and milestones turn ad-hoc sessions into a regular crew - the layer both competitor types leave out.',
    },
  ],
}

const landscape = { competitors, differentiators }

export default landscape
