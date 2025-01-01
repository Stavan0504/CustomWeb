import { createClient } from 'next-sanity';
export const client = createClient({
        projectId: '7lpprm62',
        dataset: 'jamstacky',
        apiVersion: '2023-01-01',
        useCdn: false, 
    });

