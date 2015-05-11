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
        "city" : "Wellington",
        "description" : "Java Team",
        "date" : "2015 - Future"
      },
      {
        "title" : "Software Developer",
        "employer" : "CITS Amazonas",
        "yearsWorked" : 1,
        "city" : "Manaus",
        "description" : "Development of Research and Development Projects. My work was primarily developer-focused using the following languages, tools, and libraries: Java, C++,  Eclipse IDE, JNI, even as tests cases and creation of start-ups scripts for Microsoft Windows and Linux. For the development we used SCRUM / Kanban methodology. Developing and maintenance of Microsoft Windows 8 and Linux Drivers and API's for Automated Teller Machine (ATM); Analysis of features of the devices built in the ATM.",
        "date" : "2013 - 2014"
      },
      {
        "title" : "Software Developer",
        "employer" : "CERTI Amazonia",
        "yearsWorked" : 4,
        "city" : "Manaus",
        "description" : "Development of Research and Development Projects, systems analysis, requirements analysis Software development projects. Software Development: using C and Java; Participate on IT project and be involved in the design phase of any new IT software development projects; Implement unit tests.  For the development we used SCRUM / Kanban methodology",
        "date" : "2005 - 2009"
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

var projects = {
 "projects" : [
    {
      "title" : "Educational Game",
      "company" : "ICA",
      "date" : 2007,
      "url" : "www.certiamazonia.org.br",
      "description" : "Development of an Educational game using language C and library for games Allegro.",
      "images" : "images/antibiosis.png"
    },
    {
      "title" : "Software Test",
      "company" : "Fucapi",
      "date" : 2010,
      "url" : "www.fucapi.com",
      "description" : "Development of a Software Test for Team test.",
      "images" : "images/atm.jpg"
    },
    {
      "title" : "New Drivers for ATM",
      "company" : "CITS",
      "date" : 2013,
      "url" : "certiamazonia.org.br",
      "description" : "Development of a shell script to install a test environment and all resources necessary to execute tests in ATMs.",
      "images" : "images/lucio.png"
    }

  ]
}


//  var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
//  $("#skills").append(formattedSkill);


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

function displayWork(){
  for (info in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[info].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[info].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[info].date);
    $(".work-entry:last").append(formattedDates);

    var formattedDescriptions = HTMLworkDescription.replace("%data%", work.jobs[info].description);
    $(".work-entry:last").append(formattedDescriptions);

  }
  }

  displayWork();

    $(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
  });



function inName(oldName) {
    var finalName = oldName;
    // Your code goes here!
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");

    return finalName;
}

$("#main").append(internationalizeButton);

projects.display = function(){
  $("#projects").append(HTMLprojectStart);

  for (project in projects.projects){
    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedProjectTitle);

    var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projects[project].date);
    $(".project-entry:last").append(formattedProjectDate);

    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedProjectDescription);

    if(projects.projects[project].images.length > 0){
      for (image in projects.projects[project].images){
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}


projects.display();

$("#mapdiv").append(googleMap);
