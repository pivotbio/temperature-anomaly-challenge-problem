# Temperature Anomaly Challenge Problem

## Dataset
The US National Oceanic and Atmospheric Administratio (NOAA) publishes a gridded dataset of daily maximum and minimum temperature anomaly files available at https://www.ncei.noaa.gov/pub/data/ghcn/daily/grid/ for each year since 1950. There are 7002 grids spanning the globe, each with a spacing of 3.75 deg x 2.5 deg. More information here: https://www.ncei.noaa.gov/pub/data/ghcn/daily/grid/Readme.txt. 

## Problem Statement

### Visualization

Create a React app that displays a map (we like [deck.gl](https://github.com/visgl/deck.gl/tree/master/examples/get-started/react/basic)) and a date picker. 
* For the date selected, display all grid cells on the map with the tmax temperature aberation shaded from blue to red. Abnormally hot cells shaded darker red, and abnormally cold cells shaded a darker blue, with transparent cells in the middle.
* When clicking a cell in the map, display a pop-up line graph that shows the temperature aberration of that cell year-over-year for the current date selected. (x-axis: Year, y-axis: Temperature aberration, Parameters: [Day of Year, cell id, high|low temperature aberration])

### Design a Data Calculation Pipeline

Here are some calculations that we might be interested in calculating for this dataset: 

For a given year, find 
* the 10 most abnormally hot (high above average high) grid cells
* the 10 most abnormally cold (low below average low) grid cells
* calculate the average abnormal high and low temperature for each grid over a 30 day sliding window. Report on the 10 most abnormally hot and cold grid cells
* for each grid cell, for each day of the year, find the average tmax value of the grid cell and its 8 adjacent grid cells
* which slice of latitude is most affected by abnormal temperatures
* Using Simplemaps' Basic World Cities Database (https://simplemaps.com/data/world-cities) weight each cell's temperature aberrations based on the number of people living within that cell and re-calculate the 10 most abnormally hot grid cells
* What are the 10 most "livable" grid cells based on having the least temperature aberration and existing number of people living within that grid cell

Create a workflow document that describes a process that would run the calculations above (don't actually write the code to do the calculations) every day as new weather data comes in. Consider scheduling software, performance, and results storage.

### Questions

* What clarifying questions would you ask our Requirements Analyst if you were given this request?
* How would you store the noaa data to optimize the queries and calculations being performed?
* What other visualizations might be interesting to add to the map?
* What other calculations might be interesting to compute?
* Which AWS services might be used to implement the daily process you designed?
* What additional information would you need in order to find which grid cells our research plots should be located in?
* What confounding variables make the calculations above suspect?