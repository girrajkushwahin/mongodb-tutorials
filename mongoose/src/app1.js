const mongoose=require('mongoose');

mongoose.set('strictQuery', false);

// create connection and create db if not present - 
mongoose.connect('mongodb://127.0.0.1:27017/girrajtechnical')
.then( ()=>console.log('connection successful') )
.catch( (err)=>console.log(err) );

// Schema creation(structure of document)
const playlistSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: String,
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

// model creation (for collection creation in DB)
const Playlist=new mongoose.model('Playlist',playlistSchema)




// creating document -
// const reactPlaylist=new Playlist({
//     name: "React JS",
//     type: 'front end',
//     videos: 80,
//     author: 'girraj technical',
//     active: true,
// })
// // for saving document to the DB -
// reactPlaylist.save() // .save() method returns promise. we can use async await for it.


// better way for creating and saving document -
// const createDocument= async ()=>{
//     try{
//         const reactPlaylist=new Playlist({
//             name: "Express JS",
//             type: 'back end',
//             videos: 20,
//             author: 'girraj technical',
//             active: true,
//         })
    
//         const result= await reactPlaylist.save();
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// createDocument();


// for inserting multiple documents at a time -
// const createDocument= async ()=>{
//     try{
//         const jsPlaylist=new Playlist({
//             name: "JavaScript",
//             type: 'front end',
//             videos: 150,
//             author: 'girraj technical',
//             active: true,
//         })
//         const mongodbPlaylist=new Playlist({
//             name: "Mongo DB",
//             type: 'Database',
//             videos: 25,
//             author: 'girraj technical',
//             active: true,
//         })
//         const mongoosePlaylist=new Playlist({
//             name: "mongoose",
//             type: 'databse',
//             videos: 26,
//             author: 'girraj technical',
//             active: true,
//         })
    
//         const result= await Playlist.insertMany([jsPlaylist, mongodbPlaylist, mongoosePlaylist]);
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// createDocument();


// for reading the document -
// const getDocument=async()=>{
//     try{
//         // const result =await Playlist.find();
//     // const result =await Playlist.find({type:'front end'});
//     // const result =await Playlist.find({type:'front end'}).select({name:1});
//     const result =await Playlist.find({type:'front end'}).select({name:1}).limit(1);
//     console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// getDocument();


// for some advanced conditions for reading/finding (comparison operator) -
// const getDocument=async()=>{
//     try{
//     // const result =await Playlist.find({videos:{$gt:50}}).select({name:1});
//     // const result =await Playlist.find({videos:{$gte:50}}).select({name:1});
//     // const result =await Playlist.find({videos:{$lt:50}}).select({name:1});
//     // const result =await Playlist.find({videos:{$lte:50}}).select({name:1});
//     // const result =await Playlist.find({type:{$in:['back end','Database']}}).select({name:1});
//     const result =await Playlist.find({type:{$nin:['back end','Database']}}).select({name:1});
//     console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// getDocument();

// OPERATORS DESCRIPTION -
// $eq It is used to match the values of the fields that are equal to a specified value.
// $ne It is used to match all values of the field that are not equal to a specified value.
// $gt It is used to match the values of the fields that are greater than a specified value.
// $gte It is used to match the values of the fields that are greater than equal to the specified value.
// $lt It is used to match values of the fields that are less than a specified value
// $lte It is used to match values of the fields that are less than equals to the specified value
// $in It is used to match any of the values specified in an array.
// $nin It is used to match none of the values specified in an array. 


// Logical operators in mongoose -
// const getDocument=async()=>{
//     try{
//     // const result =await Playlist.find({$or:[{type:'back end'},{author:'girraj technical'}]}).select({name:1});
//     const result =await Playlist.find({$and:[{type:'back end'},{author:'girraj technical'}]}).select({name:1});
//     console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// getDocument();


// counting queries in mongoose -
// const getDocument=async()=>{
//     try{
//     // const result =await Playlist.find({$and:[{type:'back end'},{author:'girraj technical'}]}).select({name:1}).countDocuments();
//     const result =await Playlist.find().countDocuments();
//     console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// getDocument();


// sorting in mongoose -
// const getDocument=async()=>{
//     try{
//     const result =await Playlist.find({author:'girraj technical'}).select({name:1}).sort({name: 1});
//     // const result =await Playlist.find({author:'girraj technical'}).select({name:1}).sort({name: -1});
//     console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// getDocument();
// sort({name:1}) and sort({name:0}) for ascending order
// sort({name:-1}) for descending order


// update query in mongoose -
// const updateDocument=async (_id)=>{
//     try{
//         const result=await Playlist.updateOne({_id},{   // {_id} means key and value with same name
//             $set:{
//                 name: 'Mongoose'
//             }
//         })

//         console.log(result);

//     }catch(err){
//         console.log(err);
//     }
// }

// updateDocument('63e1e646ff60dcdb3086a6f2');


// const updateDocument=async (_id)=>{
//     try{
//         const result=await Playlist.findByIdAndUpdate({_id},{
//             $set:{
//                 name: 'Mongoose'
//             },
//         },{
//             new:true // option argument(if we don't add it then old data will be shown in console and new data will be updated in DB,if new:true then the data we are trying to update will show in console )
//         })

//         console.log(result);

//     }catch(err){
//         console.log(err);
//     }
// }

// updateDocument('63e1e646ff60dcdb3086a6f2');


// update query in mongoose -
// const deleteDocument=async(_id)=>{
//     try{
//         const result=await Playlist.deleteOne({_id});
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// deleteDocument('63e1e646ff60dcdb3086a6f2');


// can use deleteMany() for deleting multiple documents.


// const deleteDocument=async(_id)=>{
//     try{
//         const result=await Playlist.findByIdAndDelete({_id});
//         console.log(result);
//     }catch(err){
//         console.log(err);
//     }
// }

// deleteDocument('63e1e646ff60dcdb3086a6f1');

// deleteOne and deleteMany returns no. of deleted count in result while findByIdAndDelete returns the complete document which you have deleted.




// Validation in Mongoose -
