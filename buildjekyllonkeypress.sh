#!/bin/bash
cd $(dirname $0)
while :
do
	read -n1 -r -p " Press any key to build... " key
	jekyll build --future false
done