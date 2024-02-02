# Module Federation

### Objective

#### Reference Links to get started

- https://github.com/remotion-dev/remotion/issues/1326
- https://github.com/musafiroon/remotion-remote-composition

The objective is to dynamically import multiple remote module(s) from remote application(s) based on the searchParam. and use it in the host application.

Example :

- navigating to `http://localhost:3001/?id=1` should import the remote module from `REMOTE_URL/remoteEntry.js` and use it in the host application.
- navigating to `http://localhost:3001/?id=2` should import the remote module from `REMOTE_URL_2/remoteEntry.js` of other project and use it in the host application.
- navigating to `http://localhost:3001/?id=3` should import the remote module from `REMOTE_URL_3/remoteEntry.js` of other project and use it in the host application.
- This is done on runtime

and so on.

note :

- The remote path and component name are dynamic and can be changed at runtime.(API)
- The remote application is a separate application and can be deployed separately.
- The remote application can be used by multiple host applications.
- Complete Component along with assets and styles can be imported from the remote application.
- Both the remote and host need to be configured for remote federation.

### Intro

This repo contains two folders app and video .
The app folder is the host application and the video folder is the remote application.
The video folder contains a simple remotion video composition that needs to be configured so that it can be imported and used in the host application.

### Steps to run the application

- Clone the repo
- Run `npm install` in both app and video folder
- Run `npm start` in video folder (node 18)
- Run `npm dev` in app folder (Node 20)

### Deliverables

A working example of the host application that can import the remote module from the remote application and use it in the host application.
