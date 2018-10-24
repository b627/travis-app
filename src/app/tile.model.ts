export interface Tile {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    linkDetail: string;
    content: Content;
}

export interface Content {
    date: string;
    name: string;
}
