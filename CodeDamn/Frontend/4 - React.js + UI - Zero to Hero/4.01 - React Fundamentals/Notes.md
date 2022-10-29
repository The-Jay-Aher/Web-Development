# React JS + UI : Zero to Hero

## React Fundamentals

### Components

In react, what you do is split the whole UI in some components and then code them all individually and then use them together.

.jsx -> It stands for javascript extensible

With the help jsx we are able to write html like syntax in javascript, your browser does not understand this syntax.

Therefore, we babel and snowpack and others which convert this syntax compiles it down different syntax and that is understood by your browser.

In react, if you want to declare a `class` you don't use the class keyword, you use the `className` keyword. This is because `class` is a reserved keyword in javascript.

We can write actual javascript expressions in jsx. In order to write a javascript expression you need to write the expression in `{}` or curly braces. E.g - `{2+2}` will give output of 4.

You can write anything inside of the `{}` as long as you can write the same in a function.

The data inside the `{}` actually becomes the argument function

Null is a special jsx element,which just does not render anything

HTML constructs a tree like structure which is called as DOM, Similarlly, React also creates a tree like structure which is called as a Virtual DOM.,but react can also have custom components.

Props is a custom object, which is supplied by react to the function when it is renderiing 