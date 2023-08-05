import directus from '../pages/api/directus';
import { notFound, useParams } from 'next/navigation';
import { readItems } from '@directus/sdk';
import {Teamselector} from './components/select';



//'b6f9faf7-46f2-40bd-9549-e85ec6d4198c'

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



export default async function DynamicPage() {

  const teams = await getTeams('b6f9faf7-46f2-40bd-9549-e85ec6d4198c');

  return (
    <div className='h-screen dark text-foreground bg-background'>
      <div className='container mx-auto p-4'>
        <h1 className="text-3xl font-bold underline mb-4">United Rogue Bootleg Generator</h1>
          <Teamselector teams={teams}/>
      </div>
    </div>
  )
}

