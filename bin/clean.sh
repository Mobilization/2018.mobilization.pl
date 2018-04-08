#!/bin/bash

# clean 2018.mobilization.pl-gh-pages directory
./node_modules/docpad/bin/docpad clean

# create folder for gh-pages branch
mkdir ../2018.mobilization.pl-gh-pages
cd ../2018.mobilization.pl-gh-pages
git clone https://github.com/mobilization/2018.mobilization.pl.git .
git checkout gh-pages
