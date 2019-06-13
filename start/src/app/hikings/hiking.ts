export class Hiking {
    title: string;
    address: string;
    description: string;
    duration: number;
    distance: number;
    note: number;
    image: string;

    constructor(title: string,
                address: string,
                description: string,
                duration: number,
                distance: number,
                note: number,
                image: string) {
        this.title = title;
        this.address = address;
        this.description = description;
        this.duration = duration;
        this.distance = distance;
        this.note = note;
        this.image = image;
    }
}
