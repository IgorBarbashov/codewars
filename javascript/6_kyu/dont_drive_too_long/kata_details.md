Driving can be really stressfull and weary activity especially if you are driving a big truck.

Your task is to write function which return true if driver exceed daily limit,false otherwise.

The only limitiation is that driver cant drive in total more than 9 hours in 24 hours span.

Function input:
```javascript
//There will be only hours from same day,only 3 types of activites "Drive","Rest","Work"
//Limit only applies to "Drive" activity
//We assume that before and after described activities driver was resting.

var dailyShedule1 = [ ["7:00-10:30","Drive"],
["10:30-10:45","Rest"],
["10:45-11:45","Drive"],
["11:45-12:15","Rest"],
["12:15-16:45","Drive"],
["16:45-20:15","Work"]
];
//-> should return false,9 hours of driving in total.
```
