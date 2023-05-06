# Hi EveryOne  This  is the Backend Server of application orderBook/BookOrder

## The Routes which are present in this application are :-
> ### For Authentication
> ** /auth
> ### For Books
> ** /books
>### For Ordering Things
> **/order and /orders

## These Three are the main Routes of this Application 

# To Understand the Mechanism of All the Routes you need to go through the below text in different sections

## 1.**Authentication**
> This Route Provides two sub-routes 
> a. /register
> b. /login

### a. Register
> Here you will need to register youselves with following details
> 1.name
> 2.email
> 3.password
> 4.isAdmin
>EveryDetail is optional

After successful submission a message will be shown as **Registered Successfully**

### b. Login
> This route only need two information 
> 1.email
> 2.password

This route checks whether this user is present in the database or not and the information given is correct or not based on that it reflects message as **Wrong Credentials** and **User not Registered**

## 2. **Books**
> This Route will contains all the four **CRUD** Operations 
> 1. get-> /books 
> this itself includes many sub-routes which will include query and params

>2.post-> /books
> this adds a new book in the database.

>3.put-> /books/:id
> this replaces the books with the given id by the given body;

>4.delete--> /books/:id
> this deletes the books with the given id in the params;


## 3. **order** 
