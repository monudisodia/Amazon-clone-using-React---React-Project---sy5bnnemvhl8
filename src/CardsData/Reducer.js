export const initialData = {
    authInfo:{},
    address:{},
    cartList: [],
    productList: [
        {
            title: 'HP Victus Gaming Latest AMD Ryzen 5 5600H Processor 16.1 inch(40.9 cm) FHD Gaming Laptop',
            price: '80000',
            rating: 4,
            imgURL: 'https://m.media-amazon.com/images/I/41iGy9DjT-L._AC_SR400,600_.jpg'

        },
        {
            title: 'Apple iPhone 14 128GB Purple',
            price: '70000',
            rating: 3,
            imgURL: 'https://images-eu.ssl-images-amazon.com/images/I/31gmva12KHL._AC_SR400,600_.jpg'

        },
        {
            title: 'HP Victus Gaming Latest AMD Ryzen 5 5600H Processor 16.1 inch(40.9 cm) FHD Gaming Laptop',
            price: '80000',
            rating: 4,
            imgURL: 'https://m.media-amazon.com/images/I/41iGy9DjT-L._AC_SR400,600_.jpg'

        },
        {
            title: 'Apple iPhone 14 128GB Purple',
            price: '70000',
            rating: 3,
            imgURL: 'https://images-eu.ssl-images-amazon.com/images/I/31gmva12KHL._AC_SR400,600_.jpg'

        },
        {
            title: 'Apple iPhone 14 128GB Purple',
            price: '70000',
            rating: 4,
            imgURL: 'https://images-eu.ssl-images-amazon.com/images/I/31gmva12KHL._AC_SR400,600_.jpg'

        },
        {
            title: 'HP Victus Gaming Latest AMD Ryzen 5 5600H Processor 16.1 inch(40.9 cm) FHD Gaming Laptop',
            price: '80000',
            rating: 4,
            imgURL: 'https://m.media-amazon.com/images/I/41iGy9DjT-L._AC_SR400,600_.jpg'

        },
        {
            title: 'Apple iPhone 14 128GB Purple',
            price: '70000',
            rating: 4,
            imgURL: 'https://images-eu.ssl-images-amazon.com/images/I/31gmva12KHL._AC_SR400,600_.jpg'

        },
        {
            title: 'HP Victus Gaming Latest AMD Ryzen 5 5600H Processor 16.1 inch(40.9 cm) FHD Gaming Laptop',
            price: '80000',
            rating: 4,
            imgURL: 'https://m.media-amazon.com/images/I/41iGy9DjT-L._AC_SR400,600_.jpg'

        },
        {
            title: 'Apple iPhone 14 128GB Purple',
            price: '70000',
            rating: 3,
            imgURL: 'https://images-eu.ssl-images-amazon.com/images/I/31gmva12KHL._AC_SR400,600_.jpg'

        },
        {
            title: 'HP Victus Gaming Latest AMD Ryzen 5 5600H Processor 16.1 inch(40.9 cm) FHD Gaming Laptop',
            price: '80000',
            rating: 4,
            imgURL: 'https://m.media-amazon.com/images/I/41iGy9DjT-L._AC_SR400,600_.jpg'

        },
        {
            title: 'Apple iPhone 14 128GB Purple',
            price: '70000',
            rating: 4,
            imgURL: 'https://images-eu.ssl-images-amazon.com/images/I/31gmva12KHL._AC_SR400,600_.jpg'

        },
        {
            title: 'HP Victus Gaming Latest AMD Ryzen 5 5600H Processor 16.1 inch(40.9 cm) FHD Gaming Laptop',
            price: '80000',
            rating: 4,
            imgURL: 'https://m.media-amazon.com/images/I/41iGy9DjT-L._AC_SR400,600_.jpg'

        },
    ]
}

export const reducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartList: [...state.cartList, action.payload]
            }

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartList: state.cartList.filter(item=>item.id!==action.payload)
            }

        case 'SIGN_IN':
            return {
                ...state,
                authInfo:action.payload
            }    

        case 'SET_ADDRESS':
            return{
                ...state,
                address:{...action.item}
            }    
        default: return state;
    }
}

