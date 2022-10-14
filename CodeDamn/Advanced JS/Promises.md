# Promises

In javascript or any programing realize that there are some actions which are not instantaneous, right ?

E.g - If you have created a variable `const a = 1 + 1`, we absolutely know that javascript when it comes on this line, it will evaluate it as soon as it can write and store the result back and you'll get to inside `a`.

There are two more types of actions -

1. Deliberate Delay -
   1. The first one is something which you want to deliberately delay, and you might also call them as functions. So you might see something like B is a function which returns one plus one.
   2. E.g - `const b = 1 + 1`.
   3. So this expression is technically not evaluated until this function gets called.
2. Needed Delay -
   1. You may have sometimes that you need to wait for stuff. The best example for this is network calls.
   2. E.g - If you are waiting for any other remote server to respond you with you to something, and you can't really do anything.

Promise - It will try to get the future value.

This means sometimes down the line javascript promise you that it will try to that it will try to resolve this value.

Promise can be in 3 states -

1. Pending - Waiting for the resource to respond to that particular promise to evaluate.
2. Resolved - YOu got the value which you were expecting, that there was no error, there was nothing thrown at any point.
3. Rejected - Implies that something went wrong, something failed. So we are throwing it as an error maybe you can handle it as an error in your application.
