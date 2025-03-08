
export interface Location {
    id: number;
    name: string;
    lat: number;
    lng: number;
    type: 'own' | 'partner' | 'enabled';
    interconnect?: number;
    organizations?: number; // Companies having asn
    facilities?: number; // DC Infrastructure
    networks?: number; // Networks - Airtel, Jio,
    exchanges?: number; // IXP
}

export const locations: Location[] = [
    { id: 1, lat: 50.1109, lng: 8.6821, name: 'Frankfurt', type: 'own', organizations: 10, facilities:5, networks: 5, exchanges: 5 },
    { id: 2, lat: 41.3851, lng: 2.1734, name: 'Barcelona', type: 'partner',organizations: 10, facilities:5, networks: 5, exchanges: 5  },
    { id: 3, lat: 13.0827, lng: 80.2707, name: 'Chennai', type: 'partner' ,organizations: 10, facilities:5, networks: 5, exchanges: 5 },
    { id: 4, lat: 41.8781, lng: -87.6298, name: 'Chicago', type: 'partner', interconnect: 6 },
    { id: 5, lat: 55.6761, lng: 12.5683, name: 'Copenhagen', type: 'own' },
    { id: 6, lat: 32.7767, lng: -96.7970, name: 'Dallas', type: 'partner' ,organizations: 10, facilities:5, networks: 5, exchanges: 5 },
    { id: 7, lat: 28.6139, lng: 77.2090, name: 'Delhi', type: 'partner' ,organizations: 10, facilities:5, networks: 5, exchanges: 5 },
    { id: 8, lat: 51.2277, lng: 6.7735, name: 'Dusseldorf', type: 'own' },
    { id: 9, lat: 55.4763, lng: 8.4596, name: 'Esbjerg', type: 'partner' },
    { id: 10, lat: 50.1109, lng: 8.6821, name: 'Frankfurt', type: 'own' },
    { id: 11, lat: 53.5511, lng: 9.9937, name: 'Hamburg', type: 'own' },
    { id: 12, lat: 60.1699, lng: 24.9384, name: 'Helsinki', type: 'partner' },
    { id: 13, lat: 29.7604, lng: -95.3698, name: 'Houston', type: 'own', interconnect: 6 },
    { id: 14, lat: 17.3850, lng: 78.4867, name: 'Hyderabad', type: 'partner' },
    { id: 15, lat: 41.0082, lng: 28.9784, name: 'Istanbul', type: 'own' },
    { id: 16, lat: -6.2088, lng: 106.8456, name: 'Jakarta', type: 'own' },
    { id: 17, lat: 22.5726, lng: 88.3639, name: 'Kolkata', type: 'partner' },
    { id: 18, lat: 58.1599, lng: 8.0182, name: 'Kristiansand', type: 'enabled' },
    { id: 19, lat: 3.1390, lng: 101.6869, name: 'Kuala Lumpur', type: 'partner' },
    { id: 20, lat: 51.3397, lng: 12.3731, name: 'Leipzig', type: 'enabled' },
    { id: 21, lat: 38.7223, lng: -9.1393, name: 'Lisbon', type: 'partner', interconnect: 6 },
    { id: 22, lat: 40.4168, lng: -3.7038, name: 'Madrid', type: 'partner' },
    { id: 23, lat: 4.2105, lng: 101.9758, name: 'Malaysia', type: 'enabled' },
    { id: 24, lat: 43.2965, lng: 5.3698, name: 'Marseille', type: 'enabled' },
    { id: 25, lat: 19.4326, lng: -99.1332, name: 'Mexico', type: 'enabled', interconnect: 13 },
    { id: 26, lat: 19.0760, lng: 72.8777, name: 'Mumbai', type: 'enabled' },
    { id: 27, lat: 48.1351, lng: 11.5820, name: 'Munich', type: 'enabled' },
    { id: 28, lat: 40.7128, lng: -74.0060, name: 'New York', type: 'enabled', interconnect: 33 },
    { id: 29, lat: 59.3293, lng: 18.0686, name: 'Nordics', type: 'partner' },
    { id: 30, lat: 59.9139, lng: 10.7522, name: 'Oslo', type: 'partner' },
    { id: 31, lat: 38.1157, lng: 13.3615, name: 'Palermo', type: 'partner' },
    { id: 32, lat: 33.4484, lng: -112.0740, name: 'Phoenix', type: 'own', interconnect: 6 },
    { id: 33, lat: 37.5407, lng: -77.4360, name: 'Richmond', type: 'partner', interconnect: 6 },
    { id: 34, lat: -22.9068, lng: -43.1729, name: 'Rio de Janeiro', type: 'partner' },
    { id: 35, lat: -23.5505, lng: -46.6333, name: 'Sao Paulo', type: 'partner' }
]