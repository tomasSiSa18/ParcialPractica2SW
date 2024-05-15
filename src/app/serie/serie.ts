export class Serie {

    id: number;
    name: String;
    channel: String;
    seasons: number;
    description: String;
    webpage: String;
    poster: String;

    constructor(idN: number, nameN: String, channelN: String, seasonsN: number, descriptionN: String, webpageN: String, posterN: String) {

        this.id = idN;
        this.name = nameN;
        this.channel = channelN;
        this.seasons = seasonsN;
        this.description = descriptionN;
        this.webpage = webpageN;
        this.poster = posterN;

    }


}