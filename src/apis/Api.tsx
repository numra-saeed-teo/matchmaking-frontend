import axios from 'axios';
import { IProject } from '../interfaces/interfaces';
//import { ICampaign, IOverview } from '../interfaces/interfaces';

const BASE_URL = 'http://localhost:3001'; // this should be placed in env file

const sendRequestForProjects = async (): Promise<IProject[]> => {
    try {
        const result = await axios.get(`${BASE_URL}/projects`);
        return result.data;

    } catch (err: any) {
        console.log(err);
        return [];
    }
};

const getProjectsForUsers = async (): Promise<IProject[]> => {
    try {
        const result = await axios.get(`${BASE_URL}/projects-users`);
        return result.data;

    } catch (err: any) {
        console.log(err);
        return [];
    }
};



export {
    sendRequestForProjects,
    getProjectsForUsers
}