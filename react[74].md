# Vinhood - React Technical Assignment

## Problem Statement +

The residents of the Rick and Morty multi-verse would like a web app to search and view a list of characters living in different dimensions. Use [this open API](https://rickandmortyapi.com/) to fetch the required data.

## Requirements +

Build a React web application that allows users to view and filter a list of characters and locations from the Rick and Morty universe. The application should consist of two pages, one for characters and one for locations, which can be accessed from a navigation menu.

### Menu +
- Create a `Menu` component that displays two options, one for `Characters` and one for `Locations`.
- The `Menu` can be positioned either at the top or on the left, as per your choice.
- Include an icon to close the menu.
- Implement a transition effect to toggle the menu.

### Characters +

- Create a `Characters` page that displays a list of [`characters`](https://rickandmortyapi.com/documentation/#character) cards in a responsive manner.
- Each `CharacterCard` should display the `image`, `name`, `status`, `species`, `gender`, and `origin.name` values.
- Implement filtering of the [catalog](https://rickandmortyapi.com/documentation/#filter-characters) by `status`, `species`, and `gender`. You may hardcode these values to apply as a filter.-
- Include a search field to return a list of characters by `name`.
- Implement lazy loading to update the list as the user scrolls through the list.


### Locations+

- Create a `Locations` page that displays a list of [`locations`](https://rickandmortyapi.com/documentation/#location). +
- Each `LocationCard` should display the `name`, `type`, and `dimension`, and `number_of_residents` values.+
- When a `LocationCard` is clicked, navigate to the `Characters` page with the `residents` of the `location` applied as a filter.
## Notes 

- The UI is completely up to you. Bonus points for a simple, practical user experience.

## Must-haves

- Use Redux for state management.
- Use React-Router for page navigation.+
- Cover your code with unit tests.-
- Follow best-practices for folder structure and file names.+

## Nice to Have

- Use TypeScript for type checks.-
- Use Vite for faster builds and hot reloading.-
- Use Babel for backward compatibility with older browsers.+
- Setup ESLint for code linting and formatting.-

## References

- https://rickandmortyapi.com/
