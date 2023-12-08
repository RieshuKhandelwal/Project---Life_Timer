# Life-timer

Life-timer is a simple web application that calculates and displays the time a person has lived on earth based on their date of birth. The time is displayed in years, months, days, hours, minutes, and seconds.

## Features

- Enter your date of birth to start the timer.
- The timer updates every second to display the exact time you've lived on earth.
- The timer persists across page reloads.
- You can clear the stored date of birth to enter a new one.

## Usage

1. Open the web page.
2. Enter your date of birth in the input field (format: yyyy-mm-dd).
3. Click the "ADD DOB" button to start the timer.
4. The timer will now display the time you've lived on earth in years, months, days, hours, minutes, and seconds.
5. If you want to enter a new date of birth, click the "Clear DOB" button and then enter the new date of birth.

## Code Overview

The main JavaScript code for the Life-timer is contained in a single script. It uses the `Date` object to calculate the difference between the current date and time and the entered date of birth. The difference is then converted to years, months, days, hours, minutes, and seconds. The `localStorage` object is used to persist the date of birth across page reloads.

## Contributing

Contributions are welcome! Please feel free to submit a pull request.

## License

This project is licensed under the MIT License.
