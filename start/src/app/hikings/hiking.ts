export class Hiking {
    title: string;
    address: string;
    description: string;
    duration: number;
    distance: number;

    constructor(title: string, address: string, description: string, duration: number, distance: number){
        this.title = title;
        this.address = address;
        this.description = description;
        this.duration = duration;
        this.distance = distance;
    }
}
