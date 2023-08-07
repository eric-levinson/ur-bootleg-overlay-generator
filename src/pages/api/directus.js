const directusurl = process.env.DIRECTUS_API_URL
import { createDirectus } from '@directus/sdk';
import { rest } from '@directus/sdk/rest';
const directus = createDirectus(directusurl).with(rest());
export default directus;