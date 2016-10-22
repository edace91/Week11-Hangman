/*should control whether or not 
a letter appears as a "_" or 
as itself on-screen.*/
function letter(let) {
    this.character = let; 
    this.show = false;

    this.letterDisplay = function(){
    	return !(this.show) ? "_" : this.character;

    }
}
// this is your constructor
module.exports = letter;

