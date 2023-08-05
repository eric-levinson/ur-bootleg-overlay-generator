import directus from '@/pages/api/directus';
import { readItems } from '@directus/sdk';
import Gen from '../components/gen';

async function getTeams(id) {
	try {
		const teams = await directus.request(readItems('teams',
        {
          filter: {
            division: { _eq: id },
        },
        sort: ['abbreviation']
      }
      ));
		return teams;
	} catch (error) {
    console.log(error)
		return null
	}
}

// dynamic page which gets router query
export default async function DynamicPage() {

    const teams = await getTeams('b6f9faf7-46f2-40bd-9549-e85ec6d4198c');

    
    return <Gen teams={teams}/>
    }