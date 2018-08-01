# My Neighborhood react app

-This app corresponds to the last proposed project regarding the FEND nanodegree by Udacity : create a responsive, accessible and offline-first app using React and a map API such as Google Maps. The project should contain an other third-party API used to retrieve infos on several markers of choosen locations on the map.

## Project Specificities

### 'create-react-app'

-I've used the Facebook's 'create-react-app' library to scaffold the project. It gives a relevant point of departure to build apps with React.
See more at : https://www.npmjs.com/package/create-react-app.

### 'google-maps-react'

-To make the Google maps API work asynchronously with react, I've used the 'google-map-react' library. >The library includes a helper to wrap aroud the Google Maps API.The GoogleApiWrapper Higher-Order component accepts a configuration object which must include an apiKey. See lib/GoogleApi.js for all options it accepts.
See more at : https://www.npmjs.com/package/google-maps-react.

## Project objectives

### React
-The whole app is written using React, and files are structured this way. All the components to render are located in the `.src` folder. 
  - the main file : `App.js` contains three children components :
    - `<Header/>` for rendering the banner;
    - `<MapContainer/>` for rendering the map itself, the markers and the infowindows;
    - `<NavFilter/>` to display a button. When clicked, it shows an input field for searching and filter a certain location, followed by a list of locations. 
  *Nb: A little button(an eye) is located besides the list and allows to show specific Google streetviews above the list.*

-To display Google streetview with react, I've used the 'react-streetview' library. See more at : https://www.npmjs.com/package/react-streetview.

-I've added another react library : 'react-tooltip' (see more at : https://www.npmjs.com/package/react-tooltip) to display tooltips over elements on screen that required some more infos.

-Most of the content of the `render()` methods are written using the JSX syntax. (see more at : https://reactjs.org/docs/introducing-jsx.html)

  *Nb: React and ES6. This project tries to use as much as possible ES6 syntax*

### APIs
-As required by Udacity FEND program, I've used two APIs in this project :
 -The Google Maps API to display the map, and the markers of specific locations on the screen.
 -The Foursquare API (https://developer.foursquare.com/) to fetch asynchronous informations about the displayed places. These Infos are rendered in the infowindows provided by the Google Maps API.

### Responsive 
-This app can be used on most of standard devices : mobile, tablet and desktop. 
I've used media quieries to fullfill this requirement.

### Accessibility
-Making an app accessible for users is a really important part of a project. Therefore, I've used html's semantic first and add, when necessary the `role` attributes to the html tags. 
-I had to define focused elements based on how React components are displayed on the browser. I've used `tabIndex` in this purpose.
-Always on a concern of accesibility, I've had links to directly navigate throught the different main elements of the page.

-Concerning the navigation of the Google map itself, according to the Google support : > On your computer, you can explore the map with your keyboard by turning on accessibility features. Google Maps is compatible with the follwing screen readers: *ChromeVox(Chrome Browser)*, *VoicOver(Safari)* and *JAWS/NVDAA(Firefox)*. Be sure to read https://support.google.com/maps/answer/6396990?hl=en&co=GENIE.Platform%3DDesktop, for more informations on how too explore the map using keyboard.



### Offline-first
-This app uses a Service Worker to allow using all the ressources while offline. 
-The Service Worker though is only enabled in the production environment.
To test the offline-first Service Worker, you will need to build the application, using `npm run build` and run a simple http server from your build directory. See https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#offline-first-considerations for more informations.


## How to Get Started
-First *download* the `.zip` archive at Github : https://github.com/killykan/neighborhood-map-react or *clone* the project : on your shell `git clone https://github.com/killykan/neighborhood-map-react.git`

-Then make sure to install all needed dependencies using the command : `npm install` 

-When all dependencies are installed, the app can be run.Use, on your terminal, the command  `npm run start` to start the app in the browser. 




### Built With

* [React JS](https://reactjs.org/) - JSX
* HTML5, CSS3 and JS
* [Google Maps API](https://cloud.google.com/maps-platform/?hl=fr) - 
* [Foursquare API](https://developer.foursquare.com/) - 



## Authors

* **Arnaud Visier (Killyk4n)** https://github.com/killykan


## License

This project is licensed under the MIT License 


