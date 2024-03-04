import request from "../utils/request"

export const listManga = async (id) => {
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
            let updatedAt
            if(diffResult > 30) updatedAt = Math.floor(diffResult / 30) + " month ago"
            else if(diffResult < 1) updatedAt = "1 day ago"
            else updatedAt = diffResult + " day ago"

            const mangaChapters = await request.get(`manga/${manga.id}/aggregate`);
            const latestVolumes = Object.values(mangaChapters.data.volumes);
            const lastChapters = Object.keys(latestVolumes[latestVolumes.length - 1].chapters);
            const lastChapter = lastChapters[lastChapters.length - 1];
          //   const getChapters = await request.get(`manga/${manga.id}/feed`, {
          //     params: {
          //         limit: 400,
          //         offset: 0,
          //         translatedLanguage: ['en'],
          //         'order[volume]': 'desc',
          //         'order[chapter]': 'desc'
          //     }
          // })
          //   const lastChapters = Object.values(getChapters.data.data)
          //   const lastChapter = lastChapters[0]

            const coverArtId = manga.relationships.find((relation) => relation.type === 'cover_art').id;
            const coverResponse = await request.get(`cover/${coverArtId}`);
            const coverFileName = coverResponse.data.data.attributes.fileName;
            const coverUrl = `https://uploads.mangadex.org/covers/${manga.id}/${coverFileName}`;
            // console.log(coverUrl);
            return {
              id: manga.id,
              title: manga.attributes.title.en,
              description: manga.attributes.description.en,
              updatedAt,
              coverArt: coverUrl,
              quantityChapter: lastChapter
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