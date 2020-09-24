# HappyTours - RESTful API

v1

The HappyTours API is organized around REST. This API contains endpoints for Tours, Users, Reviews and Authentication and has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response code authentication, and verbs.

<br>
<br>

### Table of Contents

<hr>

- [**TOURS**](#tours)

  - [**Get All Tours**](#get-all-tours)

    - [Get Default Tours](#get-default-tours)

    - [Sorting Tours](#sorting-tours)
    - [Filtering Tours](#filtering-tours)
    - [Combination, Sorting and Filtering Tours](#combination-sorting-and-filtering-tours)

  - [**Get Tour**](#get-tour)

  - [**Create New Tour**](#create-new-tour)
  - [**Update Tour**](#update-tour)
  - [**Delete Tour**](#delete-tour)

  - [**Tours - Special Routes**](#tours---special-routes)

    - [Get Monthly Plan](#get-monthly-plan)

    - [Get Tour Stats](#get-tour-stats)
    - [Get Tours Within Radius](#get-tours-within-radius)
    - [Get Distances To Tours From Location](#get-distances-to-tours-from-location)

  - [**Tours / Reviews**](#tours--reviews)

    - [Get All Reviews on Tour](#get-all-reviews-on-tour)

    - [Create New Review on Tour](#create-new-review-on-tour)

<br>
<hr>
<br>
<br>

## **Tours**

Get all Tours, create new ones, and edit and delete Tours. Also contains endpoints to special requirements

<br>
<br>

### **Get All Tours**

Accessing this endpoint retrieves a **List to All Tour Objects** in the database. This endpoint accepts params for further **Sorting** and **Filtering** and supports gte, lte, gt, lt operators. (also accepts combination of Sorting and filtering parms)

<br>

#### **Get Default Tours**

retrieve all Tours in database

<br>

> **GET** `{{URL}}/api/v1/tours`

<br>

Example Request

(<i>Language: Node.js - Axios</i>)

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: '{{URL}}/api/v1/tours/',
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

<br>

Example Response

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
        "_id": "5c88fa8cf4afda39709c2955",
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
        "durationWeeks": 0.14285714285714285,
        "id": "5c88fa8cf4afda39709c2955"
      }
      8 results hidded...
    ]
  }
}
```

<br>

[**^ Back to Top**](#table-of-contents)

<br>
<br>

#### **Sorting Tours**

Example, sorting tours by Duration (number of days in ascending order)

<br>

> **GET** `{{URL}}/api/v1/tours?sort=duration`

<br>

Example Request

(<i>Language: Node.js - Axios</i>)

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: '{{URL}}/api/v1/tours/?sort=duration',
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

<br>

Example Response

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
        "_id": "5c88fa8cf4afda39709c2955",
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
        "id": "5c88fa8cf4afda39709c2955"
      },
      {
        "startLocation": {},
        "ratingsAverage": 4.7,
        "ratingsQuantity": 7,
        "images": [],
        "startDates": [],
        "secretTour": false,
        "guides": [],
        "_id": "5c88fa8cf4afda39709c2974",
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
        "durationWeeks": 0.42857142857142855,
        "id": "5c88fa8cf4afda39709c2974"
      }
      7 results hidded...
    ]
  }
}
```

<br>

[**^ Back to Top**](#table-of-contents)

<br>
<br>

#### **Filtering Tours**

Example, filtering tours by Rating (greater than 4.8)

<br>

> **GET** `{{URL}}/api/v1/tours?ratingsAverage[gt]=4.8`

<br>

Example Request

(<i>Language: Node.js - Axios</i>)

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: '{{URL}}/api/v1/tours/?ratingsAverage[gt]=4.8',
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

<br>

Example Response

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
        "_id": "5c88fa8cf4afda39709c2951",
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
        "durationWeeks": 0.5714285714285714,
        "id": "5c88fa8cf4afda39709c2951"
      }
    ]
  }
}
```

<br>

[**^ Back to Top**](#table-of-contents)

<br>
<br>

#### **Combination, Sorting and Filtering Tours**

Example, **Filtering Tours** by Duration (less then /or equal 3 days) **and Sorting Tours** by Price (descending)

<br>

> **GET** `{{URL}}/api/v1/tours?duration[lte]=3&sort=-price`

<br>

Example Request

(<i>Language: Node.js - Axios</i>)

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: '{{URL}}/api/v1/tours/?duration[lte]=3&sort=-price',
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

<br>

Example Response

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
        "_id": "5c88fa8cf4afda39709c2974",
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
        "durationWeeks": 0.42857142857142855,
        "id": "5c88fa8cf4afda39709c2974"
      },
      {
        "startLocation": {},
        "ratingsAverage": 4.8,
        "ratingsQuantity": 6,
        "images": [],
        "startDates": [],
        "secretTour": false,
        "guides": [],
        "_id": "5c88fa8cf4afda39709c2955",
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
        "durationWeeks": 0.14285714285714285,
        "id": "5c88fa8cf4afda39709c2955"
      }
    ]
  }
}
```

<br>

[**^ Back to Top**](#table-of-contents)

<br>
<br>

### **Get Tour**

Accessing this endpoint retrieves a **Single Tour Object**.<br><br> \* Requires the TourId.

<br>

> **GET** `{{URL}}/api/v1/tours/:tourId`

<br>

Example Request

(<i>Language: Node.js - Axios</i>)

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: '{{URL}}/api/v1/tours/:tourId',
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

<br>

Example Response

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
      "_id": "5c88fa8cf4afda39709c2955",
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
      "__v": 0,
      "durationWeeks": 0.14285714285714285,
      "reviews": [],
      "id": "5c88fa8cf4afda39709c2955"
    }
  }
}
```

<br>

[**^ Back to Top**](#table-of-contents)

<br>
<br>

### **Create New Tour**

Accessing this endpoint will **Create a Single Tour Object**.<br>
Minimum required fields are name / duration / maxGrupSize / difficulty / price / summary, imageCover and startLocation.<br>

\* Accessing this Endpoint requires Authentication (only Admin and Lead-Guide can create new Tour)

<br>

> **POST** `{{URL}}/api/v1/tours`

<br>

Example Request

(<i>Language: Node.js - Axios</i>)

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
  url: '{{URL}}/api/v1/tours',
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

<br>

Example Response

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
            "_id": "5f6b5ded3ebdbd13c8c677c0",
            "name": "New Amaxing Tour",
            "duration": 1,
            "maxGroupSize": 1,
            "difficulty": "easy",
            "price": 200,
            "summary": "Lorem ipsum sit dolor ...",
            "imageCover": "new-tour-cover.jpg",
            "locations": [],
            "slug": "new-amaxing-tour",
            "__v": 0,
            "durationWeeks": 0.14285714285714285,
            "id": "5f6b5ded3ebdbd13c8c677c0"
        }
    }
}
```

<br>

[**^ Back to Top**](#table-of-contents)

<br>
<br>

### **Update Tour**

Accessing this endpoint will **Update a Single Tour Object**.<br>Only the provided fields will be updated and will return the entire Updated Tour Object<br><br>\* Requires the TourId.<br>\* Accessing this Endpoint requires Authentication (only Admin and Lead-Guide can create new Tour)

<br>

> **PATCH** `{{URL}}/api/v1/tours/:tourId`

<br>

Example Request

(<i>Language: Node.js - Axios</i>)

```javascript
var axios = require('axios');
var data = JSON.stringify({
  summary: 'Updated tour summary',
  description: 'Updated tour long description'
});

var config = {
  method: 'patch',
  url: '{{URL}}/api/v1/tours/:tourId',
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

<br>

Example Response

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
            "_id": "5f6b5ded3ebdbd13c8c677c0",
            "name": "New Amaxing Tour",
            "duration": 1,
            "maxGroupSize": 1,
            "difficulty": "easy",
            "price": 200,
            "summary": "Updated tour summary",
            "imageCover": "new-tour-cover.jpg",
            "locations": [],
            "slug": "new-amaxing-tour",
            "__v": 0,
            "description": "Updated tour long description",
            "durationWeeks": 0.14285714285714285,
            "id": "5f6b5ded3ebdbd13c8c677c0"
        }
    }
}
```

<br>

[**^ Back to Top**](#table-of-contents)

<br>
<br>

### **Delete Tour**

Accessing this endpoint will **Update a Single Tour Object**.<br><br> \* Requires the TourId.<br>\* Accessing this Endpoint requires Authentication (only Admin and Lead-Guide can create new Tour)

<br>

> **DELETE** `{{URL}}/api/v1/tours/:tourId`

<br>

Example Request

(<i>Language: Node.js - Axios</i>)

```javascript
var axios = require('axios');

var config = {
  method: 'delete',
  url: '{{URL}}api/v1/tours/:tourId',
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

<br>

Example Response

`Status: 204 No Content`

```javascript
// empty - no content will be displayed
```

<br>

[**^ Back to Top**](#table-of-contents)

<br>
<br>

### **Tours - Special Routes**

Contains endpoints to special requirements such as various statistics, distances from location to tours and more..

<br>
<br>

#### **Get Monthly Plan**

Accessing this endpoint will retrieve a **Year Plan** sorted with the busiest months at the top.<br><br> \* Requires the Year in "YYYY" format.<br>\* Accessing this Endpoint requires Authentication (restricted to Admin and Lead-Guide and Guide)

<br>

> **GET** `{{URL}}/api/v1/tours/:year`

<br>

Example Request

(<i>Language: Node.js - Axios</i>)

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: '{{URL}}api/v1/tours/monthly-plan/2021',
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

<br>

Example Response

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

<br>

[**^ Back to Top**](#table-of-contents)

<br>
<br>

#### **Get Tour Stats**

Accessing this endpoint will retrieve, in realtime, **Various Statistics** about all Tours such as Number of Ratings, Average Rating, Average Price etc.<br><br> \* Will return and Array sorted by 'difficulty'.

<br>

> **GET** `{{URL}}/api/v1/tours/get-monthly-tour`

<br>

Example Request

(<i>Language: Node.js - Axios</i>)

```javascript
var config = {
  method: 'get',
  url: '{{URL}}/api/v1/tours/tour-stats',
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

<br>

Example Response

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

<br>

[**^ Back to Top**](#table-of-contents)

<br>
<br>

#### **Get Tours Within Radius**

Accessing this endpoint will retrieve all **Tours Within A Specified Radius**.<br><br> \* Requires the specified \*distance, \*coordinates (in the form of 'latitude,longitude') and \*unit (in 'mi'-miles or 'km'-kilometers).

<br>

> **GET** `{{URL}}/api/v1/tours/tours-within/:distance/center/:latlng/unit/:unit`

<br>

Example Request

(<i>Language: Node.js - Axios</i>)

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url:
    '{{URL}}/api/v1/tours/tours-within/300/center/7.8831842,98.3736207/unit/km',
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

<br>

Example Response

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
        "_id": "5c88fa8cf4afda39709c2974",
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
        "__v": 0,
        "durationWeeks": 0.42857142857142855,
        "id": "5c88fa8cf4afda39709c2974"
      },
      {
        "startLocation": {},
        "ratingsAverage": 4.4,
        "ratingsQuantity": 7,
        "images": [],
        "startDates": [],
        "secretTour": false,
        "guides": [],
        "_id": "5c88fa8cf4afda39709c296c",
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
        "__v": 0,
        "durationWeeks": 0.7142857142857143,
        "id": "5c88fa8cf4afda39709c296c"
      }
      4 results hidden ...
    ]
  }
}
```

<br>

[**^ Back to Top**](#table-of-contents)

<br>
<br>

#### **Get Distances To Tours From Location**

Accessing this endpoint will retrieve the **Distances to Tours** from a specified location.<br><br> \* Requires the specified \*location, (in the form of 'latitude,longitude') and \*unit (in 'mi'-miles or 'km'-kilometers).

<br>

> **GET** `{{URL}}/api/v1/tours/distances/:location/unit/:unit`

<br>

Example Request

(<i>Language: Node.js - Axios</i>)

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: '{{URL}}/api/v1/tours/distances/7.8831842,98.3736207/unit/km',
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

<br>

Example Response

`Status: 200 OK`

```javascript
{
    "status": "success",
    "results": 9,
    "data": {
        "data": [
            {
                "_id": "5c88fa8cf4afda39709c296c",
                "name": "White Water Rafting",
                "distance": 0.09421791327160058
            },
            {
                "_id": "5c88fa8cf4afda39709c2961",
                "name": "Phi Phi Islands",
                "distance": 9.45049216801932
            },
            {
                "_id": "5c88fa8cf4afda39709c2970",
                "name": "Cave Canoeing Tour",
                "distance": 9.45049216801932
            },
            {
                "_id": "5c88fa8cf4afda39709c2951",
                "name": "Similan Islands Snorkeling",
                "distance": 90.91015879310605
            }
            5 results hidden ...
        ]
    }
}
```

<br>

[**^ Back to Top**](#table-of-contents)

<br>
<br>

### **Tours / Reviews**

Get all Reviews for a single Tour, create new review on a single Tour.

<br>
<br>

#### **Get All Reviews on Tour**

Accessing this endpoint will retrieve **All Reviews Of A Single Tour**.<br><br> \* Requires the TourId.<br>\* Accessing this Endpoint requires Authentication

<br>

> **GET** `{{URL}}/api/v1/tours/:tourId/reviews`

<br>

Example Request

(<i>Language: Node.js - Axios</i>)

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: '{{URL}}/api/v1/tours/5c88fa8cf4afda39709c2951/reviews',
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

<br>

Example Response

`Status: 200 OK`

```javascript
{
  "status": "success",
  "results": 9,
  "data": {
    "data": [
      {
        "rating": 5,
        "createdAt": "2020-09-19T00:53:56.848Z",
        "_id": "5c8a379a14eb5c17645c9110",
        "review": "Pretium vel inceptos fringilla...",
        "user": {},
        "tour": "5c88fa8cf4afda39709c2951",
        "id": "5c8a379a14eb5c17645c9110"
      },
      {
        "rating": 5,
        "createdAt": "2020-09-19T00:53:56.848Z",
        "_id": "5c8a381714eb5c17645c9115",
        "review": "Porttitor ullamcorper rutrum ...",
        "user": {},
        "tour": "5c88fa8cf4afda39709c2951",
        "id": "5c8a381714eb5c17645c9115"
      }
      7 results hidden ...
    ]
  }
}
```

<br>

[**^ Back to Top**](#table-of-contents)

<br>
<br>

### **Create New Review On Tour**

Accessing this endpoint will **Create A New Review On Tour**.<br><br> \* Requires the TourId.<br>\* Accessing this Endpoint requires Authentication (only User can create new Review on Tour)

<br>

> **POST** `{{URL}}/api/v1/tours/:tourId/reviews`

<br>

Example Request

(<i>Language: Node.js - Axios</i>)

```javascript
var axios = require('axios');
var data = JSON.stringify({
  rating: 5,
  review: 'Lorem taciti fringilla himenaeos'
});

var config = {
  method: 'post',
  url: '{{URL}}/api/v1/tours/5c88fa8cf4afda39709c2951/reviews',
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

<br>

Example Response

`Status: 201 Created`

```javascript
{
    "status": "success",
    "data": {
        "data": {
            "rating": 5,
            "createdAt": "2020-09-23T14:34:12.870Z",
            "_id": "5f6c3f8a3ebdbd13c8c677c1",
            "review": "Lorem taciti fringilla himenaeos",
            "tour": "5c88fa8cf4afda39709c2951",
            "user": "5c8a1dfa2f8fb814b56fa181",
            "__v": 0,
            "id": "5f6c3f8a3ebdbd13c8c677c1"
        }
    }
}
```

<br>

[**^ Back to Top**](#table-of-contents)

<br>
<br>
