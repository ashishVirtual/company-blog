const {MONGO_USERNAME,MONGO_PASSWORD} = process.env

export const connection = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.6jjxb.mongodb.net/dummy-project-next
?retryWrites=true&w=majority&appName=Cluster0`