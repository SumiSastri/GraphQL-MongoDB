
1. First connect to mongodb
In command line: 
mongo "mongodb://cluster0-shard-00-00-jxeqq.mongodb.net:27017,cluster0-shard-00-01-jxeqq.mongodb.net:27017,cluster0-shard-00-02-jxeqq.mongodb.net:27017/100YWeatherSmall?replicaSet=Cluster0-shard-0" --authenticationDatabase admin --ssl --username m001-student --password m001-mongodb-basics

2. Now check that you are connected
Check you are connected in terminal:
show collections
use video
show collections
db.movies.find().pretty()

3. Keep this terminal on Mongo running if it is disconnected you will be disconnected from the db and need to go through steps 1 & 2 again - stop at show collections if you get data as the collection - continue if you want to make doubly sure right to the end

4. Sign into mongoDb university
UN-gvc email
Pass: L,

5. Go to my courses and get into your lecture stream

6. In Applications on your Mac find the compass icon (green-leaf)

Run compass app:
(Connect string for Compass) You need this every time you reboot
mongodb+srv://m001-student:m001-mongodb-basics@cluster0-jxeqq.mongodb.net/test

7.  OK, now you should be able to browse some of the collections in this cluster.

If you look to the left in the Compass interface, you'll see a navigation panel containing a list of all databases in the cluster we are connected to, with the collections those databases contain nested below them.

Note that you can return to this view at any point by clicking the Home icon.

Right now however, we want to dive into the collections here.

We have quite a few databases here.

These are the collections we'll use throughout the course.

They contain a variety of types of data, and a range of data models, so that we can illustrate different features of MongoDB.

To access documents within any collection, simply locate the collection in this navigation panel and click.

As an example, let's take a look at the movies collection of the videos database.

As you click on this collection, you should see a schema view for the collection appear in the main panel.

The schema view provides a list of the fields found in documents within this collection.

As you might expect for movies, we have fields for director, genre, plot, and a number of other features relevant to movies.

As we scroll through, we can see all fields found in documents in this collection.

Again, this view provides a summary of the schema, or data model, for documents in this collection.

We have the list of fields, their data types, and a summary of the range of values for each field found throughout the documents in the collection.

We'll return to a more detailed walkthrough of this information in a later lesson.

For now, let's dig into this collection a bit, and look at a few specific documents.

If we click the Documents tab, you should see a list of documents within this collection.

This view gives us the ability to browse the actual data found in this collection.

Here we can see a document recording the details for a one minute long film called Carmencita that was produced in 1894.

As we scroll through this view, we can see other documents in this collection.

In later lessons, we'll look at how to query this data to find documents matching a specific set of filter criteria.

We'll also learn how to insert new documents, and update existing ones, with new data.

Go ahead and explore this data a bit, and peek in on the other collections in this Atlas cluster.

And then, move on to the next lesson.

And then, move on to the next lesson.