
var names = ["Tanish", "Valentin", "Alice", "Bob", "Einstein", "Gauss", "Euler", "Newton", "Fibonacci", "Leibniz", "Socrates", "Plato", "Aristotle", "Euclid", "Thales", "Batman", "Superman", "Wolverine", "Ironman", "Deadpool", "Naruto", "Goku", "Vegeta", "Luffy", "Zoro", "Gandalf", "Aragorn", "Legolas", "Frodo", "Thorin", "Dobby", "Hermione", "Voldemort", "Thanos", "Loki", "Thor", "Spock", "Kirk", "Yoda", "Chewbacca", "Han", "Leia", "Gollum", "Elrond", "Galadriel", "Bilbo", "Smaug", "Megatron", "Optimus", "Sherlock", "Watson", "Dracula", "Frankenstein", "Medusa", "Hercules", "Zeus", "Apollo", "Hades", "Achilles", "Julius", "Caesar", "Cleopatra", "Napoleon", "Lincoln", "Washington", "Tesla", "Edison", "Curie", "DaVinci", "Beethoven", "Mozart", "Picasso", "VanGogh", "Snoopy", "Garfield", "Goofy", "Mickey", "Donald", "Stitch", "Shrek", "Hulk", "Banner", "Drax", "Groot", "Rocket", "Homer", "Bart", "Marge", "Morty", "Rick", "Buzz", "Woody", "Pikachu", "Mewtwo", "Mario", "Luigi", "Yoshi", "Toad", "Wario", "Waluigi", "SpongeBob", "Patrick", "Squidward", "Plankton", "Scooby", "Shaggy", "Snorlax"];
var adjs = ["quick", "slow", "happy", "sad", "bright", "dark", "angry", "calm", "sharp", "dull", "clever", "foolish", "lazy", "energetic", "hungry", "thirsty", "round", "flat", "complex", "linear", "parallel", "perpendicular", "orthogonal", "tangential", "convex", "concave", "derivative", "integral", "rational", "irrational", "prime", "infinite", "finite", "fuzzy", "smooth", "chaotic", "discrete", "continuous", "approximate", "exact", "dense", "sparse", "hilarious", "bizarre", "quirky", "wacky", "loopy", "wonky", "silly", "absurd", "grumpy", "clumsy", "goofy", "weird", "awkward", "spicy", "salty", "sweet", "bitter", "crispy", "soggy", "fluffy", "squishy", "sticky", "glossy", "matte", "transparent", "opaque", "shiny", "rusty", "glittery", "sparkly", "greasy", "slimy", "frizzy", "hairy", "bald", "squeaky", "creaky", "boisterous", "noisy", "silent", "mute", "verbose", "hyperbolic", "elliptical", "parabolic", "quadratic", "exponential", "logarithmic", "nonlinear", "analytic", "topological", "fractal", "cubical", "angular", "binary", "digital", "analog", "modular", "singular", "plucky", "quirky"];
var lands = ["giants", "dragons", "magic", "mystery", "wonder", "dreams", "fantasy", "heroes", "villains", "legends", "hope", "despair", "ice", "fire", "snow", "sand", "wind", "storms", "sunshine", "rain", "eternity", "shadows", "light", "darkness", "gold", "silver", "crystals", "emeralds", "rubies", "sapphires", "diamonds", "monsters", "wizards", "knights", "kings", "queens", "warriors", "adventure", "chaos", "order", "serenity", "harmony", "confusion", "peace", "war", "plenty", "scarcity", "opportunity", "secrets", "whispers", "silence", "noise", "mirth", "laughter", "sorrow", "tears", "joy", "dreamers", "wanderers", "explorers", "fools", "genius", "madness", "love", "hate", "power", "weakness", "fury", "tranquility", "mirth", "enchantment", "illusion", "nightmares", "spirits", "ghosts", "the dead", "rebirth", "dawn", "twilight", "midnight", "eternity", "mystics", "ancestors", "fairies", "ogres", "trolls", "elves", "dwarves", "goblins", "creatures", "beasts", "machines", "robots", "technology", "invention", "myth", "sacrifice", "fortune", "destiny", "rebels", "outlaws", "freedom", "glory"];
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
        land[i].textContent = pickRandom(lands);
    }

    const act = document.getElementsByClassName('gen-act')
    for (let i = 0; i < act.length; i++) {
        act[i].textContent = pickRandom(acts);
    }

};