import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class Authservice{
    client = new Client();
    account;

    constructor(){
        this.client
           .setEndpoint(conf.appwriteUrl)
           .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
        console.log(this.account)
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if(userAccount){
                console.log(userAccount)
                return this.login({email, password});
            }else{
                return userAccount
            }
        } catch (error) {
            throw error
        }
    }

    async login(data){
        const email = data.email;
        const password = data.password
        console.log(data)
        try {
            return await this.account.createEmailSession({email, password})
        } catch (error) {
            console.log("Appwrite service :: login :: error", error)
            throw error
        }
    }

    async getCurrentUser(){
        try {
            return this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error", error);
        }
        return null
    }

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error)
        }
    }
}

export const authService = new Authservice();

