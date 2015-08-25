#!/bin/bash
while :
do
	cd $(dirname $0)
	read -n1 -r -p "Press any key to build... " key
	jekyll build --future false
done