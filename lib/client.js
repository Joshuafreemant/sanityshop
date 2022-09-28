import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


// connect sanity to this project
export const client = sanityClient({
    projectId:'db5vrkqa',
    dataset:'production',
    apiVersion:'2022-09-27',
    useCdn:true,
    token:process.env.NEXT_PUBLIC_SANITY_TOKEN
})

// get access to sanity images
const builder=imageUrlBuilder(client)
export const urlFor =(source)=>builder.image(source)