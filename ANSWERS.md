<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
  A: Middleware are functions that will take input and stop them from advancing forward, modify the input, or send the input back. They are functions for handling actions.

  Sessions (express) are middleware that hold data on the server to determine access to resources with cookies.

  bcrypt is a password hashing function that we use for obscuring passwords and resisting brute-force search attacks.

  JWT (JSON Web Tokens) are strings that consist of a header, a payload, and a signature. These parts are separated by a period, each (.) and they are used as another method for authentication.

2.  What does bcrypt do in order to prevent attacks?
  A: (1) It uses a salt to hash the input data in a one-way manner (one-way meaning that it will not be susceptible to being decoded).
    (2) The iteration count can be increased to make it slower (thus,slowing down the process of attempting to continuously retry attacks).

3.  What are the three parts of the JSON Web Token?
  A: The header, the payload, and the signature.
