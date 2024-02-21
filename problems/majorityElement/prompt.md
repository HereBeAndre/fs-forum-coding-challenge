# Majority Element

Write a function that takes in a non-empty, unordered `array` of positive integers and returns
the array's majority element without sorting the array and without using more than constant space.

An array's majority element is an element of the array that appears in over half of its indices.
Note that the most common element of an array (the element that appears the most times in the array)
isn't necessarily the array's majority element;
for example, the arrays `[3, 2, 2, 1]` and `[3, 4, 2, 2, 1]` both have 2 as their most common element,
yet neither of these arrays have a majority element, because neither `2` nor any other element
appears in over half od the respective array's indices.

You can assume that the input array will always have a majority element.

Sample inputs

```
array = [5]
array = [1, 2, 1]
array = [1, 2, 3, 2, 2, 1, 2]
```

Sample outputs

```
5 // Only element in the array
1 // Occurs in 2/3 array indices
2 // Occurs in 4/7 array indices
```
