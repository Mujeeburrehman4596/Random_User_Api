<h1>Random User API</h1>
Random User API is a simple and free API that generates random user data, including names, profile pictures, addresses, emails, and more. It’s perfect for developers who need realistic user data for testing, mockups, or building prototypes.

<h3>Features</h3>
Random User Data: Get a wide range of user details like names, locations, pictures, etc.
Customizable Results: Specify the number of users, gender, nationality, and more.
Free & Easy to Use: Simple integration and usage for any project.
JSON Response: Receive data in a clean, easy-to-parse JSON format.


<h2>Parameters</h2>
You can customize your request using the following parameters:
results: Number of users to generate (e.g., ?results=5)
gender: Filter by gender (male, female)
nat: Specify nationality (e.g., us, gb, fr)
inc: Include specific fields (e.g., ?inc=name,email,picture)
<br>
<h2>Example Response</h2>
Here’s an example of the JSON response from the API:
{
  "results": [
    {
      "gender": "female",
      "name": { "title": "Ms", "first": "Anna", "last": "Smith" },
      "location": { "street": { "number": 123, "name": "Main St" }, "city": "Springfield", "state": "Illinois", "country": "USA" },
      "email": "anna.smith@example.com",
      "picture": { "large": "https://randomuser.me/api/portraits/women/1.jpg" }
    }
  ]
}
<h3>Git clone https://github.com/Mujeeburrehman4596/Random_User_Api</h3>