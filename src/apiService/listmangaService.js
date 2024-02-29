import request from "../utils/request"

export const listManga = async () => {
    try {
        const res = await request.get('manga', {
          params: {
            'order[latestUploadedChapter]': 'desc',
            limit: 12,
            offset: 0
          }
        })
        
        const newListManga = Promise.all(res.data.data.map(async (manga) => {
          try {
            const timeUpdate = new Date(manga.attributes.updatedAt)
            const timeNow = new Date()
            const Difference_In_Time = timeNow.getTime() - timeUpdate.getTime()
            const diffResult = Math.round(Difference_In_Time / (1000 * 3600 * 24))

            const chapterId = await request.get(`manga/${manga.id}/feed`, {
                params:{
                    limit: 500,
                    offset: 200
                }
            })
            const quantityChapter = chapterId.data.data.filter(i => i.attributes.translatedLanguage === 'en').length

            const coverArtId = manga.relationships.find((relation) => relation.type === 'cover_art').id;
            const coverResponse = await request.get(`cover/${coverArtId}`);
            const coverFileName = coverResponse.data.data.attributes.fileName;
            const coverUrl = `https://uploads.mangadex.org/covers/${manga.id}/${coverFileName}`;
            // console.log(coverUrl);
            if(diffResult > 30) {
              return {
                id: manga.id,
                title: manga.attributes.title.en,
                description: manga.attributes.description.en,
                updatedAt: Math.floor(diffResult / 30) + " month ago",
                coverArt: coverUrl,
                quantityChapter: quantityChapter
              }
            }else if(diffResult < 1){
              return {
                id: manga.id,
                title: manga.attributes.title.en,
                description: manga.attributes.description.en,
                updatedAt: "1 day ago",
                coverArt: coverUrl,
                quantityChapter: quantityChapter
              }
            }
            return {
              id: manga.id,
              title: manga.attributes.title.en,
              description: manga.attributes.description.en,
              updatedAt: diffResult + " day ago",
              coverArt: coverUrl,
              quantityChapter: quantityChapter
            }
          } catch (error) {
            console.log(error);
          }
        }))

        return newListManga
      }catch (err){
        console.log(err);
      }
}