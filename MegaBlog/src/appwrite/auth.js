import conf from '../conf/config';
import { Client, Account, ID } from "appwrite";

class AuthService {
    client = new Client()
    account;
    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }

    async createAccount(email, password ,name) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
            if (userAccount) {
                this.logIn(email, password)
            }
            else {
                return userAccount
            }
        }
        catch (error) {
            throw error;
        }
    }

    async logIn(email,password) {
        try {
            return await this.account.createEmailPasswordSession(email,password);
        }
        catch (error) {
            console.log(error);
            throw error
        }
    }

    async getCurrentUser() {
        // Assuming Appwrite SDK is initialized
        try {
            return await this.account.get();
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteSessions() {
        // Assuming Appwrite SDK is initialized
        try {
            const user = await this.account.deleteSessions();
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async logOut(){
        try {
            return await this.account.deleteSessions();
        }
        catch (error) {
            throw error
        }
    }
}

const authService = new AuthService()

export default authService