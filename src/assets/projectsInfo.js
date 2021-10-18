import interviewScheduler1 from '../assets/projects/interview-scheduler-1.png';
import interviewScheduler2 from '../assets/projects/interview-scheduler-2.png';
import jungleRails1 from '../assets/projects/jungle-rails-1.png';
import jungleRails2 from '../assets/projects/jungle-rails-2.png';
import jungleRails3 from '../assets/projects/jungle-rails-3.png';
import insight1 from '../assets/projects/insight-1.png';
import insight2 from '../assets/projects/insight-2.png';
import insight3 from '../assets/projects/insight-3.png';
import insight4 from '../assets/projects/insight-4.png';
import insight5 from '../assets/projects/insight-5.png';
import insight6 from '../assets/projects/insight-6.png';
import insight7 from '../assets/projects/insight-7.png';
import insight8 from '../assets/projects/insight-8.png';
import insight9 from '../assets/projects/insight-9.png';
import insight10 from '../assets/projects/insight-10.png';
import leagueFrontend1 from '../assets/projects/league-frontend-1.png';
import leagueFrontend2 from '../assets/projects/league-frontend-2.png';
import leagueFrontend3 from '../assets/projects/league-frontend-3.png';
import shopifyFrontend1 from '../assets/projects/shopify-frontend-1.png';

const projects = {
  "1": {
    title: "Interview Scheduler",
    description: "Single-page app, built on React components, which helps book, edit, and cancel appointments. Tech stack: React, Express, SQL, Jest, Storybook, Cypress",
    link: {
      type: 'github',
      url: "https://github.com/gybubest/scheduler"
    },
    snapshots: [
      interviewScheduler1,
      interviewScheduler2
    ]
  },
  "2": {
    title: "Jungle-rails",
    description: "E-commerce application built with Rails. Tech stack: Ruby on Rails, PostgreSQL, RSpec, Capybara",
    link: {
      type: 'github',
      url: "https://github.com/gybubest/jungle-rails"
    },
    snapshots: [
      jungleRails1,
      jungleRails2,
      jungleRails3
    ]
  },
  "3": {
    title: "Album Viewer",
    description: "SPA based on React which enables users to view albums and search photos inside an album",
    link: {
      type: 'website',
      url: "https://league-f.herokuapp.com/"
    },
    snapshots: [
      leagueFrontend1,
      leagueFrontend2,
      leagueFrontend3
    ]
  },
  "4": {
    title: "Movie Collection",
    description: "SPA based on React which enables users to search movies from OMDB, select up to 5 favourites for nomination.",
    link: {
      type: 'website',
      url: "https://s-f.herokuapp.com/"
    },
    snapshots: [
      shopifyFrontend1
    ]
  },
  "5": {
    title: "Insight",
    description: "Networking application which helps employers leverage their employees to make references, and open up the hidden job market for individual users. Tech stack: React, Ruby on Rails, Active Record, PostgreSQL",
    link: {
      type: 'github',
      url: "https://github.com/gybubest/final-project"
    },
    snapshots: [
      insight1,
      insight2,
      insight3,
      insight4,
      insight5,
      insight6,
      insight7,
      insight8,
      insight9,
      insight10
    ]
  },
  "6": {
    title: "Maegan Back-Office",
    description: "Dashboard application for managing restaurants, menus and online orders.",
    link: null,
    snapshots: null
  }
}

export default projects;