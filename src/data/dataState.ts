export const dataState: DataStateType = {
    pages:
    [
        {
            heading: 'Цикл While',
            about: 'Цикл While имеет следующий синтаксис: ',
        },
        {
            heading: 'Цикл For',
            about: 'Цикл For имеет следующий синтаксис: ',
        },
        {
            heading: 'Конструкция "switch" ',
            about: 'Конструкция "switch" заменяет собой сразу несколько if. ',
        },
    ]
}

export type DataStateType = {
    pages: PagesType[]
}

export type PagesType = {
    heading: string,
    about: string,
}