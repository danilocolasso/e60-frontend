export enum Weekday {
    sunday = 'sunday',
    monday = 'monday',
    tuesday = 'tuesday',
    wednesday = 'wednesday',
    thursday = 'thursday',
    friday = 'friday',
    saturday = 'saturday',
}

export const WeekdayLabels = {
    [Weekday.sunday]: 'Domingo',
    [Weekday.monday]: 'Segunda-feira',
    [Weekday.tuesday]: 'Terça-feira',
    [Weekday.wednesday]: 'Quarta-feira',
    [Weekday.thursday]: 'Quinta-feira',
    [Weekday.friday]: 'Sexta-feira',
    [Weekday.saturday]: 'Sábado',
} as const
