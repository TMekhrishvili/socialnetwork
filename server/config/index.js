const port = process.env.port || 3000;
const mongoURI = process.env.mongoURI || 'mongodb+srv://admin:admin123@cluster0.w0dvv.mongodb.net/tlsn?retryWrites=true&w=majority'

module.exports = {
    port,
    mongoURI
}
