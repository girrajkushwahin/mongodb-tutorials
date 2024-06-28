const mongoose = require('mongoose');
const validator = require('validator');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/girrajtechnical')
    .then(() => console.log('connection successful'))
    .catch((err) => console.log(err));

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        minlength: [3, 'error messege when minlength found'],
        maxlength: 30
    },
    type: {
        type: String,
        required: true,
        lowercase: true,
        enum: ['frontend', 'backend', 'database']
    },
    videos: {
        type: Number,
        validate(value) {
            if (value < 0) throw new Error('videos count should not in negative')
        }

        // validate: {
        //     validator:function(value){
        //         return value.length<0;
        //     },
        //     message:'videos count should not in negative'
        // }

    },
    author: String,
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('enter correct email');
            }
        }
    },
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
})

const Playlist = mongoose.model('Playlist', playlistSchema);

const createDocument = async () => {
    try {
        const mongoosePlaylist = new Playlist({
            name: 'C# Language',
            type: 'backend',
            videos: 71,
            author: 'girraj technical',
            email: 'girraj@gmail.co',
            active: true,
        })

        const result = await mongoosePlaylist.save();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

createDocument();