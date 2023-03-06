export const menuItems = [
  {
    title: 'Home',
    url: '',
  },
  {
    title: 'Event Details',
    submenu: [
      {
        title: 'General Info',
        url: 'details'
      },
      {
        title: 'Main Stage',
        url: 'details/main-stage'
      },
      {
        title: 'Small Stage',
        url: 'details/small-stage'
      },
      {
        title: 'Community Stalls',
        url: 'details/community-stalls'
      },
      {
        title: 'Commercial Stalls',
        url: 'details/commercial-stalls'
      }
    ]
  },
  {
    title: 'Artists and Speakers',
    url: 'guests',

  },
  {
    title: 'About',
    submenu: [
      {
        title: 'About Pride',
        url: 'about'
      },
      {
        title: 'For Business',
        url: 'about/for-business'
      },
      {
        title: 'The Team',
        url: 'about/the-team'
      }
    ]
  },
  {
    title: 'Sponsor Pride',
    url: 'sponsor',

  },
  {
    title: 'Contact Us',
    url: 'contact',

  }
]