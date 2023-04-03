const mongoose=require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/girrajtechnical')
.then( ()=>console.log('connection successful') )
.catch( (err)=>console.log(err) );

const playlistSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true, // name field is compulsory. user have to fill it.
        unique: true, // name field data cannot same for documents, used in the case of username
        lowercase: true, // uppercase: true also work
        trim: true, // remove extra whitespaces from start and end of data
        minlength: [3,'error messege when minlength found'], // minimum 3 character required in name
        maxlength: 30 // maximum 30 characters allowed in name
        // match validation related to regex. complete it ???????????????????????????????????????
    },
    type: {
        type: String,
        required: true,
        lowercase: true,
        enum: ['frontend','backend','database'] // value of type should be one of these values that are present in this array (in enum)
    },
    videos: Number,
    author: String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

const Playlist=new mongoose.model('Playlist',playlistSchema);

const createDocument= async ()=>{
    try{
        const mongoosePlaylist=new Playlist({
            name: "pYTHon language",
            type: 'BAckend',
            videos: 60,
            author: 'girraj technical',
            active: true,
        })
    
        const result= await mongoosePlaylist.save();
        console.log(result);
    }catch(err){
        console.log(err);
    }
}

createDocument();