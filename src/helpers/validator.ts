export const emailValidator = (email: string) => {
    return email
        .toString()
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gui
        );
}

export const passwordValidator = (password: string): [boolean, string | null] => {
    const ru = /[а-яё]/gui

    if (ru.test(password)) {
        return [false, 'Пороль не должен содержать кириллицу']
    }
    if (password.length < 8) {
        return [false, 'Пороль не должен быть менее 8 символов']
    }
    return [true, null]
}