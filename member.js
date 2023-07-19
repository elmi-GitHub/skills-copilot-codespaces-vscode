function skillsMember(){
    return{
        restrict:'E',
        templateUrl:'modules/skills/views/member.html',
        controller:'SkillsMemberCOntroller',
        controllerAs:'vm',
        bindToController:true,
        scope:{
            member:'='
        }
    }
}