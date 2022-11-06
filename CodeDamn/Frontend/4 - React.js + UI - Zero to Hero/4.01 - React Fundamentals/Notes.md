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

HTML constructs a tree like structure which is called as DOM, Similarly, React also creates a tree like structure which is called as a Virtual DOM.,but react can also have custom components.

Props is a custom object, which is supplied by react to the function when it is rendering.

### Conditional Rendering

What `&&` tries to do in javascript is, it tries to keep on checking the argument as long as it does not find one `false` value.

E.g of `false` values ->

1. `false`
2. `undefined`
3. `0`

These values will keep on checking which one is a false value and they will keep on checking till a false value is encountered.

## Working with States

### Stateful React Components

Most of the useful applications, or application which require some sort of user interaction need to be stateful, that means it needs to remember what has happened in the past.

useState is function internally provided by react, it's a regular function.

But this function is called as a hook in react. React considers anything that starts with `use` as a `hook`.

There is no difference between a React hook and function, but if you are using a react linter will warn you if any hook present in the code is conditionally rendered.

That means **all of your hooks need to be at the top of the function.**

useState ->

1. Accepts a default value
2. For

    ```javascript
    const [counter, setCounter] = useState(0);
    ```

3. For the first time the function is ran then `counter == 0`
4. `useState(0)` returns you an array, so to use it's values you can also do ->

    ```javascript
    const counterState = useState(0);
    counterState[0]; // 1st value
    counterState[1]; // 2nd value
    ```

5. The reason we can have const with state variable is because, we have not changed the variable we ran a completely new instance of the function.
6. A state variable must always be updated by it's `setter`. E.g - `setCounter`. You cannot directly update the counter variable.
7. The `setter` function also accepts a function as the value.
8. The way `setCounter` works is ->

    ```javascript
        setCounter = function(value) {
            if(typeof value === 'function'){
                // I want to do something else 
                const updatedValue = valueof(oldValue)
                counter = updatedValue
                rerender()
            }
            else {
                counter = value
                rerender()
            }
        }
    ```
9. Whenever possible use the function uperational criteria as long as the new value depends on the older value.