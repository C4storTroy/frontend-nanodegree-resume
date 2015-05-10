var skill = ["Java","Linux", "Software Developer", "Python"];

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
    "jobs": [
      {
        "title" : "Software Developer",
        "employer" : "Catalyst IT ltd",
        "yearsWorked" : 1,
        "city" : "Wellington"
      },
      {
        "title" : "Software Developer",
        "employer" : "CITS Amazonas",
        "yearsWorked" : 1,
        "city" : "Manaus"
      },
      {
        "title" : "Software Developer",
        "employer" : "CERTI Amazonia",
        "yearsWorked" : 4,
        "city" : "Manaus"
      }
    ]
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
/*$("#header").append(HTMLskillsStart);
var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#header").append(formattedSkill);
var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#header").append(formattedSkill);
var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#header").append(formattedSkill);
var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
$("#header").append(formattedSkill);*/
for (info in bio.skills){
  var formattedSkill = HTMLskills.replace("%data%", bio.skills[info]);
  $("#header").append(formattedSkill);
}
};

for (info in work.jobs){
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[info].employer);
  var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[info].title);
  var formattedEmployerTitle = formattedEmployer + formattedTitle;

  $(".work-entry:last").append(formattedEmployerTitle);

}
