const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient()

const resolvers = {

Query :{
    allUsers : async()=>{
      const allusers = await prisma.user.findMany()
      return allusers
    },
    userById: async (_, { id }) => {
        try {
            const user = await prisma.user.findUnique({
                where: { id: id }
            });
            return user;
        } catch (e) {
            console.error(e);
            throw new Error('Failed to retrieve user by ID');
        }
    }
},
Mutation : {
    /// create user
    createUser : async (_,{input})=>{
    try{
const users = await prisma.user.create({
    data:{
        email : input.email,
        name :  input.name,
        role : input.role,
        designation : input.designation
           }
          })
return users
    }
    catch(e){
        console.error(e);
        throw new Error('Failed to create a new user');
    }
    },
    /// update user
    updateUser : async (_,{input})=>{
try{
    const updatedUser = await prisma.user.update({
        where : {id : input.id},
        data : {
             email : input.email,
             name : input.name,
             role : input.role,
             designation : input.designation
        }
    })
    return updatedUser
}catch(e){
    console.error(e);
        throw new Error('Failed to update user');
}

    },
//// delete user
deleteUser : async(_,{input})=>{
    try{
        await prisma.user.delete({
            where : {id : input.id}
          })
          return true
    }

 catch(e){
    console.error(e);
    throw new Error('Failed to delete user');
 }
}

}
}
module.exports = resolvers