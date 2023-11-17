## Three types of databases

# one to one
# one to many
# many to many

MONGO DOCS

docs.mongodb.com/manual/tutorial/update-documents/

$inc

short for increment 
example like a book in bookRouter


$regex
$pull
$push
where
exec


Mongoose commands are used in code for mongoDB.


# Common MongoDB Update Operators and Their Use Cases

MongoDB provides powerful update operators that allow you to perform specific operations on documents in a collection. These operators can be particularly useful in various scenarios. In this guide, we'll explore some of the most common MongoDB update operators and the reasons they are used.

## 1. Introduction

MongoDB update operators are essential tools for modifying documents in a collection. They allow you to perform specific actions, making it possible to update fields, add elements to arrays, or perform other operations on documents. Let's explore some of the most common update operators and their use cases.

## 2. $set Operator

**Use Case:** The `$set` operator is used to set the value of a field in a document. It is handy when you need to update a specific field to a new value.

## 3. $unset Operator

**Use Case:** The `$unset` operator is employed to remove a field from a document. This is useful when you want to eliminate a specific field completely.

## 4. $push Operator

**Use Case:** The `$push` operator adds an element to an array field. It's helpful when you need to append new elements to an existing array.

## 5. $addToSet Operator

**Use Case:** The `$addToSet` operator is used to add an element to an array only if it does not already exist. It's valuable when you want to ensure uniqueness in an array.

## 6. $pull Operator

**Use Case:** The `$pull` operator removes elements from an array that match a specified condition. It's handy for selectively removing items from an array.

## 7. $inc Operator

**Use Case:** The `$inc` operator increments a numeric field by a specified value. This is useful when you need to update numeric values by a fixed amount.

## 8. $currentDate Operator

**Use Case:** The `$currentDate` operator sets a field to the current date or timestamp. It's valuable for tracking when a specific operation occurred.

## 9. Conclusion

MongoDB update operators are powerful tools for modifying documents in a collection. By understanding the common update operators and their use cases, you can efficiently update and manipulate data in your MongoDB database. Whether you need to update fields, work with arrays, or track timestamps, these operators provide the flexibility and precision you need for various scenarios.