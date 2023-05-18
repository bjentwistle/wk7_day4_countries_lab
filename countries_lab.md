# Countries Lab

- Use your end code from the lesson or [here](https://github.com/codeclan/e64_classnotes/tree/main/week_07/day_4/2_countries_api_lesson/)

## MVP

### Refactor the Country List to a Country Select

- The React docs could help you with this task - https://react.dev/

**TASK: Rather than rendering a list of Country names for the user to click we'd like to refactor the application to have a drop down (`<select>`) of Countries for the user to select from.**

* Create a new component called `CountrySelect` which takes in the Countries and a `onCountrySelected` function that will set the `selectedCountry` as props.

* Render this component from CountryContainer replacing the CountryList component.

* in `CountrySelect` create a drop down (`<select>`) and use the countries list passed in to create an `<option>` for each country. The `value` for each country will be the `index` of the country in the array, **not** the full object. 
  - (You could also find another unique identifier in the countries data. The `index` is probably ok in this situation - counties don't often get added / removed!)

* In `CountrySelect` create an onChange function that takes in the `index` number, finds the country from the array and calls the `onCountrySelected` prop.

### Add more features

- Displays the countries flag (from the flags property, not the icon) next to its name
- Display the total population of all the countries the API provides.

## Extension

- Allow users to add their favourite countries to a list that is also displayed in your app.

## More Extensions!

- Show a list of the selected country's neighbouring countries.
- Prevent the same country being added to the user's favourite countries list twice.
- Anything else you think would be cool!
