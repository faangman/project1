
const initialState = {
    userId: 0,
    lookingForAJob: false,
    lookingForAJobDescription: "",
    fullName: "",
    contacts: {
        github: "",
        vk: "",
        facebook: "",
        instagram: "",
        twitter: "",
        website: "",
        youtube: "",
        mainLink: "",
    },
    photos: {
        small: "",
        large: "",
    }
} as CardType

export const CardReducer = (state: CardType = initialState, action: ActionType) => {
    switch (action.type) {
        case "FETCH_CARD":{
            return {
                ...state,
                ...action.card
            }
        }
        default: return state
    }
}

export type ActionType = ReturnType<typeof FetchCardAC>

export const FetchCardAC = (card: CardType) => {
    return {
        type: "FETCH_CARD",
        card
    } as const
}

export type CardType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small: string
        large: string
    }
}


