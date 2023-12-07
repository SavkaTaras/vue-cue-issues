# vue 3 custom elements issues


## Steps to reproduce:

```bash
npm install
npm run build
npm run dev
```

--- 

#### What is expected?
We import vue component and the same custom element below.

The custom element typeof should be number. The sum of 5.5 + 0.5 should be 6.

--- 

#### What is actually happening?
Custom element typeof returns a string.
Sum is 5.50.5.
