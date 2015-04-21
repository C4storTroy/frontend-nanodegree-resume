var skill = ["Java","Linux"];

var bio = {
  "name" : "Lucio Moraes",
  "age" : 39,
  "role" : "Software Developer",
  "contact" : {
    "email" : "luciomoraes@gmail.com",
    "mobile" : "02108215335",
    "github" : "C4storTroy",
    "location" : "Wellington, New Zealand"
  },
  "welMessage" : "Welcome",
  "skills" : skill,
  "pic" : "images/lucio.png"
}

var work = {
  "position" : "Software Developer",
  "company" : "Catalyst IT ltd",
  "yearsWorked" : 1,
  "city" : "Wellington"
}

var education = {
  "schools":[
    {
      "name" : "UEA",
      "city" : "Manaus",
      "degree" : "BA",
      "major" : "Computer Engineering"
    },
    {
      "name" : "Fucapi",
      "city" : "Manaus",
      "degree" : "Specialist",
      "major" : ["Software", "Engineering"]
    }
  ],
 "onlineCourses" : [
   {
     "title" : "Front Web Developer",
     "school" : "Udacity",
     "date" : 2014,
     "url" : "www.udacity.com"
   }
 ]
}

var project = {
 "projects" : [
    {
      "title" : "Educational Game",
      "company" : "ICA",
      "date" : 2007,
      "url" : "www.certiamazonia.org.br"
    },
    {
      "title" : "Software Test",
      "school" : "Fucapi",
      "date" : 2010,
      "url" : "www.fucapi.com"
    }
  ]
}


  var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);


var formattedName = HTMLheaderName.replace( "%data%" , bio.name);
var formattedRole = HTMLheaderRole.replace( "%data%" , bio.role);

var formattedPic = HTMLbioPic.replace( "%data%" , bio.pic);

$("#header").append(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedPic);


//If checks if skills length is bigger than 0
if (bio.skills.length > 0) {
$("#header").append(HTMLskillsStart);
var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#header").append(formattedSkill);
var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#header").append(formattedSkill);
};
