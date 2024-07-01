
export const initialState = [] as UserType[]

export const UsersReducer = (state: UserType[] = initialState, action: ActionType): UserType[] => {
    switch (action.type) {
        case 'FETCH_USERS':{
            return [
                ...state,
                ...action.users
            ]
        }
        default: return state
    }
}

export type ActionType = ReturnType<typeof fetchUsersAC>

export const fetchUsersAC = (users: UserType[]) => {
    return {
        type: "FETCH_USERS",
        users
    } as const
}

export type PhotosType = {
  small: string;
  large: string;
}
export type UserType = {
  name: string;
  id: number;
  photos: PhotosType;
  status: string;
  followed: boolean;
}