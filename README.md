# Project - Twitter Search

The app gives you a basic search functionality to search for any text(alpha-numeric characters only) using React for the frontend and Rails Api as backend.

Time spent: 40 hours spent in total

## Project Structure

Deployed links
* Heroku for backend: https://twitter-search-server.herokuapp.com/application?q=<querystring>
* Github Pages for frontend: https://aditilonhari.github.io/twitterSearch/

Links to code on Github
* Backend: https://github.com/aditilonhari/twitterSearch-api
* Frontend: https://github.com/aditilonhari/twitterSearch

## User Stories

The following **required** functionality is completed:

* Implemented Rails Api for searching tweets using Twitter Api
* Used React for creating and displaying UI components
* Added loading indicators when the tweets are being fetched
* Clears previously searched tweets, before loading the next search results

The following **bonus** features are implemented:
* App deployed on Heroku and Github pages
* App has a commit history to follow through the progress 

The following **to-do/in-progress** features to be implemented:
* Better User experience from a real-world app perspective
* Add pagination for the results
* Adding caching capability
* Add test cases to make sure app doesnt break with future changes

## Open-source libraries used

1. For Ruby on rails
    - [Twitter](https://github.com/sferik/twitter) - A Ruby interface to the Twitter API. 
    - [Rack-cors](https://github.com/cyu/rack-cors) - Rack Middleware for handling Cross-Origin Resource Sharing (CORS), which makes cross-origin AJAX possible.
    - [Dotenv](https://github.com/bkeepers/dotenv) -  A Ruby gem to load environment variables from `.env`.

2. For React
    - [Axios](https://www.npmjs.com/package/axios) - Promise based HTTP client for the browser and node.js
    - [React-spinners](https://www.npmjs.com/package/react-spinners) - A collection of loading spinners with React.js based on [Halogen](https://github.com/yuanyan/halogen).

## Video WalkThrough

<img src='https://github.com/aditilonhari/twitterSearch/blob/master/TwitterSearch_react_app.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />


## Notes

Describe any challenges encountered while building the app.

- Just getting upto speed with React UI was a challenging phase, this being my first react app. 
- All the complexity involved around maintaining states for components and event handling was a overwhelming.
- Tried my luck with caching and pagination but failed to get it completely working in the given timeframe.
- Integration across react-rails was something I would have to look at further in details