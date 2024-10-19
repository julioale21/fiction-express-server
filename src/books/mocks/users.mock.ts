import { User } from 'src/auth/entities/user.entity';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Axel',
    surname: 'Lidenbrock',
    dni: 89556332,
    email: 'axel@hotmail.com',
    password: '12345678',
    isActive: true,
    roles: ['admin'],
  },
  {
    id: '2',
    name: 'Perez',
    surname: 'Luis',
    dni: 22332325,
    email: 'luisperez@gmail.com',
    password: '22335566',
    isActive: true,
    roles: ['user'],
  },
  {
    id: '3',
    name: 'Laura',
    surname: 'Rodriguez',
    dni: 14225223,
    email: 'laurarodriguez@gmail.com',
    password: '88996655',
    isActive: true,
    roles: ['user'],
  },
  {
    id: '4',
    name: 'Julio',
    surname: 'Romero',
    dni: 12345678,
    email: 'julio@gmail.com',
    password: '12345678',
    isActive: true,
    roles: ['user'],
  },
];
