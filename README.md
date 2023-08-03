# Temperature Anomaly Challenge Problem

## Dataset
The US National Oceanic and Atmospheric Administratio (NOAA) publishes a gridded dataset of daily maximum and minimum temperature anomaly files available at https://www.ncei.noaa.gov/pub/data/ghcn/daily/grid/ for each year since 1950. There are 7002 grids spanning the globe, each with a spacing of 3.75 deg x 2.5 deg. More information here: https://www.ncei.noaa.gov/pub/data/ghcn/daily/grid/Readme.txt. 

## Problem Statement

### Part 1: Visualization

We'd like you to build a web application that visualizes the NOAA data. We've broken down the project goals into stages. This activity is time boxed to 4 hours. Please work through these stages and deliver what you have at the 4 hour mark. We do not expect all stages will be completed perfectly in that amount of time. Please do the best you can and consider what you might change if you had more time.

**Stage 0**

Generate a GeoJSON file of the polygon grid cells of the NOAA data.

**Stage 1**

Create a React app that displays a map (we like [deck.gl](https://github.com/visgl/deck.gl/tree/master/examples/get-started/react/basic)) and the outline of the grid cells you generated.

**Stage 2**

Colorize the grid cells on the map based on their high temperature aberration on June 30, 2022. Abnormally hot cells shaded darker red, and abnormally cold cells shaded a darker blue, with transparent cells in the middle.

**Stage 3**

Add a date picker to the web page which allows the user to select an arbitrary date (not just June 30, 2022) where they can view the high temperature aberration as above.

**Stage 4**

When clicking a cell in the map, display a pop-up line graph that shows the temperature aberration of that cell year-over-year for the current date selected. (x-axis: Year, y-axis: Temperature aberration, Parameters: [Day of Year, cell id, high|low temperature aberration])

### Part 2: Design a Data Calculation Pipeline

Here are some calculations that we might be interested in calculating for this dataset: 

For a given year, find 
* the 10 most abnormally hot (high above average high) grid cells
* the 10 most abnormally cold (low below average low) grid cells
* which slice of latitude is most affected by abnormal temperatures
* Using Simplemaps' Basic World Cities Database (https://simplemaps.com/data/world-cities) weight each cell's temperature aberrations based on the number of people living within that cell and re-calculate the 10 most abnormally hot grid cells
* What are the 10 most "livable" grid cells based on having the least temperature aberration and existing number of people living within that grid cell

_Create a workflow document_ that describes a process that would run the calculations above (**don't actually write the code to do the calculations**) every day as new weather data comes in. Consider scheduling software, performance, and results storage.

### Part 3: Questions

At the interview, you will present your work. Consider these questions beforehand, and prepare to speak about them.

* What clarifying questions would you ask our Requirements Analyst if you were given this request?
* How would you store the NOAA data to optimize the queries and calculations being performed?
* Which AWS services might be used to implement the daily process you designed?
* If you had additional time, what would you change about your web app?
* What other visualizations might be interesting to add to the map?
* What other calculations might be interesting to compute?
* What confounding variables make the calculations above suspect?