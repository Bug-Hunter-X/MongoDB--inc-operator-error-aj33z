```javascript
// Correct usage of $inc operator in MongoDB update
const value = 10; //Ensure value is a number
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{field:value}});
```