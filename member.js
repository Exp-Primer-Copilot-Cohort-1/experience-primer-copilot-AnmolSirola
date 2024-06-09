function skillMember(){
    return{
        name: 'skill',
        member: 'skillMember',
        skill: 'judo',
        level: 1,
        show: function(){
            console.log(this.name + ' ' + this.skill + ' ' + this.level);
        }
    }

}