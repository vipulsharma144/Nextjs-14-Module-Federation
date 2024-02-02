# AVID - Create Awesome Videos

## Coding Guidelines

[Click here for guidelines](CODE_GUIDELINES.md)

## Description

Avid is a web app that will create videos pdf and images from templates(Remotion)
the app will have the following functionality

- [x] Categorization of templates
- [x] Payment for each template
- [] Ability for some users having role 'artist' to be able to create template
- [] these artist users should be able to see their earning if someone uses their template
- [] email and text notifications
- [] backend pipelines for video processing jobs

Features

- [x] Authentication
- [x] Authorization
- [x] Ability to search vast list of templates
- [] Template Listing Page and Template details page - [WIP]
- [] video Composer - Well thought out Minimalistic forms for template [WIP]
- [] Template Creator - Ability to create templates by some users with role 'artist' [TODO]
- [] Payment Gateway - [WIP]
- [] Email and Text Notifications - [TODO]
- [] Dashboard for artists to see their earnings and analysis [TODO]

## Tech Stack

Nodejs 20 Based Web app . Following tech stack

- Nodejs
- Express (For rendering videos)
- Typesense (For searching videos via text search)
- Firebase
- Firestore
- GCP (For rendering videos)
- NextJS (For rendering web app)
- NextUI (For UI)
- TailwindCSS (For styling)
- pnpm
- nvm

## Installation

- Clone the repo
- Run `nvm use 20`
- Run `pnpm install`
- Run `pnpm run dev`

## Deployment

- Run `nvm use 20`
- Run `pnpm run build`
- Run `pnpm run start`

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Architecture

![Architecture](./docs/AVID.png)

## Project Status

In Progress

## Screenshots

## Rules

- API's should be in `api` folder
- The DB is Firestore so mobile can have client sdk and connect to it , Yes some rules need to be written for that since this is not that business logic heavy app only fetch the data and show it
- If some Admin related things that need APIs we always have the option to create a new API
