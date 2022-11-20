import projectOne from '../assets/birthday-plan-it-screenshot.jpg';
import projectTwo from '../assets/mood-flix.jpg';
import projectThree from '../assets/art-garage.jpg';
import projectFour from '../assets/weather-bee.jpg';
import projectFive from '../assets/mercedes-binge.jpg';

const ProjectCardData = [
  {
    imagesource: projectOne,
    title: 'Birthday Plan It',
    text: "Welcome to the Birthday Plan It app where we help you plan your birthday party by creating a cool invitation. Simply sign up to create an account then pick a theme from the thumbnails below!",
    website: 'https://birthdayplanit.herokuapp.com/',
    git: 'https://github.com/violanerd/birthday-plan-it',
    enternal: false 
  },
  {
    imagesource: projectTwo,
    title: 'Mood Flix',
    text: "Ever wonder what it would be like to choose a movie depending on what type of mood you're in? Well, MoodFlix can help! Simply select a MoodMoji from the dropdown menu to search movies that fit your mood.",
    website: 'https://dronetdevdesign.github.io/Mood-Flix/',
    git: 'https://github.com/DronetDevDesign/Mood-Flix',
    enternal: false
  },
  {
    imagesource: projectThree,
    title: 'Art Garage',
    text: "Here at Art Garage we want to connect artists with potential buyers who are passionate about art. Artists are able to introduce themselves by creating a profile using information about themselves and their personal website link.",
    website: 'https://art-garage-app.herokuapp.com/',
    git: 'https://github.com/BigEVK/ArtGarage',
    enternal: false
  },
  {
    imagesource: projectFour,
    title: 'Weather Bee',
    text: "The weather has been quite the buzz lately! Find out why on WeatherBee. Fun and easy way to check out the weather if you're going to travel or have outdoor activities planned. This app is perfect in case you're taking a trip!",
    website: 'https://dronetdevdesign.github.io/weather-bee/',
    git: 'https://github.com/DronetDevDesign/weather-bee',
    enternal: false
  },
  {
    imagesource: projectFive,
    title: 'Mercedes Binge',
    text: "The perfect app for Mecedes lovers! This app taps into an API that fetches the most beautiful photos that Mercedes Benz has to offer. Kick back and dream as if you owned one of these beauties or make your wish list to buy one.",
    website: '/',
    git: '/',
    enternal: true
  }
];

export default ProjectCardData;

