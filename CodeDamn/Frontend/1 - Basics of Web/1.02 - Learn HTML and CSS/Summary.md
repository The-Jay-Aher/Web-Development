# HTML and CSS

There are mainly 2 different types of layout structures currently used the most in CSS
they are -

1. Flexbox
2. Grid

## FLEXBOX

The flex basis only works in the direction if the axis and it ignores the value of the element present in the axis.

The **flex-shrink** property is basically a proportion of compared to the other elements. How much a particular element should shrink to fit.
By setting it to 0 means that, hey, don't adjust at all. If it is given a value of 0.5, you are going to see that the first element just shrinks half as much as the second element

The **flex-grow** it is the exact opposite of **flex-shrink**. It controls the size of item when the container shrinks. The **flex-grow** controls the size of items when the parent container expands.

## GRID

You need CSS Grid when you need the customization on the 2-D front.
2-D -> You want to have precise control over the width and the height attribute of any element in the GRID itself.
Imagine a GRID and we can resize any element according to any height you want.

Flexbox is like a 1-D layout the only thing which we can specify is direction.

1. You can specify a flexbox of a row or a column.
2. Then you stack multiple flex boxes on top of each other to make it like a grid.
