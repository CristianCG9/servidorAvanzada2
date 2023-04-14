import mongoose from 'mongoose';

export async function establecerconexion(){
    try{
        await mongoose.connect(process.env.DATABASE)
        console.log(`Exito al conectarse a la base de datos`)
    }catch(error){
        console.log(`Fallamos al conectarnos a la base de datos ${error}`)
    }
}