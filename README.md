```
███████╗ ██████╗ ██████╗ ██████╗ ███████╗████████╗██╗    ██╗██╗ ██████╗███████╗
██╔════╝██╔════╝██╔═══██╗██╔══██╗██╔════╝╚══██╔══╝██║    ██║██║██╔════╝██╔════╝
███████╗██║     ██║   ██║██████╔╝█████╗     ██║   ██║ █╗ ██║██║██║     █████╗  
╚════██║██║     ██║   ██║██╔══██╗██╔══╝     ██║   ██║███╗██║██║██║     ██╔══╝  
███████║╚██████╗╚██████╔╝██║  ██║███████╗   ██║   ╚███╔███╔╝██║╚██████╗███████╗
╚══════╝ ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝   ╚═╝    ╚══╝╚══╝ ╚═╝ ╚═════╝╚══════╝
                                                                               
███████╗███████╗██████╗ ██╗   ██╗███████╗██████╗                               
██╔════╝██╔════╝██╔══██╗██║   ██║██╔════╝██╔══██╗                              
███████╗█████╗  ██████╔╝██║   ██║█████╗  ██████╔╝                              
╚════██║██╔══╝  ██╔══██╗╚██╗ ██╔╝██╔══╝  ██╔══██╗                              
███████║███████╗██║  ██║ ╚████╔╝ ███████╗██║  ██║                              
╚══════╝╚══════╝╚═╝  ╚═╝  ╚═══╝  ╚══════╝╚═╝  ╚═╝                                                                                    
```
                                                                               


Scoretwice is a modern banking app that revolutionizes financial management and credit insight. Effortlessly track expenses, transfer balances, and access real-time credit scores securely on one platform.
<!-- TABLE OF CONTENT -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#installation">Installation</a>
    </li>
    <li>
      <a href="#usage">Usage</a>
    </li>
    <li><a href="#api-endpoints">API Endpoints</a>
      <ul>
        <li>POST-Signup New User</li>
        <li>GET-All Users</li>
        <li>POST-Login User</li>
        <li>GET-Userinfos by ID and Display</li>
        <li>POST-Increasing Account Balance</li>
        <li>POST-Transactions Sending Balance between Users</li>
        <li>GET-All Transactions</li>
        <li>POST-Create Credit Score Inputs</li>
        <li>GET-Credit Score</li>
      </ul>
    </li>
    <li><a href="#database">Database</a>
      <ul>
        <li>users</li>
        <li>accounts</li>
        <li>transactions</li>
        <li>credit_scores</li>
      </ul>
    </li>
    <li><a href="#dechnologies-used">Technologies Used</a>
    <ul>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>Node Package Manager (Development Tools)</li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#special-thanks">Special Thanks</a></li>
  </ol>
</details>


<!-- INSTALLATION -->
## [Installation](#installation)

1. Clone the repository: git clone https://github.com/FlorianParzivalLuther/scoretwice-server.git
2. Change directory: cd scoretwice-client
3. Install dependencies: npm install
<p align="right">(<a href="#installation">back to top</a>)</p>


<!-- USAGE -->
## [Usage](#usage)

To run the Scoretwice frontend application, use the following command:
npm run dev
The backend API will be accessible at ### http://localhost:5005 .
<p align="right">(<a href="#usage">back to top</a>)</p>


<!-- TECHNOLOGIES USED -->
## [API Endpoints](#api-endpoints)

## API Endpoints
```
### POST Signup New User
- Description: This endpoint is used to sign up a new user.
- Endpoint: POST /auth/signup
- URL: http://localhost:5005/auth/signup
- Visibility: Public
- Request Body:
{
  "email": "tryout@email.de",
  "password": "123ABCdef",
  "firstName": "tryoutName",
  "lastName": "tryoutLastName",
  "gender": true,
  "birthday": "1990.01.01"
}
- Copy the authToken from the response and use it with the Bearer prefix for authorized requests.

### GET All Users
- Description: This endpoint is used to get information about all users.
- Endpoint: GET /api/users
- URL: http://localhost:5005/api/users
- Visibility: Public
- Request Body: Empty

### POST Login User
- Description: This endpoint is used to log in a user.
- Endpoint: POST /auth/login
- URL: http://localhost:5005/auth/login
- Visibility: Public
- Request Body:
{
  "email": "tryout@email.de",
  "password": "123ABCdef"
}

### GET Userinfos by ID and Display
- Description: This endpoint is used to get information about a specific user by their ID.
- Endpoint: GET /api/users/:id
- URL: http://localhost:5005/api/users/64beb00492fd576bfc5014ec
- Visibility: Private
- Request Body: Empty

### POST Increasing Account Balance
- Description: This endpoint is used to increase the account balance of a user.
- Endpoint: POST /api/users/:id/account
- URL: http://localhost:5005/api/users/64beb00492fd576bfc5014ec/account
- Visibility: Private
- Request Body:
{
  "amount": 2500
}

### POST Transactions Sending Amount X from User1 to User2
- Description: This endpoint is used to perform a transaction from one user to another.
- Endpoint: POST /api/users/:idSender/transactions/:idReceiver
- URL: http://localhost:5005/api/users/64beb00492fd576bfc5014ec/transactions/64be9c7a243cee23465e6e6f
- Visibility: Private
- Request Body:
{
  "amount": 500,
  "transferMessage": "heres the money"
}

### GET All Transactions
- Description: This endpoint is used to get all transactions for a specific user.
- Endpoint: GET /api/users/:idSender/transactions
- URL: http://localhost:5005/api/users/64beb00492fd576bfc5014ec/transactions
- Visibility: Private
- Request Body: Empty

### POST Create Credit Score Inputs
- Description: This endpoint is used to create credit score inputs for a user.
- Endpoint: `POST /credit-score`
- URL: `http://localhost:5005/credit-score`
- Visibility: Private (Requires user authentication)
- Request Body:
{
  "carOwned": "Car ownership status",
  "propertyOwned": "Property ownership status",
  "childrenCount": 2,
  "annualIncome": 50000,
  "educationLevel": "Bachelor's Degree",
  "maritalStatus": "Married",
  "daysFromEmployment": 365,
  "ownedEmail": "user@example.com",
  "ownedWorkphone": "123-456-7890",
  "creditStatus": "Good"
}

### GET Get Credit Score
-Description: This endpoint is used to get the credit score for a specific user.
-Endpoint: GET /credit-score/:userId
-URL: http://localhost:5005/credit-score/64beb00492fd576bfc5014ec
-Visibility: Public
-Request Body: Empty

```
<p align="right">(<a href="#api-endpoint">back to top</a>)</p>

<!-- DATABASE -->
## [Database](#database)

```
users
_id (ObjectId, Primary Key)
email (String, Required, Unique)
password (String, Required)
firstName (String, Required)
lastName (String, Required)
gender (Boolean)
birthday (Date)
account (ObjectId, Reference to Account collection, Optional)
createdAt (Date)
updatedAt (Date)

accounts
_id (ObjectId, Primary Key)
owner (ObjectId, Reference to User collection, Required)
balance (Number, Default: 0)
iban (String, Unique)
transactions (Array of ObjectIds, Reference to Transaction collection)
createdAt (Date)
updatedAt (Date)

transactions
_id (ObjectId, Primary Key)
sender (ObjectId, Reference to User collection, Required)
receiver (ObjectId, Reference to User collection, Required)
amount (Number, Required)
transferMessage (String)
date (Date, Default: Date.now)
createdAt (Date)
updatedAt (Date)

credit_scores
_id (ObjectId, Primary Key)
user (ObjectId, Reference to User collection, Required)
gender (Boolean, Required)
carOwned (Boolean, Required)
propertyOwned (Boolean, Required)
childrenCount (Number, Required)
annualIncome (Number, Required)
educationLevel (String, Required, Enum: ["lower secondary", "secondary", "incomplete higher", "higher education", "academic degree"])
maritalStatus (String, Required, Enum: ["Married", "Single/ not married", "Separated", "Widow", "Civil marriage"])
daysFromEmployment (Date, Required)
ownedWorkphone (Boolean, Required)
ownedEmail (Boolean, Required)
creditStatus (Boolean, Required)
creditScoreGrade (String, Optional, to be updated later)
createdAt (Date)
updatedAt (Date)
```

<!-- TECHNOLOGIES USED -->
## [Technologies Used](#technologies-used)

- [x] Node.js: A JavaScript runtime that allows executing JavaScript code on the server-side.
- [x] Express.js: A web application framework for Node.js used for building APIs and handling HTTP requests and responses.
- [x] MongoDB: A NoSQL database used for storing data in JSON-like format.
- [x] Mongoose: An Object Data Modeling (ODM) library for MongoDB and Node.js, providing a schema-based solution for data modeling and validation.
- [x] npm (Node Package Manager): Used for managing project dependencies and scripts.</br></br>

The backend code you provided demonstrates the use of Node.js and Express.js to create a RESTful API for handling transactions and user data. It also uses MongoDB as the database, and Mongoose is employed for defining data schemas and interacting with the database in a structured manner.
Overall, this backend technology stack is well-suited for building scalable and efficient web applications, especially those that require real-time data processing and handling complex APIs.

<!-- CONTRIBUTING -->
## [Contributing](#contributing)

A big thank you to the following contributors for their valuable contributions to this project:
</br></br>

AlexanderLey</br>
Filipa Baros</br>
Florian Luther</br>

<p align="right">(<a href="#contributing">back to top</a>)</p>


<!-- LICENSE -->
## [License](#license)

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

<p align="right">(<a href="#License">back to top</a>)</p>


<!-- SPECIAL THANKS -->
## [Special thanks,](#special-thanks)
goes to our wonderful Team and everyone who supported us in our journey.
<p align="right">(<a href="#special-thanks">back to top</a>)</p>

</br></br>
</br>
</br>

