import conf from "../conf/conf";
import { Client, ID , Databases, Storage, Query} from "appwrite";

export class Service{
    client = new Client();
    databases;
    storage;

    constructor(){
        this.client
           .setEndpoint(conf.appwriteUrl)
           .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.storage = new this.storage(this.client);
    }

}

const service = new Service();
export default service