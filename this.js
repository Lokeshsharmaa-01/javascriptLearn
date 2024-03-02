const user = {
    username : "Lokesh sharma",
    price: 999,
    welcome: function (){
        console.log(`${this.username} welcome to the world of programming with best wishes`);
        console.log(this);
    }

}


user.welcome();

user.username = "Raja bhaiya with op stats"

user.welcome();