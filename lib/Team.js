// 
class Team {
    constructor() {
        this.members = []; // an array of objects
    }
    addMember(member) {
        this.members.push(member); // add member at the end of the array
    }
    getAllMembers() {
        return this.members;
    }
    renderHTMLcards() {
        // initialize a empty string for adding team members cards
        let allCardsInTeam = ``;

        // for each member (object) in the members (array), call the member's own menthod (renderHTMLcard) to render HTML card,
        // append the card to the string "allTeamMemberCards"
        this.members.forEach(member => allCardsInTeam += member.renderHTMLcard());
        
        // add the member cards to the whole HTML document
        return allCardsInTeam;
    }
    
}

module.exports = Team;