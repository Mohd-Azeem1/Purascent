import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class Authservice {
    constructor() {
        // Log configuration values for debugging
        console.log("Appwrite URL:", conf.appwriteUrl);
        console.log("Appwrite Project ID:", conf.appwriteProjectId);

        // Initialize and configure the client inside the constructor
        this.client = new Client()
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        // Log the client configuration for debugging
        console.log("Appwrite Client:", this.client);

        // Initialize the Account service with the configured client
        this.account = new Account(this.client);
        console.log(this.account);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                console.log(userAccount);
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            console.error("Appwrite service :: createAccount :: error", error);
            throw error;
        }
    }

    async login(data) {
        const { email, password } = data;
        console.log(data);
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            console.error("Appwrite service :: login :: error", error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.error("Appwrite service :: getCurrentUser :: error", error);
            return null;
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.error("Appwrite service :: logout :: error", error);
        }
    }
}

export const authService = new Authservice();
