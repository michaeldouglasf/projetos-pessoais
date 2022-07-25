export const goToBack = (navigate) => {
    navigate(-1)
}

export const goToLogin = (navigate) => {
    navigate('/login')
}

export const goToSignUp = (navigate) => {
    navigate('/signup')
}

export const goToSignUpAdress = (navigate) => {
    navigate('/signup/adress')
}
export const goToFeed = (navigate) => {
    navigate('/feed')
}

export const goToRestaurant = (navigate) => {
    navigate('/feed/:restaurantId')
}
export const goToProfile = (navigate) => {
    navigate('/profile')
}

export const goToCart = (navigate) => {
    navigate('/cart')
}
