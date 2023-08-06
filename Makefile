
grid: ghcnd.grid.tar.gz
	tar -zxf ghcnd.grid.tar.gz

ghcnd.grid.tar.gz:
	curl -L --output ghcnd.grid.tar.gz https://www.ncei.noaa.gov/pub/data/ghcn/daily/grid/ghcnd.grid.tar.gz


# Don't remove the ghcnd.grid.tar.gz file as it takes awhile to download
.PHONY: clean
clean: 
	rm -rf grid



