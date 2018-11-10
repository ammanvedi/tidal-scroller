//@flow

export type ItemModel = {
    id: string,
    title: string,
    imageUrl: string
}

export type ItemModelList = Array<$Subtype<ItemModel>>;

export type ItemComponentProps = {
    model: $Subtype<ItemModel>,
    setRef: ( item: HTMLElement | null ) => void
}

export type GenericObject = {};

export type TransFormFunction = ( listing: * ) => ItemModelList;

export type ArtistModel = {
    id: string,
    name: string
}

export type SongModel = {
    id: string,
    title: string,
    artists: Array<ArtistModel>,
    url: string
}

export type AlbumModel = ItemModel & {
    lastUpdated: string,
    songs: Array<SongModel>,
    artists: Array<ArtistModel>,
    url: string
}

export type AlbumList = Array<AlbumModel>;
