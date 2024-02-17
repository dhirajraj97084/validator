const http=require('http')
const server=http.createServer((req,res)=>{
 res.end('hello dhiraj bhai kaise ho aap thik ho nahi ho');
 
})
server.listen(3500,'127.0.0.1' , ()=>{
 console.log('listing your local host 3500');
})