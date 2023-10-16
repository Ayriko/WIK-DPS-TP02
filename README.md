# TP2 devops

A project realized in typescript.

## Installation

You need to clone this repository:

```ts
git clone https://github.com/Ayriko/WIK-DPS-TP02.git
```

## Launching

The project just needs you to use the following commands :

    - docker build -t simple .
        AND
    - docker build -f double_Dockerfile.Dockerfile -t double .
    - docker container run -it -p 3000:3000 simple
        OR
    - docker container run -it -p 3000:3000 double

Then it's available locally (127.0.0.1:3000) with your navigator or you can also test it using curl.


Plus : Trivy scan reports are available as results.json and results_double.json.