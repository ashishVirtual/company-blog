const {username,password} = process.env

export const connection = `mongodb+srv://${username}:${password}@cluster0.6jjxb.mongodb.net/dummy-project-next
?retryWrites=true&w=majority&appName=Cluster0`