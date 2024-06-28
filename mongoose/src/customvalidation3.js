const mongoose = require('mongoose');

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
        minlength: [3, 'error messege when minlength found'], // can write only 3 and can remove array if custom error message not needed.
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
        validate(value) {                    // custom validation (short and good)
            if (value < 0) throw new Error('videos count should not in negative')
        }

        // validate: {                        // another way for custom validation
        //     validator: function (value) {
        //         return value.length < 0;
        //     },
        //     message: 'videos count should not in negative', // 'message' expects function or string here
        // }

    },
    author: String,
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
            name: 'Go Language',
            type: 'backend',
            videos: 65,
            author: 'girraj technical',
            active: true,
        })

        const result = await mongoosePlaylist.save();
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}

createDocument();