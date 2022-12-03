class Team {
    constructor() {
        this.members = [];
    }
    addMember(member) {
        this.members.push(member);
    }
    getAllMembers() {
        return this.members;
    }
}

module.exports = Team;