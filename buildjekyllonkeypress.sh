#!/bin/bash
cd $(dirname $0)
while :
do
	read -n1 -r -p $'\n\n Press any key to build... \n' key
	time jekyll build
	echo -en '\a' # beep for the lulz
done

