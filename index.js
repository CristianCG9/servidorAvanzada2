import {API} from './API.js'
import * as dotenv from 'dotenv'
dotenv.config()

let servidor = new API()
//1. Despertar servidor
servidor.despertarServidor()