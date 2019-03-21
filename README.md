# Pokedex (for a technical test)

## A React app built to apply for a front-end React developer position

I built this React App to apply for a front-end React developer position. Initially, I didn't think much of it because of the straightforward instructions: to build a visual component for the public Pokemon API. But, soon after, I was instructed that I would only be given two hours to complete the challenge and that's when I started to realize the task's difficulty.

Normally, I tend to code at a fair pace. This means that I allow myself ample time for research and for trial-and-error. As is the case for most React apps that I've built, something always breaks. Be it a small mistake in a `map` method or a the state not setting properly after a GET request, these things add up and take time to fix. So, when given a strict deadline for this project, I quickly realized that I couldn't waste any time. Every minute was precious.

Admittedly, I could not deliver the full product with all of the features requested. I could not fully implement Flow or Typescript annotations because of the sheer amount of extra code that I needed to write. I also obviously left this part for the last half an hour and didn't really accomplish much, because I was still polishing the normal code. Perhaps next time I'll consider writing annotations as I build new components. 

I also would have liked to improve the UX/UI. But given the time-constraint, I focused on delivering a core product that performed the main tasks needed. So, the current version renders a grid of all the Pokemon in existence and for each one, it renders a more detailed component. 

#### A side-note

As I was building this, I noticed how newer technolgies such as GraphQL and Apollo are much better for client-side API requests. The Pokemon API is so large that it has to be structured in a very specific way. So naturally, multiple GET requests have to be made to the API (based off of the associations within it). But I've been doing a little tutorial on GraphQL and Apollo and have noticed how efficient those queries are. For example, rather than going through layers upon layers of associations, an API built with GraphQL sets up a Root Query to deliver exactly what the client needs. Perhaps I'll implement what I've learned and try and re-factor this Pokedex app.

[Click here to view the site.](https://raglaks.github.io/pokechallenge/)

_If you want to run this locally, clone the repo,  run `npm i` and `npm start`._
