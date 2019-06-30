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
        latitude: 45.7720156,
        longitude: 2.9536957,
        steps: [['Puy de dôme', '45.7718391', '2.9625461'], ['Temple de mercure', '45.7718391', '2.9625461']]
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
        latitude: 43.2168559,
        longitude: 5.4309156,
        steps: [ ['Calanques de Sormiou', '43.2138503', '5.4265523'], ['Calanques de Sugiton', '43.2138503', '5.4265523']  ]
    },
];
