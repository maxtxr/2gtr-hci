const product = {
  headline: 'Play sport. Meet people. Keep going.',
  intro:
    '2Gether combats isolation and promotes a healthy lifestyle by connecting people through casual, community-driven sports events. Create or join local events tailored by sport, distance, accessibility and proficiency level, then keep coming back through the photos, achievements and badges that turn a session into a friendship.',

  problem: {
    heading: 'The problem',
    body: 'Many individuals struggle to stay active not due to a lack of interest, but because exercising alone feels demotivating and finding like-minded partners is difficult.',
    difficulties: [
      {
        id: 'isolation',
        title: 'Social isolation',
        body: 'Difficulty finding companions with compatible schedules, turning workouts into solitary, abandoned routines.',
      },
      {
        id: 'skill',
        title: 'Skill mismatch & intimidation',
        body: 'Beginners feel intimidated joining existing groups, while advanced athletes struggle to find competitive peers.',
      },
      {
        id: 'inclusivity',
        title: 'Lack of inclusivity',
        body: 'People with reduced mobility, seniors, or parents seeking activities for children rarely find events that explicitly state suitability for their specific physical needs.',
      },
    ],
  },

  audience: {
    heading: 'Target users',
    body: 'People of any age and athleticism - the physical qualities characteristic of athletes, such as strength, fitness and agility - who have a phone and basic digital literacy and want to practise sports, learn new activities and socialise. That includes children, young adults, adults and older adults, as well as users with reduced mobility. The app is not built for a "sporty" subgroup: it is for anyone looking for people to play with.',
    roles: [
      {
        id: 'organizer',
        name: 'Organizer',
        summary: 'Creates and manages sports events.',
        needs: [
          'Set sport, level, time, place and participant limit in seconds',
          'See who is coming and manage the roster',
          'Fill a session that would otherwise be cancelled',
        ],
      },
      {
        id: 'participant',
        name: 'Participant',
        summary: 'Joins events and builds a regular routine.',
        needs: [
          'Find events that match my level, not just my postcode',
          'Join with one tap and see who else is coming',
          'Stay motivated with streaks, badges and shared photos',
        ],
      },
    ],
  },

  goals: {
    heading: 'Project goal',
    body: '2Gether aims to combat isolation and promote a healthy lifestyle by connecting people through casual, community-driven sports events. Users create or join local events tailored by sport, distance, accessibility and proficiency level (beginner to advanced). Post-event photo sharing, achievements and badges reward consistency and foster lasting friendships.',
    goals: [
      {
        id: 'match',
        title: 'Match by proficiency, not just location',
        body: 'Events and people carry a skill level, from beginner to advanced, alongside distance and accessibility, so a nervous beginner lands in a beginner session and an experienced player finds competitive peers - nobody is excluded for being new.',
      },
      {
        id: 'motivation',
        title: 'Make showing up the easy part',
        body: 'Achievements, badges and streaks reward consistency and give a reason to come back next week - casual sessions that repeat instead of one-off signups.',
      },
      {
        id: 'belonging',
        title: 'Turn one-off games into a group',
        body: 'Post-event photo sharing and visible regulars build a circle of training partners, so a single match can turn into lasting friendships.',
      },
    ],
  },

  features: {
    heading: 'What the app does',
    body: 'The feature set is expected to evolve with user testing and evaluation results.',
    pillars: [
      {
        id: 'events',
        title: 'Create & join events',
        body: 'Organizers publish a casual session with sport, level, time, place and distance. Participants filter what is happening nearby and join in one tap.',
      },
      {
        id: 'matching',
        title: 'Proficiency & accessibility matching',
        body: 'A shared skill scale (beginner → advanced) plus explicit accessibility suitability - reduced mobility, seniors, children - so people land in sessions where they fit in.',
      },
      {
        id: 'community',
        title: 'Community & connections',
        body: 'See who else is coming, follow the regulars, and keep in touch with the people you actually play with.',
      },
      {
        id: 'photos',
        title: 'Photos & highlights',
        body: 'Share photos and highlights from an event to the group that was there - the social proof that keeps a crew coming back.',
      },
      {
        id: 'progress',
        title: 'Achievements & streaks',
        body: 'Badges, streaks and progress milestones for consistent participation. Lightweight on purpose: reward showing up, not winning.',
      },
    ],
  },

  principles: {
    heading: 'Design principles',
    items: [
      'Inclusive by default - usable for children, older adults and reduced-mobility users, not a special mode.',
      'One tap to join - the fewer steps between "I want to play" and "I am playing", the better.',
      'Progress, not pressure - gamification nudges, it never shames.',
      'Trust signals - level, age range and accessibility info before you commit to showing up.',
    ],
  },
}

export default product
