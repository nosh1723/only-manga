import request from "../utils/request";

export const listmanga = async (title, limit, mangaResult) => {
  try {
    //get manga list by lates uploaded chapter
    let res;
    if (mangaResult) {
      res = [...mangaResult];
    } else {
      res = title
        ? (
            await request.get("manga", {
              params: {
                title,
                limit,
                offset: 0,
              },
            })
          ).data.data
        : (
            await request.get("manga", {
              params: {
                "order[latestUploadedChapter]": "desc",
                limit,
                offset: 0,
              },
            })
          ).data.data;
    }
    const newListManga = Promise.all(
      res.map(async (manga) => {
        try {
          //get time updated
          const timeUpdate = new Date(manga.attributes.updatedAt);
          const timeNow = new Date();
          const Difference_In_Time = timeNow.getTime() - timeUpdate.getTime();
          const diffResult = Math.round(
            Difference_In_Time / (1000 * 3600 * 24)
          );
          let updatedAt;
          if (diffResult > 30)
            updatedAt = Math.floor(diffResult / 30) + " month ago";
          else if (diffResult < 1) updatedAt = "1 day ago";
          else updatedAt = diffResult + " day ago";

          //get last chapter
          const getChapters = await request.get(`manga/${manga.id}/feed`, {
            params: {
              limit: 400,
              offset: 0,
              translatedLanguage: ["en"],
              "order[volume]": "desc",
              "order[chapter]": "desc",
            },
          });
          const lastChapter = getChapters.data.data[0]
            ? getChapters.data.data[0].attributes.chapter
            : undefined;

          //get cover art link
          const coverArtId = manga.relationships.find(
            (relation) => relation.type === "cover_art"
          ).id;
          const coverResponse = await request.get(`cover/${coverArtId}`);
          const coverFileName = coverResponse.data.data.attributes.fileName;
          const coverUrl = `https://uploads.mangadex.org/covers/${manga.id}/${coverFileName}`;

          //get tag name
          const tag = manga.attributes.tags;

          return {
            id: manga.id,
            title: manga.attributes.title.en,
            description: manga.attributes.description.en,
            updatedAt,
            coverArt: coverUrl,
            quantityChapter: lastChapter,
            tag,
          };
        } catch (error) {
          console.log(error);
        }
      })
    );

    return newListManga;
  } catch (err) {
    console.log(err);
  }
};

export const mangaTag = async () => {
  try {
    const result = (await request.get("manga/tag")).data.data.filter(
      (tag) => tag.attributes.group === "genre"
    );
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const filterByTag = async (includedTagNames) => {
  try {
    const tags = await mangaTag();
    const includedTagIDs = tags
      .filter((tag) => includedTagNames.includes(tag.attributes.name.en))
      .map((tag) => tag.id);
    const mangaResult = await request.get("manga", {
      params: {
        includedTags: includedTagIDs,
        limit: 15,
      },
    });
    return mangaResult.data.data;
  } catch (error) {
    console.log(error);
  }
};
