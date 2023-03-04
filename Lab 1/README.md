# Lab 1

## Topic 
Git Basics

## The purpose
Demonstrate basic Git version control skills

## Description
This is a console application for solving quadratic equations. The application must support 2 modes of operation:

- Interactive
- Non-interactive (file) mode

In interactive mode, the application starts when no arguments have been passed to it. In this mode, the application asks to enter 3 coefficients in turn: a, b and c, displays the resulting equation on the screen and the found roots

In non-interactive mode, the program accepts one argument — the path to the file with the coefficients of the equation. The file contains 3 numbers: a b c separated by one space. A dot is expected as a decimal character. The last coefficient (c) is followed by a newline character (\n) and the file ends there.

## Application use
### Interactive mod

> To start interactive mod run:
```
node mainFile.js
```

> As a result you'll see something like that:

```
a=
b=
c=
```
> If you tap wrong number:
```
a=0
Error. Cannot be 0
a= error
Error. Expected a valid real number, got error instead
a=1
b= omg
Error. Expected a valid real number, got omg instead
```
> If you tap right number you'll have:
```
a=1
b=2
c=3
The equation is: (1)x^2 + (2)x + (4) = 0
There are 0 roots
```
> Or
```
a = 2
b = 4
c = 2
The equation is: (2)x^2 + (4)x + (2) = 0
Only one root: x = -1
```
> Or
```
a = 1
b = 2.34
c = -0.5
The equation is: (1)x^2 + (2.34)x + (-0.5) = 0
There are 2 roots: x1 = 0.19707717412002745, x2 = -2.5370771741200273
```
### Non - interactive mod
In my case I'll use file.txt  

> To start non - interactive mod run:
```
node mainFile.js /file/path/
```
> If your file has right number you'll get:
```
The equation is: (1)x^2 + (-2.4)x + (0.5) = 0
There are 2 roots: x1 = 2.1695359714832656, x2 = 0.2304640285167342
```
> If not:
```
Error. a cannot be 0
```
> Or
```
invalid file format
```
> Also if you would like to run non-existent file, you'll get:
```
Error: file dkfd.txt does not exist
```
## Link on revert commit

- [Revert commit #1](https://github.com/AlinaDubchak/Development-methodologies-Labs/commit/a5e2d679e38f142e46faf14fa2f7bd3bfe6dc9b0)
- [Revert commit #2](https://github.com/AlinaDubchak/Development-methodologies-Labs/commit/24982dad3c8c6ece450826cdfa6a3f75173cfe37)
