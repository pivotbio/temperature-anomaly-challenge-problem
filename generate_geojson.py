import os
import geopandas as gpd
import pandas as pd
from shapely.geometry import Polygon

def build_dataframe_from_file(file_path):
    year = os.path.splitext(os.path.basename(file_path))[0].split(".")[0]  # Extracting year from filename like "2001.tmax"
    
    df = pd.read_csv(file_path, delim_whitespace=True, names=['Month', 'Day', 'GridBoxID', 'Longitude', 'Latitude', 'TempAnomaly'])
    
    df['Year'] = int(year)
    
    df['geometry'] = df.apply(lambda row: Polygon([(row['Longitude'], row['Latitude']),
                                                   (row['Longitude'] + 3.75, row['Latitude']),
                                                   (row['Longitude'] + 3.75, row['Latitude'] + 2.5),
                                                   (row['Longitude'], row['Latitude'] + 2.5),
                                                   (row['Longitude'], row['Latitude'])]), axis=1)
    
    return df

def maybe_filter_by_day(frames, filter=None):
    if filter is None:
        return frames

    year, month, day = filter
    return frames[(frames['Year'] == year) & (frames['Month'] == month) & (frames['Day'] == day)]

def maybe_make_directory(output_directory):
    if not os.path.exists(output_directory):
        os.makedirs(output_directory)

def make_per_day_geojson_files(filtered_df, output_directory):
    for (year, month, day), group in filtered_df.groupby(['Year', 'Month', 'Day']):
        output_file = os.path.join(output_directory, f"{year}-{month:02d}-{day:02d}.geojson")
        
        gdf = gpd.GeoDataFrame(group, geometry='geometry')
        
        gdf.to_file(output_file, driver="GeoJSON")

def convert_to_geojson(file_list, output_directory, day_filter=None):
    """
    day_filter: tuple (year, month, day) to filter by a specific day. If None, no day-specific filtering is done.
    """
    dfs = [build_dataframe_from_file(f) for f in file_list]
    combined_df = pd.concat(dfs, ignore_index=True)
    filtered_df = maybe_filter_by_day(combined_df, day_filter)

    make_per_day_geojson_files(filtered_df, output_directory)

if __name__ == "__main__":
    output_directory = "geo/"

    # only grab from 2010 and up. Otherwise we're dealing with far too much data for the purposes of this challenge.
    file_list = [os.path.join("grid", file) for file in os.listdir("grid") if file.endswith(".tmax") and int(file.split(".")[0]) >= 2010]
    maybe_make_directory(output_directory)
    

    convert_to_geojson(file_list, output_directory)

