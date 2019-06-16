import { Hiking } from './hiking';

export const HIKINGS: Hiking[] = [
    {
        id: 0,
        title: 'Puy de dôme',
        address: 'Puy de Dôme, 63870 Orcines',
        description : 'Petite balade tranquille sur la montagne éponyme du département',
        duration: 79,
        distance: 40,
        note: 3,
        image: '/assets/images/puy2dome.jpg',
    },
    {
        id: 1,
        title: 'Les Calanques de Marseille',
        address: 'Calanques de Marseille, 13009 Marseille',
        description : 'Balade rafraichissante avec une petite odeur d\'iode',
        duration: 44,
        distance: 23,
        note: 4,
        image: '/assets/images/CalanquesMarseille.jpg',
    },
];
