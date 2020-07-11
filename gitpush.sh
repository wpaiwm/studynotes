#!/bin/bash
var1=$[1 + 5]
echo $var1
var2=$[$var1*$[5 - 2]]
echo $var2
var3=$(expr 1 + 5)
echo $var3
var4=$(expr $var1 \* 2)
echo $var4
var5=$(echo "scale=4; 3.44 / 5" | bc)
echo The answer is $var5
