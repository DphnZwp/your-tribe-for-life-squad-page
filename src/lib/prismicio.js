import * as prismic from '@prismicio/client'

const repositoryName = 'your-tribe-for-life-squad-page'

const createClient = (params) => {
    const client = prismic.createClient(repositoryName, params)

    return client
}

export default createClient