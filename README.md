# Temperature Anomaly Challenge Problem

## Dataset
The US National Oceanic and Atmospheric Administratio (NOAA) publishes a gridded dataset of daily maximum and minimum temperature anomaly files available at https://www.ncei.noaa.gov/pub/data/ghcn/daily/grid/ for each year since 1950. There are 7002 grids spanning the globe, each with a spacing of 3.75 deg x 2.5 deg. More information here: https://www.ncei.noaa.gov/pub/data/ghcn/daily/grid/Readme.txt. 

## Problem Statement

Using this data set, we would like to calculate a number of statistics. For a given year, find 
    * the 10 most abnormally hot (high above average high) grid cells
    * the 10 most abnormally cold (low below average low) grid cells
    * calculate the average abnormal high and low temperature for each grid over a 30 day sliding window. Report on the 10 most abnormally hot and cold grid cells
    * for each grid cell, for each day of the year, find the average tmax value of the grid cell and its 8 adjacent grid cells
    * which slice of latitude is most affected by abnormal temperatures
    * Using Simplemaps' Basic World Cities Database (https://simplemaps.com/data/world-cities) weight each cell's temperature aberations based on the number of people living within that cell and re-calculate the 10 most abnormally hot grid cells
    * What are the 10 most "livable" grid cells based on having the least temperature aberation and existing number of people living within that grid cell

### Visualization

Create a React app that displays a map (preferably using deck.gl) with the 10 hottest grid cells shaded red and the 10 coldest grid cells shaded blue from the calculations made above. 
    * When clicking a cell in the map, display a pop-up line graph that shows the temperature aberation of that cell year-over-year for a user-selectable date. (x-axis: Year, y-axis: Temperature aberation, Parameters: [Day of Year, cell id, high|low temperature aberation])

### Design

Create a workflow document that describes a process that would run the calculations above every day as new weather data comes in. Consider scheduling software, performance, and results storage.

### Questions

* If you were to store all years of the noaa data in a relational database, what would the fully normalized schema looks like?
* If you were to store all years of the noaa data in a data warehouse, what would the de-normalized scema look like?
* What trade-offs would be made between the schemas?
* What design considerations would you make in deciding which schema to use?
* What design considerations would you make if all calculations needed to be done at run-time while the user is interacting with the map?
* What other visualizations might be interesting to add to the map?
* What other calculations might be interesting to compute?
* Which AWS services might be used to implement the daily process you designed?
* What data structures might best suite the calculations made above?
* What data structures might be best suited for visualizing the calculation results?
* What additional information would you need in order to find which grid cells our research plots should be located in?
* What confounding variables make the calculations above suspect?