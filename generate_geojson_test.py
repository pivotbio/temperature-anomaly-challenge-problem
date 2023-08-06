import unittest
import shutil  
import os

from generate_geojson import convert_to_geojson, maybe_make_directory

class TestGeoJSONConversion(unittest.TestCase):

    @classmethod
    def setUpClass(cls):
        cls.output_directory = "geo/"
        if os.path.exists(cls.output_directory):
            shutil.rmtree(cls.output_directory)

        maybe_make_directory(cls.output_directory)

    def test_output_file_naming(self):
        """Test if the output files are named correctly."""
        test_file = "grid/2010.tmax"  
        convert_to_geojson([test_file], self.output_directory)

        self.assertTrue(os.path.exists(os.path.join(self.output_directory, "2010-01-01.geojson")))

    def test_day_specific_filtering(self):
        """Test if day_filter works correctly."""
        test_file = "grid/2010.tmax" 
        day_filter = (2010, 6, 30)
        convert_to_geojson([test_file], self.output_directory, day_filter)

        self.assertTrue(os.path.exists(os.path.join(self.output_directory, "2010-06-30.geojson")))
        self.assertEqual(len(os.listdir(self.output_directory)), 1)


if __name__ == "__main__":
    unittest.main()


