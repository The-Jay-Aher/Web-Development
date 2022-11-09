# Advanced JavaScript

## Promises

### .then

Promise is just like a promise, it will het the future value.

Javascript promises you that it will try to resolve the value. It say's that `i do not know the value right now but i will try to resolve this asap and once i do i am gonna get back to you`.

The way callback Func work is after a given process is complete, it will run the next action.

With Promises the syntax is different ->

```javascript
getMeAPromise().then();
```

**Fetch** is a browser based API which allows you to make network requests.

_Fetch always returns a promise_

A Promise can be in 3 states ->

1. Pending ->
   1. It means that it's still waiting for that resource to respond with that particular promise to evaluate.
   2. So it can be pending for an arbitrary amount of time depending on how much time it takes 
2. Resolved
   1. It means that you actually got the value which oyu were expecting, and that there was no error, there was nothing told at any point. 
3. Rejected
   1. Usually implies that something went wrong, something failed that's why we are just pointing this as rejected sp that you can maybe handle it as an error.

To get the result from the promise we need to to do a,
```javascript
   const promise = getMeAPromise()
   console.log(promise) // This is asynchronous call even if you place it below the promise.then it will run first because the .then function will only run if the status is resolved 
   promise.then((result) => {
      console.log(result)
   })
```
So the function inside `.then` is given to us which is gonna called whenever the promise has been resolved.
