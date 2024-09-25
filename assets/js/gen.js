
var names = ["Tanish", "Valentin", "Alice", "Bob", "Einstein", "Gauss", "Euler", "Newton", "Fibonacci", "Leibniz", "Socrates", "Plato", "Aristotle", "Euclid", "Thales", "Batman", "Superman", "Wolverine", "Ironman", "Deadpool", "Naruto", "Goku", "Vegeta", "Luffy", "Zoro", "Gandalf", "Aragorn", "Legolas", "Frodo", "Thorin", "Dobby", "Hermione", "Voldemort", "Thanos", "Loki", "Thor", "Spock", "Kirk", "Yoda", "Chewbacca", "Han", "Leia", "Gollum", "Elrond", "Galadriel", "Bilbo", "Smaug", "Megatron", "Optimus", "Sherlock", "Watson", "Dracula", "Frankenstein", "Medusa", "Hercules", "Zeus", "Apollo", "Hades", "Achilles", "Julius", "Caesar", "Cleopatra", "Napoleon", "Lincoln", "Washington", "Tesla", "Edison", "Curie", "DaVinci", "Beethoven", "Mozart", "Picasso", "VanGogh", "Snoopy", "Garfield", "Goofy", "Mickey", "Donald", "Stitch", "Shrek", "Hulk", "Banner", "Drax", "Groot", "Rocket", "Homer", "Bart", "Marge", "Morty", "Rick", "Buzz", "Woody", "Pikachu", "Mewtwo", "Mario", "Luigi", "Yoshi", "Toad", "Wario", "Waluigi", "SpongeBob", "Patrick", "Squidward", "Plankton", "Scooby", "Shaggy", "Snorlax"];
var adjs = ["quick", "slow", "happy", "sad", "bright", "dark", "angry", "calm", "sharp", "dull", "clever", "foolish", "lazy", "energetic", "hungry", "thirsty", "round", "flat", "complex", "linear", "parallel", "perpendicular", "orthogonal", "tangential", "convex", "concave", "derivative", "integral", "rational", "irrational", "prime", "infinite", "finite", "fuzzy", "smooth", "chaotic", "discrete", "continuous", "approximate", "exact", "dense", "sparse", "hilarious", "bizarre", "quirky", "wacky", "loopy", "wonky", "silly", "absurd", "grumpy", "clumsy", "goofy", "weird", "awkward", "spicy", "salty", "sweet", "bitter", "crispy", "soggy", "fluffy", "squishy", "sticky", "glossy", "matte", "transparent", "opaque", "shiny", "rusty", "glittery", "sparkly", "greasy", "slimy", "frizzy", "hairy", "bald", "squeaky", "creaky", "boisterous", "noisy", "silent", "mute", "verbose", "hyperbolic", "elliptical", "parabolic", "quadratic", "exponential", "logarithmic", "nonlinear", "analytic", "topological", "fractal", "cubical", "angular", "binary", "digital", "analog", "modular", "singular", "plucky", "quirky"];
var places = ["On top of Mount Everest", "At the bottom of a random lake in Romania", "In the depths of the Bermuda Triangle", "Inside a giant piñata in Mexico", "In a treehouse on the Amazon River", "At the edge of the Grand Canyon", "In a bathtub full of jellybeans", "Under the Eiffel Tower", "In a snow globe of New York City", "On the surface of Mars", "In a bottomless pit in the Sahara Desert", "At the North Pole with Santa's elves", "In a chocolate factory in Switzerland", "At the peak of the Matterhorn", "Inside the Great Pyramid of Giza", "On the shores of Lake Titicaca", "In the middle of Times Square during a parade", "In a secret garden in Kyoto", "At the entrance of a dragon’s cave", "Under the Sydney Opera House", "On a deserted island in the Pacific", "In a floating city in the clouds", "At the bottom of a giant fish tank", "Inside a snowman in the Arctic", "On a bridge over the River Thames", "In a hot air balloon over Cappadocia", "At the peak of a volcano in Hawaii", "Inside a giant rubber duck", "In a sunflower field in Tuscany", "On a rollercoaster at Disneyland", "In a library filled with enchanted books", "At the edge of the world in Atlantis", "In a corn maze in Indiana", "Inside a giant cupcake", "On a merry-go-round in a deserted carnival", "In a secret laboratory in Area 51", "Underneath a rainbow", "In a bubble floating through space", "On the back of a giant turtle", "In a whimsical windmill in the Netherlands", "At the bottom of a cave in New Zealand", "On a pirate ship in the Caribbean", "Inside a lava lamp", "In a giant teacup in London", "On a spaceship orbiting Earth", "In a fishbowl in a trendy café", "At a street fair in Rio de Janeiro", "In a magical forest with unicorns", "On a rooftop garden in Tokyo", "In a cactus garden in Arizona", "Under a giant mushroom", "On a beach made of candy", "In a mystical castle in Scotland", "At the gates of Wonderland", "On a floating island in the sky", "In a painting at the Louvre", "At a llama farm in Peru", "In an underwater city", "On the Great Wall of China", "In a crystal cave in Mexico", "At the top of a giant cupcake", "In a hidden oasis in the desert", "In a kaleidoscope", "At a carnival in Venice", "On the back of a flying whale", "In a spaghetti forest", "At the center of a sunflower", "On a cloud above the city", "In a whimsical ice cream shop", "At the entrance of a fairy tale village", "In a treasure chest on a deserted island", "On a swing hanging from a tree in the forest", "In a park where the grass is blue", "At the top of a Ferris wheel", "In a house made of gingerbread", "On a bridge over a rainbow", "In a garden of talking flowers", "At a music festival on Mars", "Inside a giant snow globe", "On a beach where the sand is made of sugar", "In a house full of mirrors", "At the edge of a giant waterfall", "In a tunnel of love at a fair", "On a farm where animals can talk", "In a city where everything is upside down"];
var acts = ["rides a unicorn", "eats spaghetti with a broken fork", "juggles flamingos", "dances with a penguin", "chases their own shadow", "sings to a cactus", "paints a rainbow with ketchup", "hugs a tree in a tuxedo", "argues with a squirrel", "whispers secrets to a cloud", "rides a llama into the sunset", "swims in a pool of pudding", "eats a sandwich sideways", "teaches algebra to a goldfish", "plays chess with a goat", "moonwalks on a trampoline", "has tea with a dinosaur", "bakes cookies with a dragon", "walks backwards for an hour", "licks an ice cream cone upside down", "builds a sandcastle on the moon", "jumps rope with a snake", "fishes for stars in the sky", "drinks lemonade with a wizard", "reads a book to a snowman", "flies a kite on a treadmill", "wears socks on their hands", "balances a spoon on their nose", "has a staring contest with a mirror", "roller skates on a rainbow", "eats popcorn with chopsticks", "plays hopscotch with a kangaroo", "wears pajamas to a wedding", "teaches yoga to a sloth", "tames a wild shopping cart", "arm wrestles a robot", "shouts compliments at strangers", "sings opera in the shower", "fences with pool noodles", "plays the ukulele with oven mitts", "has a picnic with a panda", "juggles marshmallows in the wind", "writes a poem on a balloon", "builds a snowman out of pillows", "rides a bicycle"];


function pickRandom(list) {
    let randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}

// When the page loads
window.onload = function() {

	const playerA = pickRandom(names);
	const playerB = pickRandom(names);
    const p1 = document.getElementsByClassName('playerA')
    for (let i = 0; i < p1.length; i++) {
        p1[i].textContent = playerA;
    }

    const p2 = document.getElementsByClassName('playerB')
    for (let i = 0; i < p2.length; i++) {
        p2[i].textContent = playerB;
    }

    const adj = document.getElementsByClassName('gen-adj')
    for (let i = 0; i < adj.length; i++) {
        adj[i].textContent = pickRandom(adjs);
    }

    const land = document.getElementsByClassName('gen-land')
    for (let i = 0; i < land.length; i++) {
        land[i].textContent = pickRandom(places);
    }

    const act = document.getElementsByClassName('gen-act')
    for (let i = 0; i < act.length; i++) {
        act[i].textContent = pickRandom(acts);
    }

};