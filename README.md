
# create-dev-backend

CLI tool to create a backend project from a predefined template.


## Usage

### With Bun

```bash
bunx create-dev-expo
```

### With npm

```bash
npx create-dev-expo
```



## What this command does

1. Asks for a project name
2. Copies the backend template
3. Removes existing Git history
4. Initializes a new Git repository
5. Updates the project name in `package.json`
6. Installs dependencies

 

## After setup

```bash
cd <project-name>
bun dev
```

 

## Requirements

* Node.js 18+ or Bun
* Git


## Notes

* The generated project is ready for local development.
* No global installation required.


## Author

Suraj Vishwakarma
