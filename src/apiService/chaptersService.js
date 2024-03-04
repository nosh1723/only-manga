import request from '../utils/request';

export const chaptersService = async (mangaId) => {
    try {
        const getChapters = await request.get(`manga/${mangaId}/feed`, {
            params: {
                limit: 400,
                offset: 0,
                translatedLanguage: ['en'],
                'order[volume]': 'desc',
                'order[chapter]': 'desc'  
            }
        })
        return getChapters.data.data
    } catch (error) {
        console.log(error);
    }
};
export const dataManga = async (id) => {
    const mangaId = await request.get(`manga/${id}`, {
        params: {
            'includes[]':['artist', 'author', 'cover_art']
        }
    })
    // get author
    const authorId = mangaId.data.data.relationships.find((relation) => relation.type === 'author').id
    const authorName = mangaId.data.data.relationships.find((relation) => relation.type === 'author').attributes.name
    // get artist
    const artistName = mangaId.data.data.relationships.find((relation) => relation.type === 'artist').attributes.name
    // get cover art
    const coverFileName = mangaId.data.data.relationships.find((relation) => relation.type === 'cover_art').attributes.fileName
    const coverUrl = `https://uploads.mangadex.org/covers/${id}/${coverFileName}`;
    // get same author manga
    const mangaSameAuthor = await request.get('manga', {
        params: {
          limit: 6,
          offset: 0,
          'authorOrArtist':authorId,
          'includes[]':['artist', 'author', 'cover_art']
        }
      })
    
    return {
        title: mangaId.data.data.attributes.title.en,
        description: mangaId.data.data.attributes.description.en,
        tags: mangaId.data.data.attributes.tags.map(tag => tag.attributes.name.en),    
        authorName,
        artistName,
        coverUrl,
        mangaSameAuthor: mangaSameAuthor.data.data
    }
}

export const lastChapterSameAuthor = async (id) => {
    // const mangaChapters = await request.get(`manga/${id}/aggregate`);
    // const latestVolumes = Object.values(mangaChapters.data.volumes);
    // let lastChapters
    // if(latestVolumes.length)
    //     lastChapters = Object.keys(latestVolumes[latestVolumes.length - 1].chapters);
    // return lastChapters ? lastChapters[lastChapters.length - 1] : 'No Chapters'
    const getChapters = await request.get(`manga/${id}/feed`, {
        params: {
            limit: 400,
            offset: 0,
            translatedLanguage: ['en'],
            'order[volume]': 'desc',
            'order[chapter]': 'desc'  
        }
    })
    return getChapters.data.data[0] ? getChapters.data.data[0].attributes.chapter : undefined
}