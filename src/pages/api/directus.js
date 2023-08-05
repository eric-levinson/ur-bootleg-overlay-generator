const directusurl = process.env.DIRECTUS_API_URL
import { createDirectus } from '@directus/sdk';
import { rest } from '@directus/sdk/rest';
const directus = createDirectus("https://cntrpnt.io/").with(rest());
export default directus;