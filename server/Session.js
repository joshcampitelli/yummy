class Session {

    constructor(host, searchParameters) {
        this.users = [host];
        this.restaurants = [];
        this.rightSwipes = new Map();
        this.apiSearchParameters = searchParameters;

    }

    addUser(user){
        this.users.push(user);
    }

    getUsers(){
        return this.users;
    }

    addRestaurants(restaurants){
        this.restaurants.push(restaurants);
    }

    swipeAndCheckMatch(restaurantId) {

        if (!this.rightSwipes.has(restaurantId)) {
            this.rightSwipes.set(restaurantId, 1);
        }
        else {
            this.rightSwipes.set(restaurantId, this.rightSwipes.get(restaurantId) + 1);
        }

        if(this.rightSwipes.get(restaurantId) >= this.users.length){
            return true;
        }

        return false;
    }

    getSearchParameters(){
        return this.apiSearchParameters;
    }

}