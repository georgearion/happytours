# **HappyTours** - RESTful API

**v1**

The HappyTours API is organized around REST. This API contains endpoints for **Tours**, **Reviews**, **Users**, **Bookings** and **Authentication** and has predictable resource-oriented URLs, returns JSON-encoded responses, and uses standard HTTP response code authentication, and verbs.

<br>
<br>

## **Table of Contents**

<hr>
<br>

<details>
<summary>
<b id="tours-head">TOURS</b> ENDPOINTS

</summary>

<br>

<hr>

<br>

- #### [**Get All Tours**](#tours-endpoints)

  - [Get Default Tours](#get-default-tours)

  - [Sorting Tours](#sorting-tours)
  - [Filtering Tours](#filtering-tours)
  - [Combination, Sorting and Filtering Tours](#combination-sorting-and-filtering-tours)

- [**Get Tour**](#get-tour)

- [**Create New Tour**](#create-new-tour)
- [**Update Tour**](#update-tour)
- [**Delete Tour**](#delete-tour)

<br>

- #### [**TOURS - SPECIAL ROUTES**](#tours---special-routes-endpoints)

  - [Get Monthly Plan](#get-monthly-plan)

  - [Get Tour Stats](#get-tour-stats)
  - [Get Tours Within Radius](#get-tours-within-radius)
  - [Get Distances To Tours From Location](#get-distances-to-tours-from-location)

<br>

- #### [**TOURS / REVIEWS**](#tours--reviews-endpoints)

  - [Get All Reviews on Tour](#get-all-reviews-on-tour)

  - [Create New Review on Tour](#create-new-review-on-tour)

<br>

- #### [**TOURS / BOOKINGS**](#tours--bookings-endpoints)

  - [Get All Bookings on Tour](#get-all-bookings-on-tour)

<br>
<br>
<br>

<br>

## **Tours** Endpoints

Get all Tours, create new ones, and edit and delete Tours. Also contains endpoints to special requirements

<br>

> ```javascript
>    GET /api/v1/tours
>    GET /api/v1/tours/:id
>   POST /api/v1/tours/
>  PATCH /api/v1/tours/:id
> DELETE /api/v1/tours/:id
> ```

<br>

### **Get All Tours** Endpoints

Accessing this endpoint retrieves a **List to All Tour Objects** in the database. This endpoint accepts params for further **Sorting** and **Filtering** and supports gte, lte, gt, lt operators. (also accepts combination of Sorting and
filtering parms)

<br>

#### **Get Default Tours**

retrieve all Tours in database

<br>

> **GET** `/api/v1/tours`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: '/api/v1/tours/',
  headers: {}
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 200 OK`

```javascript
{
  "status": "success",
  "results": 9,
  "data": {
    "data": [
      {
        "startLocation": {},
        "ratingsAverage": 4.8,
        "ratingsQuantity": 6,
        "images": [],
        "startDates": [],
        "guides": [],
        "name": "Grand Palace Tour",
        "duration": 1,
        "maxGroupSize": 15,
        "difficulty": "medium",
        "price": 497,
        "summary": "Exploring Bangkok's ...",
        "description": "Embark on a tour to  ...",
        "imageCover": "tour-2-cover.jpg",
        "locations": [],
        "slug": "grand-palace-tour",
        "durationWeeks": 0.14285714285714285
      }
      8 results hidded...
    ]
  }
}
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

#### **Sorting Tours**

Example, sorting tours by Duration (number of days in ascending order)

<br>

> **GET** `/api/v1/tours?sort=duration`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: '/api/v1/tours/?sort=duration',
  headers: {}
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 200 OK`

```javascript
{
  "status": "success",
  "results": 9,
  "data": {
    "data": [
      {
        "startLocation": {},
        "ratingsAverage": 4.8,
        "ratingsQuantity": 6,
        "images": [],
        "startDates": [],
        "secretTour": false,
        "guides": [],
        "name": "Grand Palace Tour",
        "duration": 1,
        "maxGroupSize": 15,
        "difficulty": "medium",
        "price": 497,
        "summary": "Exploring Bangkok's must-see ...",
        "description": "Embark on a tour to visit ...",
        "imageCover": "tour-2-cover.jpg",
        "locations": [],
        "slug": "grand-palace-tour",
        "durationWeeks": 0.14285714285714285
      },
      {
        "startLocation": {},
        "ratingsAverage": 4.7,
        "ratingsQuantity": 7,
        "images": [],
        "startDates": [],
        "secretTour": false,
        "guides": [],
        "name": "Scuba Dive Tour",
        "duration": 3,
        "maxGroupSize": 12,
        "difficulty": "easy",
        "price": 1497,
        "summary": "Thrilling scuba diving experience ...",
        "description": "Enjoy a full day speedboat ...",
        "imageCover": "tour-9-cover.jpg",
        "locations": [],
        "slug": "scuba-dive-tour",
        "durationWeeks": 0.42857142857142855
      }
      7 results hidded...
    ]
  }
}
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

#### **Filtering Tours**

Example, filtering tours by Rating (greater than 4.8)

<br>

> **GET** `/api/v1/tours?ratingsAverage[gt]=4.8`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: '/api/v1/tours/?ratingsAverage[gt]=4.8',
  headers: {}
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 200 OK`

```javascript
{
  "status": "success",
  "results": 1,
  "data": {
    "data": [
      {
        "startLocation": {},
        "ratingsAverage": 5,
        "ratingsQuantity": 9,
        "images": [],
        "startDates": [],
        "secretTour": false,
        "guides": [],
        "name": "Similan Islands Snorkeling",
        "duration": 4,
        "maxGroupSize": 25,
        "difficulty": "easy",
        "price": 397,
        "summary": "Snorkeling trip to ...",
        "description": "Discover breathtaking ...",
        "imageCover": "tour-1-cover.jpg",
        "locations": [],
        "slug": "similan-islands-snorkeling",
        "durationWeeks": 0.5714285714285714
      }
    ]
  }
}
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

#### **Combination, Sorting and Filtering Tours**

Example, **Filtering Tours** by Duration (less then /or equal 3 days) **and Sorting Tours** by Price (descending)

<br>

> **GET** `/api/v1/tours?duration[lte]=3&sort=-price`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: '/api/v1/tours/?duration[lte]=3&sort=-price',
  headers: {}
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 200 OK`

```javascript
{
  "status": "success",
  "results": 2,
  "data": {
    "data": [
      {
        "startLocation": {},
        "ratingsAverage": 4.7,
        "ratingsQuantity": 7,
        "images": [],
        "startDates": [],
        "secretTour": false,
        "guides": [],
        "name": "Scuba Dive Tour",
        "duration": 3,
        "maxGroupSize": 12,
        "difficulty": "easy",
        "price": 1497,
        "summary": "Thrilling scuba diving ...",
        "description": "Enjoy a full day speedboat ...",
        "imageCover": "tour-9-cover.jpg",
        "locations": [],
        "slug": "scuba-dive-tour",
        "durationWeeks": 0.42857142857142855
      },
      {
        "startLocation": {},
        "ratingsAverage": 4.8,
        "ratingsQuantity": 6,
        "images": [],
        "startDates": [],
        "secretTour": false,
        "guides": [],
        "name": "Grand Palace Tour",
        "duration": 1,
        "maxGroupSize": 15,
        "difficulty": "medium",
        "price": 497,
        "summary": "Exploring Bangkok's must ...",
        "description": "Embark on a tour ...",
        "imageCover": "tour-2-cover.jpg",
        "locations": [],
        "slug": "grand-palace-tour",
        "durationWeeks": 0.14285714285714285
      }
    ]
  }
}
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

### **Get Tour**

Accessing this endpoint retrieves a **Single Tour Object**.<br><br> \* Requires the Tour id.

<br>

> **GET** `/api/v1/tours/:id`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: '/api/v1/tours/:id',
  headers: {}
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 200 OK`

```javascript
{
  "status": "success",
  "data": {
    "data": {
      "startLocation": {},
      "ratingsAverage": 4.8,
      "ratingsQuantity": 6,
      "images": [],
      "startDates": [],
      "secretTour": false,
      "guides": [],
      "name": "Grand Palace Tour",
      "duration": 1,
      "maxGroupSize": 15,
      "difficulty": "medium",
      "price": 497,
      "summary": "Exploring Bangkok's must-see ...",
      "description": "Embark on a tour to visit ...",
      "imageCover": "tour-2-cover.jpg",
      "locations": [],
      "slug": "grand-palace-tour",
      "durationWeeks": 0.14285714285714285,
      "reviews": []
    }
  }
}
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

### **Create New Tour**

Accessing this endpoint will **Create a Single Tour Object**.<br>
Minimum required fields are name / duration / maxGrupSize / difficulty / price / summary, imageCover and startLocation.<br><br>\* Accessing this Endpoint requires Authentication (only Admin and Lead-Guide can create new Tour)

<br>

> **POST** `/api/v1/tours`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');
var data = JSON.stringify({
  name: 'New Amaxing Tour',
  duration: 1,
  maxGroupSize: 1,
  difficulty: 'easy',
  price: 200,
  summary: 'Lorem ipsum sit dolor ...',
  imageCover: 'new-tour-cover.jpg',
  startLocation: {
    type: 'Point',
    coordinates: [100.4891229, 13.7499481],
    description: 'New Tour Location',
    address: 'Tour Address'
  }
});

var config = {
  method: 'post',
  url: '/api/v1/tours',
  headers: {
    Authorization: 'Bearer {{token}}',
    'Content-Type': 'application/json'
  },
  data: data
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 201 Created`

```javascript
{
    "status": "success",
    "data": {
        "data": {
            "startLocation": {
                "type": "Point",
                "coordinates": [
                    100.4891229,
                    13.7499481
                ],
                "description": "New Tour Location",
                "address": "Tour Address"
            },
            "ratingsAverage": 4.5,
            "ratingsQuantity": 0,
            "images": [],
            "createdAt": "2020-09-23T14:34:12.739Z",
            "startDates": [],
            "secretTour": false,
            "guides": [],
            "name": "New Amaxing Tour",
            "duration": 1,
            "maxGroupSize": 1,
            "difficulty": "easy",
            "price": 200,
            "summary": "Lorem ipsum sit dolor ...",
            "imageCover": "new-tour-cover.jpg",
            "locations": [],
            "slug": "new-amaxing-tour",
            "durationWeeks": 0.14285714285714285
        }
    }
}
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

### **Update Tour**

Accessing this endpoint will **Update a Single Tour Object**.<br>Only the provided fields will be updated and will return the entire Updated Tour Object<br><br>\* Requires the Tour id.<br>\* Accessing this Endpoint requires Authentication (only Admin and Lead-Guide can create new Tour)

<br>

> **PATCH** `/api/v1/tours/:id`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');
var data = JSON.stringify({
  summary: 'Updated tour summary',
  description: 'Updated tour long description'
});

var config = {
  method: 'patch',
  url: '/api/v1/tours/:id',
  headers: {
    Authorization: 'Bearer {{token}}',
    'Content-Type': 'application/json'
  },
  data: data
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 200 OK`

```javascript
{
    "status": "success",
    "data": {
        "data": {
            "startLocation": {
                "type": "Point",
                "coordinates": [
                    100.4891229,
                    13.7499481
                ],
                "description": "New Tour Location",
                "address": "Tour Address"
            },
            "ratingsAverage": 4.5,
            "ratingsQuantity": 0,
            "images": [],
            "startDates": [],
            "secretTour": false,
            "guides": [],
            "name": "New Amaxing Tour",
            "duration": 1,
            "maxGroupSize": 1,
            "difficulty": "easy",
            "price": 200,
            "summary": "Updated tour summary",
            "imageCover": "new-tour-cover.jpg",
            "locations": [],
            "slug": "new-amaxing-tour",
            "description": "Updated tour long description",
            "durationWeeks": 0.14285714285714285
        }
    }
}
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

### **Delete Tour**

Accessing this endpoint will **Delete a Single Tour Object**.<br><br> \* Requires the Tour id.<br>\* Accessing this Endpoint requires Authentication (only Admin and Lead-Guide can delete Tour)

<br>

> **DELETE** `/api/v1/tours/:id`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');

var config = {
  method: 'delete',
  url: 'api/v1/tours/:id',
  headers: {
    Authorization: 'Bearer {{token}}'
  }
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 204 No Content`

```javascript
// empty - no content will be displayed
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

### **Tours - Special Routes** Endpoints

Contains endpoints to special requirements such as various statistics, distances from location to tours and more..

<br>
<br>

#### **Get Monthly Plan**

Accessing this endpoint will retrieve a **Year Plan** sorted with the busiest months at the top.<br><br> \* Requires the Year in "YYYY" format.<br>\* Accessing this Endpoint requires Authentication (restricted to Admin, Lead-Guide and Guide)

<br>

> **GET** `/api/v1/tours/:year`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: 'api/v1/tours/monthly-plan/2021',
  headers: {
    Authorization: 'Bearer {{token}}'
  }
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 200 OK`

```javascript
{
    "status": "success",
    "data": {
        "plan": [
            {
                "numTourStarts": 3,
                "tours": [
                    "Grand Palace Tour",
                    "Similan Islands Snorkeling",
                    "Local Cultural Tour"
                ],
                "month": 7
            },
            {
                "numTourStarts": 2,
                "tours": [
                    "Grand Palace Tour",
                    "Elephant Watching Tour"
                ],
                "month": 6
            },
            {
                "numTourStarts": 2,
                "tours": [
                    "Local Cultural Tour",
                    "White Water Rafting"
                ],
                "month": 9
            },
            {
                "numTourStarts": 2,
                "tours": [
                    "Elephant Watching Tour",
                    "Cave Canoeing Tour"
                ],
                "month": 3
            }
            8 results hidden ...
        ]
    }
}
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

#### **Get Tour Stats**

Accessing this endpoint will retrieve, in realtime, **Various Statistics** about all Tours such as Number of Ratings, Average Rating, Average Price etc.<br><br> \* Will return and Array sorted by 'difficulty'.

<br>

> **GET** `/api/v1/tours/get-monthly-tour`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var config = {
  method: 'get',
  url: '/api/v1/tours/tour-stats',
  headers: {}
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 201 Created`

```javascript
{
    "status": "success",
    "data": {
        "stats": [
            {
                "_id": "DIFFICULT",
                "numTours": 1,
                "numRatings": 6,
                "avgRating": 4.5,
                "avgPrice": 997,
                "minPrice": 997,
                "maxPrice": 997
            },
            {
                "_id": "EASY",
                "numTours": 3,
                "numRatings": 21,
                "avgRating": 4.766666666666667,
                "avgPrice": 1030.3333333333333,
                "minPrice": 397,
                "maxPrice": 1497
            },
            {
                "_id": "MEDIUM",
                "numTours": 3,
                "numRatings": 19,
                "avgRating": 4.766666666666667,
                "avgPrice": 1663.6666666666667,
                "minPrice": 497,
                "maxPrice": 2997
            }
        ]
    }
}
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

#### **Get Tours Within Radius**

Accessing this endpoint will retrieve all **Tours Within A Specified Radius**.<br><br> \* Requires the specified \*distance, \*coordinates (in the form of 'latitude,longitude') and \*unit (in 'mi'-miles or 'km'-kilometers).

<br>

> **GET** `/api/v1/tours/tours-within/:distance/center/:latlng/unit/:unit`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: '/api/v1/tours/tours-within/300/center/7.8831842,98.3736207/unit/km',
  headers: {}
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 200 OK`

```javascript
{
  "status": "success",
  "results": 6,
  "data": {
    "data": [
      {
        "startLocation": {},
        "ratingsAverage": 4.7,
        "ratingsQuantity": 7,
        "images": [],
        "startDates": [],
        "secretTour": false,
        "guides": [],
        "name": "Scuba Dive Tour",
        "duration": 3,
        "maxGroupSize": 12,
        "difficulty": "easy",
        "price": 1497,
        "summary": "Thrilling scuba diving ...",
        "description": "Enjoy a full day ...",
        "imageCover": "tour-9-cover.jpg",
        "locations": [],
        "slug": "scuba-dive-tour",
        "durationWeeks": 0.42857142857142855
      },
      {
        "startLocation": {},
        "ratingsAverage": 4.4,
        "ratingsQuantity": 7,
        "images": [],
        "startDates": [],
        "secretTour": false,
        "guides": [],
        "name": "White Water Rafting",
        "duration": 5,
        "maxGroupSize": 8,
        "difficulty": "easy",
        "price": 1997,
        "summary": "Drive through beautiful ...",
        "description": "Discover the Ton Pariwat ....",
        "imageCover": "tour-7-cover.jpg",
        "locations": [],
        "slug": "white-water-rafting",
        "durationWeeks": 0.7142857142857143
      }
      4 results hidden ...
    ]
  }
}
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

#### **Get Distances To Tours From Location**

Accessing this endpoint will retrieve the **Distances to Tours** from a specified location.<br><br> \* Requires the specified \*location, (in the form of 'latitude,longitude') and \*unit (in 'mi'-miles or 'km'-kilometers).

<br>

> **GET** `/api/v1/tours/distances/:location/unit/:unit`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: '/api/v1/tours/distances/7.8831842,98.3736207/unit/km',
  headers: {}
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 200 OK`

```javascript
{
    "status": "success",
    "results": 9,
    "data": {
        "data": [
            {
                "name": "White Water Rafting",
                "distance": 0.09421791327160058
            },
            {
                "name": "Phi Phi Islands",
                "distance": 9.45049216801932
            },
            {
                "name": "Cave Canoeing Tour",
                "distance": 9.45049216801932
            },
            {
                "name": "Similan Islands Snorkeling",
                "distance": 90.91015879310605
            }
            5 results hidden ...
        ]
    }
}
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

### **Tours / Reviews** Endpoints

Get all Reviews for a single Tour, create new review on a single Tour.

<br>

> ```javascript
>    GET /api/v1/tours/:id/reviews
>   POST /api/v1/tours/:id/reviews
> ```

<br>

#### **Get All Reviews on Tour**

Accessing this endpoint will retrieve **All Reviews Of A Single Tour**.<br><br> \* Requires the Tour id.<br>\* Accessing this Endpoint requires Authentication

<br>

> **GET** `/api/v1/tours/:id/reviews`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: '/api/v1/tours/:id/reviews',
  headers: {
    Authorization: 'Bearer {{token}}'
  }
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 200 OK`

```javascript
{
  "status": "success",
  "results": 9,
  "data": {
    "data": [
      {
        "rating": 5,
        "review": "Pretium vel inceptos fringilla ...",
        "user": {},
        "tour": "5c88fa8cf4afda39709c2951"
      },
      {
        "rating": 5,
        "review": "Porttitor ullamcorper rutrum ...",
        "user": {},
        "tour": "5c88fa8cf4afda39709c2951"
      }
      7 results hidden ...
    ]
  }
}
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

### **Create New Review On Tour**

Accessing this endpoint will **Create A New Review On Tour**.<br><br> \* Requires the Tour id.<br>\* Accessing this Endpoint requires Authentication (only User can create new Review on Tour)

<br>

> **POST** `/api/v1/tours/:id/reviews`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');
var data = JSON.stringify({
  rating: 5,
  review: 'Lorem taciti fringilla himenaeos'
});

var config = {
  method: 'post',
  url: '/api/v1/tours/:id/reviews',
  headers: {
    Authorization: 'Bearer {{token}}',
    'Content-Type': 'application/json'
  },
  data: data
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 201 Created`

```javascript
{
    "status": "success",
    "data": {
        "data": {
            "rating": 5,
            "createdAt": "2020-09-23T14:34:12.870Z",
            "review": "Lorem taciti fringilla himenaeos",
            "tour": "5c88fa8cf4afda39709c2951",
            "user": "5c8a1dfa2f8fb814b56fa181"
        }
    }
}
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

### **Tours / Bookings** Endpoints

Get all Bookings for a single Tour.

<br>

> **GET** `/api/v1/tours/:id/bookings`

<br>

#### **Get All Bookings on Tour**

Accessing this endpoint will retrieve **All Bookings Of A Single Tour**.<br><br> \* Requires the Tour id.<br>\* Accessing this Endpoint requires Authentication

<br>

> **GET** `/api/v1/tours/:id/bookings`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: '/api/v1/tours/:id/bookings',
  headers: {
    Authorization: 'Bearer {{token}}'
  }
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 200 OK`

```javascript
{
    "status": "success",
    "results": 1,
    "data": {
        "data": [
            {
                "createdAt": "2020-10-22T05:46:04.981Z",
                "price": 497,
                "paid": true,
                "user": {
                    "photo": "user-14.jpg",
                    "role": "user",
                    "name": "Laura Wilson",
                    "email": "laura@example.com",
                },
                "tour": {
                    "name": "Grand Palace",
                    "guides": [
                        {
                            "photo": "user-12.jpg",
                            "role": "lead-guide",
                            "name": "Miyah Myles",
                            "email": "miyah@example.com"
                        },
                        {
                            "photo": "user-6.jpg",
                            "role": "guide",
                            "name": "Jennifer Hardy",
                            "email": "jennifer@example.com"
                        }
                    ]
                }
            }
        ]
    }
}
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

<hr>

<br>

</details>

<br>

<details>
<summary>
<b>REVIEWS</b> ENDPOINTS

</summary>

<br>

<hr>

<br>

- #### [**Get All Reviews**](#reviews-endpoints)

  - [Get Default Reviews](#get-default-reviews)

  - [Sorting Reviews](#sorting-reviews)
  - [Filtering Reviews](#filtering-reviews)
  - [Combination, Sorting and Filtering Reviews](#combination-sorting-and-filtering-reviews)

- [**Get Review**](#get-review)

- [**Create New Review**](#create-new-review)
- [**Update Review**](#update-review)
- [**Delete Review**](#delete-review)

<br>
<br>

<br>

## **Reviews** Endpoints

Get all Reviews, create new ones, edit and delete Reviews.

<br>

> ```javascript
>    GET /api/v1/reviews
>    GET /api/v1/reviews/:id
>   POST /api/v1/reviews/
>  PATCH /api/v1/reviews/:id
> DELETE /api/v1/reviews/:id
> ```

<br>

### **Get All Reviews** Endpoints

Accessing this endpoint retrieves a **List to All Tour Objects** in the database.<br> This endpoint accepts params for further **Sorting** and **Filtering** and supports gte, lte, gt, lt operators. (also accepts combination of sorting and filtering parms)<br><br>\* Accessing this Endpoint requires Authentication (must be logged in to access)

<br>
<br>

#### **Get Default Reviews**

Accessing this Endpoint will retrieve all Review Objects in database.<br><br>\* Accessing this Endpoint requires Authentication (must be logged in to access)

<br>

> **GET** `/api/v1/reviews`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: '/api/v1/reviews',
  headers: {
    Authorization: 'Bearer {{token}}'
  }
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 200 OK`

```javascript
{
    "status": "success",
    "results": 64,
    "data": {
        "data": [
            {
                "rating": 5,
                "createdAt": "2020-09-23T14:34:12.870Z",
                "review": "Lorem taciti fringilla himenaeos ex aliquam litora nam ad maecenas",
                "tour": "5c88fa8cf4afda39709c2951",
                "user": {}
            },
            {
                "rating": 5,
                "createdAt": "2020-09-21T12:38:47.452Z",
                "review": "Cool",
                "tour": "5f68937725f7d345fc6d6f4e",
                "user": {}
            }
            62 results hidden ...
        ]
    }
}
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

#### **Sorting Reviews**

Example, sorting reviews by Rating (ascending)<br><br>\* Accessing this Endpoint requires Authentication (must be logged in to access)

<br>

> **GET** `/api/v1/reviews?sort=rating`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: '/api/v1/reviews?sort=rating',
  headers: {
    Authorization: 'Bearer {{token}}'
  }
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 200 OK`

```javascript
{
    "status": "success",
    "results": 64,
    "data": {
        "data": [
            {
                "rating": 1,
                "createdAt": "2020-09-19T00:53:56.848Z",
                "review": "Ridiculus facilisis sem id aenean amet penatibus gravida phasellus a mus dui lacinia accumsan!!",
                "user": {},
                "tour": "5c88fa8cf4afda39709c2966"
            },
            {
                "rating": 2,
                "createdAt": "2020-09-19T00:53:56.848Z"
                "review": "Vitae vulputate id quam metus orci cras mollis vivamus vehicula sapien et",
                "user": {},
                "tour": "5c88fa8cf4afda39709c296c"
            }
            62 results hidded...
        ]
    }
}
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

#### **Filtering Reviews**

Example, filtering reviews by Rating (greater than 4.5)<br><br>\* Accessing this Endpoint requires Authentication (must be logged in to access)

<br>

> **GET** `/api/v1/reviews?rating[gt]=4.5`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: '/api/v1/reviews?rating[gt]=4.5',
  headers: {
    Authorization: 'Bearer {{token}}'
  }
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 200 OK`

```javascript
{
    "status": "success",
    "results": 46,
    "data": {
        "data": [
            {
                "rating": 5,
                "createdAt": "2020-09-23T14:34:12.870Z"
                "review": "Lorem taciti fringilla himenaeos ex aliquam litora nam ad maecenas",
                "tour": "5c88fa8cf4afda39709c2951",
                "user": {}
            },
            {
                "rating": 5,
                "createdAt": "2020-09-21T12:38:47.452Z"
                "review": "Cool",
                "tour": "5f68937725f7d345fc6d6f4e",
                "user": {}
            },
            44 results hidded...
        ]
    }
}
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

#### **Combination, Sorting and Filtering Reviews**

Example, **Filtering Reviews** by Rating (less then /or equal 3) **and Sorting Reviews** by Rating (descending)<br><br>\* Accessing this Endpoint requires Authentication (must be logged in to access)

<br>

> **GET** `/api/v1/reviews?rating[lte]=3&sort=-rating`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: '/api/v1/reviews?rating[lte]=3&sort=-rating',
  headers: {
    Authorization: 'Bearer {{token}}'
  }
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 200 OK`

```javascript
{
    "status": "success",
    "results": 3,
    "data": {
        "data": [
            {
                "rating": 3,
                "createdAt": "2020-09-19T00:53:56.848Z",
                "review": "Blandit varius nascetur est felis praesent lorem himenaeos pretium dapibus tellus bibendum consequat ac duis",
                "user": {},
                "tour": "5c88fa8cf4afda39709c2974"
            },
            {
                "rating": 2,
                "createdAt": "2020-09-19T00:53:56.848Z"
                "review": "Vitae vulputate id quam metus orci cras mollis vivamus vehicula sapien et",
                "user": {},
                "tour": "5c88fa8cf4afda39709c296c"
            },
            {
                "rating": 1,
                "createdAt": "2020-09-19T00:53:56.848Z"
                "review": "Ridiculus facilisis sem id aenean amet penatibus gravida phasellus a mus dui lacinia accumsan!!",
                "user": {},
                "tour": "5c88fa8cf4afda39709c2966"
            }
        ]
    }
}
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

### **Get Review**

Accessing this endpoint retrieves a **Single Review Object**.<br><br> \* Requires the Review id.<br>\* Accessing this Endpoint requires Authentication (must be logged in to access)

<br>

> **GET** `/api/v1/reviews/:id`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: '/api/v1/reviews/:id',
  headers: {
    Authorization: 'Bearer {{token}}'
  }
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 200 OK`

```javascript
{
    "status": "success",
    "data": {
        "data": {
            "rating": 5,
            "createdAt": "2020-09-19T00:53:56.848Z",
            "review": "Blandit varius nascetur est felis praesent lorem himenaeos pretium dapibus tellus bibendum consequat ac duis",
            "user": {},
            "tour": "5c88fa8cf4afda39709c2955"
        }
    }
}
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

### **Create New Review**

Accessing this endpoint will **Create a Single Review Object**.<br>
Minimum required fields are review / rating / Tour id and User id .<br><br>\* Accessing this Endpoint requires Authentication (must be logged in to access, only User can create new review)

<br>

> **POST** `/api/v1/reviews`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');
var data = JSON.stringify({
  review: 'Great Tour Review',
  rating: '4',
  tour: '5c88fa8cf4afda39709c2955',
  user: '5f60ad886fcb613938b1c0b7'
});

var config = {
  method: 'post',
  url: '/api/v1/reviews',
  headers: {
    Authorization: 'Bearer {{token}}',
    'Content-Type': 'application/json'
  },
  data: data
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 201 Created`

```javascript
{
    "status": "success",
    "data": {
        "data": {
            "rating": 4,
            "createdAt": "2020-09-23T14:34:12.870Z"
            "review": "Great Tour Review",
            "tour": "5c88fa8cf4afda39709c2955",
            "user": "5f60ad886fcb613938b1c0b7"
        }
    }
}
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

### **Update Review**

Accessing this endpoint will **Update a Single Review Object**.<br>Only the provided fields will be updated and will return the entire Updated Review Object.<br><br>\* Requires the Review id.<br>\* Accessing this Endpoint requires Authentication (only User and Admin can update Review)

<br>

> **PATCH** `/api/v1/reviews/:id`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');
var data = JSON.stringify({
  rating: 4
});

var config = {
  method: 'patch',
  url: '/api/v1/reviews/:id',
  headers: {
    Authorization: 'Bearer {{token}}',
    'Content-Type': 'application/json'
  },
  data: data
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 200 OK`

```javascript
{
    "status": "success",
    "data": {
        "data": {
            "rating": 4,
            "createdAt": "2020-09-23T14:34:12.870Z",
            "review": "Lorem taciti fringilla himenaeos ex aliquam litora nam ad maecenas",
            "tour": "5c88fa8cf4afda39709c2951",
            "user": {}
        }
    }
}
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

### **Delete Review**

Accessing this endpoint will **Delete a Single Review Object**.<br><br> \* Requires the Review id.<br>\* Accessing this Endpoint requires Authentication (must be logged in to access, only User and Admin can delete review)

<br>

> **DELETE** `/api/v1/reviews/:id`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');

var config = {
  method: 'delete',
  url: '/api/v1/reviews/:id',
  headers: {
    Authorization: 'Bearer {{token}}'
  }
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 204 No Content`

```javascript
// empty - no content will be displayed
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

<hr>

<br>

</details>

<br>

<details>
<summary>
<b>USERS</b> ENDPOINTS

</summary>

<br>

<hr>

<br>

- [**Get All Users**](#users-endpoints)

- [**Get User**](#get-user)
- [**Update User**](#update-user)
- [**Delete User**](#delete-user)

<br>

- #### [**USERS / BOOKINGS**](#users--bookings-endpoints)

  - [Get All Bookings on User](#get-all-bookings-on-user)

<br>
<br>

<br>

## **Users** Endpoints

Get all Users, edit and delete Users. <br><br>\* Accessing this Endpoint requires Authentication (must be logged in to access, only Admin can access)

<br>

> ```javascript
>    GET /api/v1/users
>    GET /api/v1/users/:id
>  PATCH /api/v1/users/:id
> DELETE /api/v1/users/:id
> ```

<br>
<br>

### **Get All Users**

Accessing this endpoint retrieves a **List to All User Objects** in the database.<br><br>\* Accessing this Endpoint requires Authentication (must be logged in to access, only Admin can access)

<br>

> **GET** `/api/v1/users`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: '/api/v1/users',
  headers: {
    Authorization: 'Bearer {{token}}'
  }
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 200 OK`

```javascript
{
    "status": "success",
    "results": 20,
    "data": {
        "data": [
            {
                "role": "user",
                "name": "Lourdes Browning",
                "email": "loulou@example.com",
                "photo": "user-2.jpg"
            },
            {
                "role": "user"
                "name": "Sophie Louise Hart",
                "email": "sophie@example.com",
                "photo": "user-3.jpg"
            }
            18 results hidden ...
        ]
    }
}
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

### **Get User**

Accessing this endpoint retrieves a **Single User Object**.<br><br>\* Requires the User id<br>\* Accessing this Endpoint requires Authentication (must be logged in to access, only Admin can access)

<br>

> **GET** `/api/v1/users/:id`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: '/api/v1/users/:id',
  headers: {
    Authorization: 'Bearer {{token}}'
  }
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 200 OK`

```javascript
{
    "status": "success",
    "data": {
        "data": {
            "role": "user",
            "name": "Lourdes Browning",
            "email": "loulou@example.com",
            "photo": "user-2.jpg"
        }
    }
}
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

### **Update User**

Accessing this endpoint will **Update a Single User Object**.<br>Only the provided fields will be updated and will return the entire Updated User Object<br><br>\* Requires the User id.<br>\* Accessing this Endpoint requires Authentication (must be logged in to access, only Admin can access)

<br>

> **PATCH** `/api/v1/users/:id`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');
var data = JSON.stringify({
  name: 'Lourdes Michelle Browning'
});

var config = {
  method: 'patch',
  url: '/api/v1/users/:id',
  headers: {
    Authorization: 'Bearer {{token}}',
    'Content-Type': 'application/json'
  },
  data: data
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 200 OK`

```javascript
{
    "status": "success",
    "data": {
        "data": {
            "role": "user",
            "name": "Lourdes Michelle Browning",
            "email": "loulou@example.com",
            "photo": "user-2.jpg"
        }
    }
}
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

### **Delete User**

Accessing this endpoint will **Delete a Single User Object**.<br><br> \* Requires the User id.<br>\* Accessing this Endpoint requires Authentication (must be logged in to access, Admin can delete user)

<br>

> **DELETE** `/api/v1/users/:id`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');

var config = {
  method: 'delete',
  url: '/api/v1/users/:id',
  headers: {
    Authorization: 'Bearer {{token}}'
  }
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 204 No Content`

```javascript
// empty - no content will be displayed
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

### **Users / Bookings** Endpoints

Get all Bookings for a single User.

<br>

> ```javascript
>    GET /api/v1/users/:id/bookings
> ```

<br>

#### **Get All Bookings on User**

Accessing this endpoint will retrieve **All Bookings Of A Single User**.<br><br> \* Requires the User id.<br>\* Accessing this Endpoint requires Authentication

<br>

> **GET** `/api/v1/users/:id/bookings`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: '/api/v1/users/:id/bookings',
  headers: {
    Authorization: 'Bearer {{token}}'
  }
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 200 OK`

```javascript
{
    "status": "success",
    "results": 2,
    "data": {
        "data": [
            {
                "createdAt": "2020-10-22T08:27:53.952Z",
                "price": 397,
                "paid": true,
                "user": {
                    "photo": "user-14.jpg",
                    "role": "user",
                    "name": "Laura Wilson",
                    "email": "laura@example.com"
                },
                "tour": {
                    "name": "Similan Islands",
                    "guides": [
                        {
                            "photo": "user-10.jpg",
                            "role": "lead-guide",
                            "name": "Steve T. Scaife",
                            "email": "steve@example.com"
                        },
                        {
                            "photo": "user-7.jpg",
                            "role": "guide",
                            "name": "Kate Morrison",
                            "email": "kate@example.com"
                        },
                        {
                            "photo": "user-5.jpg",
                            "role": "guide",
                            "name": "Leo Gillespie",
                            "email": "leo@example.com"
                        }
                    ]
                }
            },
            {
                "createdAt": "2020-10-22T05:46:04.981Z",
                "price": 497,
                "paid": true,
                "user": {
                    "photo": "user-14.jpg",
                    "role": "user",
                    "name": "Laura Wilson",
                    "email": "laura@example.com"
                },
                "tour": {
                    "name": "Grand Palace",
                    "guides": [
                        {
                            "photo": "user-12.jpg",
                            "role": "lead-guide",
                            "name": "Miyah Myles",
                            "email": "miyah@example.com"
                        },
                        {
                            "photo": "user-6.jpg",
                            "role": "guide",
                            "name": "Jennifer Hardy",
                            "email": "jennifer@example.com"
                        }
                    ]
                }
            }
        ]
    }
}
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

<hr>

<br>
<br>

</details>

<br>

<details>
<summary>
<b>BOOKINGS</b> ENDPOINTS

</summary>

<br>

<hr>

<br>

- [**Get All Bookings**](#bookings-endpoints)

- [**Get Booking**](#get-booking)

<br>
<br>
<br>

## **Bookings** Endpoints

Get all Bookings. <br><br>\* Accessing this Endpoint requires Authentication (must be logged in to access, only Admin and Lead-Guide can access)

<br>

> ```javascript
>    GET /api/v1/bookings
>    GET /api/v1/bookings/:id
> ```

<br>
<br>

### **Get All Bookings**

Accessing this endpoint retrieves a **List to All Bookings Objects** in the database.<br><br>\* Accessing this Endpoint requires Authentication (must be logged in to access, only Admin and Lead Guide can access)

<br>

> **GET** `/api/v1/bookings`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: '/api/v1/bookings',
  headers: {
    Authorization: 'Bearer {{token}}'
  }
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 200 OK`

```javascript
{
    "status": "success",
    "results": 2,
    "data": {
        "data": [
            {
                "createdAt": "2020-10-22T08:27:53.952Z",
                "paid": true,
                "_id": "5f914a2865ecda1ae4868cec",
                "tour": {
                    "guides": [
                        {
                            "photo": "user-10.jpg",
                            "role": "lead-guide",
                            "_id": "5c8a21d02f8fb814b56fa189",
                            "name": "Steve T. Scaife",
                            "email": "steve@example.com"
                        },
                        {
                            "photo": "user-7.jpg",
                            "role": "guide",
                            "_id": "5c8a201e2f8fb814b56fa186",
                            "name": "Kate Morrison",
                            "email": "kate@example.com"
                        },
                        {
                            "photo": "user-5c8a1f292f8fb814b56fa184-1603171304236.jpeg",
                            "role": "guide",
                            "_id": "5c8a1f292f8fb814b56fa184",
                            "name": "Leo Gillespie",
                            "email": "leo@example.com"
                        }
                    ],
                    "_id": "5c88fa8cf4afda39709c2951",
                    "name": "Similan Islands",
                    "id": "5c88fa8cf4afda39709c2951"
                },
                "user": {
                    "photo": "user-14.jpg",
                    "role": "user",
                    "_id": "5c8a23c82f8fb814b56fa18d",
                    "name": "Laura Wilson",
                    "email": "laura@example.com",
                    "passwordChangedAt": "2020-10-15T10:06:02.014Z"
                },
                "price": 397
            },
            {
                "createdAt": "2020-10-22T05:46:04.981Z",
                "paid": true,
                "_id": "5f913b3ca633c81ed4eb39d8",
                "tour": {
                    "guides": [
                        {
                            "photo": "user-12.jpg",
                            "role": "lead-guide",
                            "_id": "5c8a22c62f8fb814b56fa18b",
                            "name": "Miyah Myles",
                            "email": "miyah@example.com"
                        },
                        {
                            "photo": "user-6.jpg",
                            "role": "guide",
                            "_id": "5c8a1f4e2f8fb814b56fa185",
                            "name": "Jennifer Hardy",
                            "email": "jennifer@example.com"
                        }
                    ],
                    "_id": "5c88fa8cf4afda39709c2955",
                    "name": "Grand Palace",
                    "id": "5c88fa8cf4afda39709c2955"
                },
                "user": {
                    "photo": "user-14.jpg",
                    "role": "user",
                    "_id": "5c8a23c82f8fb814b56fa18d",
                    "name": "Laura Wilson",
                    "email": "laura@example.com",
                    "passwordChangedAt": "2020-10-15T10:06:02.014Z"
                },
                "price": 497
            }
        ]
    }
}
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

### **Get Booking**

Accessing this endpoint retrieves a **Single Booking Object**.<br><br>\* Requires the Booking Id<br>\* Accessing this Endpoint requires Authentication (must be logged in to access, only Admin and Lead Guide can access)

<br>

> **GET** `/api/v1/bookings/:id`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: '/api/v1/bookings/:id',
  headers: {
    Authorization: 'Bearer {{token}}'
  }
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 200 OK`

```javascript
{
    "status": "success",
    "data": {
        "data": {
            "createdAt": "2020-10-22T05:46:04.981Z",
            "paid": true,
            "_id": "5f913b3ca633c81ed4eb39d8",
            "tour": {
                "guides": [
                    {
                        "photo": "user-12.jpg",
                        "role": "lead-guide",
                        "_id": "5c8a22c62f8fb814b56fa18b",
                        "name": "Miyah Myles",
                        "email": "miyah@example.com"
                    },
                    {
                        "photo": "user-6.jpg",
                        "role": "guide",
                        "_id": "5c8a1f4e2f8fb814b56fa185",
                        "name": "Jennifer Hardy",
                        "email": "jennifer@example.com"
                    }
                ],
                "_id": "5c88fa8cf4afda39709c2955",
                "name": "Grand Palace",
                "id": "5c88fa8cf4afda39709c2955"
            },
            "user": {
                "photo": "user-14.jpg",
                "role": "user",
                "_id": "5c8a23c82f8fb814b56fa18d",
                "name": "Laura Wilson",
                "email": "laura@example.com",
                "passwordChangedAt": "2020-10-15T10:06:02.014Z"
            },
            "price": 497
        }
    }
}
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

<hr>

<br>
<br>

</details>

<br>

<details>
<summary>
<b>AUTHENTICATION</b>

</summary>

<br>

<hr>

<br>

- [**Sign Up**](#authentication-endpoints)

- [**Login**](#login)
- [**Forgot Password**](#forgot-password)
- [**Reset Password**](#reset-password)
- [**Get Current User**](#get-current-user)
- [**Update Current User Data**](#update-current-user-data)
- [**Update Current User Password**](#update-current-user-password)
- [**Delete Current User**](#delete-current-user)

<br>
<br>
<br>

## **Authentication** Endpoints

Signup, login, reset and update current user password, updated current user data and delete Current User.

<br>

> ```javascript
>   POST /api/v1/users/signup
>   POST /api/v1/users/login
>   POST /api/v1/users/forgotPassword
>  PATCH /api/v1/users/resetPassword/:token
>    GET /api/v1/users/me
>  PATCH /api/v1/users/updateMe
>  PATCH /api/v1/users/updateMyPassword
> DELETE /api/v1/users/deleteMe
> ```

<br>
<br>

### **Sign Up**

Accessing this endpoint will **Create a Single User Object**.<br><br> \* Requires the name, email, password and passwordConfirm fields.

<br>

> **POST** `/api/v1/users/signup`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');
var data = JSON.stringify({
  name: 'test user',
  email: 'testuser@example.com',
  password: 'pass1234',
  passwordConfirm: 'pass1234'
});

var config = {
  method: 'post',
  url: '/api/v1/users/signup',
  headers: {
    'Content-Type': 'application/json'
  },
  data: data
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 201 Created`

```javascript
{
    "status": "success",
    "token": "{{token}}",
    "data": {
        "user": {
            "role": "user",
            "active": true,
            "name": "test user",
            "email": "testuser@example.com"
        }
    }
}
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

### **Login**

Accessing this endpoint will **Authenticate a Single User**.<br>A Token will be set to cookie and returned in the response along with the entire User Object.<br><br>\* Requires the email and password fields.

<br>

> **POST** `/api/v1/users/signup`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');
var data = JSON.stringify({
  email: 'testuser@example.com',
  password: 'pass1234'
});

var config = {
  method: 'post',
  url: '/api/v1/users/login',
  headers: {
    'Content-Type': 'application/json'
  },
  data: data
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 200 OK`

```javascript
{
    "status": "success",
    "token": "{{token}}",
    "data": {
        "user": {
            "role": "user",
            "name": "test user",
            "email": "testuser@example.com"
        }
    }
}
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

### **Forgot Password**

Accessing this endpoint will **Send Password Recovey Link via Email**.<br>The Link contains a token valid for 30 minutes only.<br><br>\* Requires the email field.

<br>

> **POST** `/api/v1/users/forgotPassword`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');
var data = JSON.stringify({
  email: 'testuser@example.com'
});

var config = {
  method: 'post',
  url: '/api/v1/users/forgotPassword',
  headers: {
    'Content-Type': 'application/json'
  },
  data: data
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 200 OK`

```javascript
{
    "status": "success",
    "message": "Token sent to email!"
}
```

</details>

<br>

Example Email

<details>
<summary>
<i>Email Text Template</i>
</summary>
<br>

```
Forgot your Password ? Reset your Password by following the link below:

{{URL}}/api/v1/users/resetPassword/:token

If you didn't forget your password, please ignore this email!
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

### **Reset Password**

Accessing this endpoint allow the user to **Change the Password**.<br>A new Token will be set to cookie and returned in the response along with the entire User Object.<br><br>\* Requires the password and passwordConfirm fields.

<br>

> **PATCH** `/api/v1/users/forgotPassword/:token`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');
var data = JSON.stringify({
  password: 'resetpass1234',
  passwordConfirm: 'resetpass1234'
});

var config = {
  method: 'patch',
  url: '/api/v1/users/resetPassword/{{token}}',
  headers: {
    'Content-Type': 'application/json'
  },
  data: data
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 200 OK`

```javascript
{
    "status": "success",
    "token": "{{token}}",
    "data": {
        "user": {
            "role": "user",
            "name": "test user",
            "email": "testuser@example.com"
        }
    }
}
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

### **Get Current User**

Accessing this endpoint will retrieve the **Current User Object**.<br><br>\* Accessing this Endpoint requires Authentication (must be logged in to access)

<br>

> **GET** `/api/v1/users/me`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: '/api/v1/users/me',
  headers: {
    Authorization: 'Bearer {{token}}'
  }
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 200 OK`

```javascript
{
    "status": "success",
    "data": {
        "data": {
            "role": "user",
            "name": "test user",
            "email": "testuser@example.com"
        }
    }
}
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

### **Update Current User Data**

Accessing this endpoint will **Update Current User Data** and will return the entire Updated User Object.<br><br>\* This route is not for password updates! instead use [Update Current User Password](#update-current-user-password)<br>\* Accessing this Endpoint requires Authentication (must be logged in to access)

<br>

> **PATCH** `/api/v1/users/updateMe`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');
var data = JSON.stringify({
  name: 'Test User Name'
});

var config = {
  method: 'patch',
  url: '/api/v1/users/updateMe',
  headers: {
    Authorization: 'Bearer {{token}}',
    'Content-Type': 'application/json'
  },
  data: data
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 200 OK`

```javascript
{
    "status": "success",
    "data": {
        "data": {
            "role": "user",
            "name": "Test User Name",
            "email": "testuser@example.com"
        }
    }
}
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

### **Update Current User Password**

Accessing this endpoint will **Update Current User Password**.<br> Also, will update the token and will return the entire Updated User Object.<br><br>\* Requires currentPassword, password and passwordConfirm fields.<br>\* Accessing this Endpoint requires Authentication (must be logged in to access)

<br>

> **PATCH** `/api/v1/users/updateMe`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');
var data = JSON.stringify({
  passwordCurrent: 'pass1234',
  password: 'newpass1234',
  passwordConfirm: 'newpass1234'
});

var config = {
  method: 'patch',
  url: '/api/v1/users/updateMyPassword',
  headers: {
    Authorization: 'Bearer {{token}}',
    'Content-Type': 'application/json'
  },
  data: data
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 200 OK`

```javascript
{
    "status": "success",
    "token": "{{token}}",
    "data": {
        "user": {
            "role": "user",
            "name": "Test User Name",
            "email": "testuser@example.com"
        }
    }
}
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

### **Delete Current User**

Accessing this endpoint will **Update Current User Password**.<br> Also, will update the token and will return the entire Updated User Object.<br><br>\* Requires currentPassword, password and passwordConfirm fields.<br>\* Accessing this Endpoint requires Authentication (must be logged in to access)

<br>

> **DELETE** `/api/v1/users/deleteMe`

<br>

Example Request

<details>
<summary>
<i>Language: Node.js - Axios</i>
</summary>

```javascript
var axios = require('axios');

var config = {
  method: 'delete',
  url: '/api/v1/users/deleteMe',
  headers: {
    Authorization: 'Bearer {{token}}'
  }
};

axios(config)
  .then(function(response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function(error) {
    console.log(error);
  });
```

</details>

<br>

Example Response

<details>
<summary>
<i>JSON-encoded response</i>
</summary>
<br>

`Status: 204 No Content`

```javascript
// empty - no content will be displayed
```

</details>

<br>

<hr>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
<br>

<hr>

<br>
<br>

</details>

<br>
<br>
<br>

<hr>

[readme](https://github.com/georgearion/happytours/blob/master/docs/readme.md) | [START HERE](https://github.com/georgearion/happytours/blob/master/docs/START%20HERE.md) | API DOCS | [BACKLOG](https://github.com/georgearion/happytours/blob/master/docs/BACKLOG.md)

<br>
