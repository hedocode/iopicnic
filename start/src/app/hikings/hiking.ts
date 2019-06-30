export class Hiking {
    id: number;
    title: string;
    address: string;
    description: string;
    duration: number;
    distance: number;
    note: number;
    image: string;
    latitude: number;
    longitude: number;
    steps: object;

    constructor(id: number,
                title: string,
                address: string,
                description: string,
                duration: number,
                distance: number,
                note: number,
                image: string,
                latitude: number,
                longitude: number,
                steps: object) {
        this.title = title;
        this.address = address;
        this.description = description;
        this.duration = duration;
        this.distance = distance;
        this.note = note;
        this.image = image;
        this.latitude = latitude;
        this.longitude = longitude;
        this.steps = steps;
    }
}
