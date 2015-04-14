/*
Instructor Notes

work contains an array of jobs. Each job object in jobs should contain an employer, title, location, dates worked and description.

projects contains an array of projects. Each project object in projects should contain a title, dates worked, description, and an images array with URL strings for project images.

bio contains a name, role, welcomeMessage, contacts object and skills array. The contacts object should contain (but doesn't have to) a mobile number, email address, github username, twitter handle and location.

education contains an array of schools. Each school object in schools contains a name, location, degree, majors array, dates attended and a url for the school's website. education also contains an onlineCourses array. Each onlineCourse object in onlineCourses should contain a title, school, dates attended and a url for the course.
*/
/*aprendendo*/
/*$("#main").append("Joao Lucio")
var awesomeThoughts="I am Lucio and I am AWESOME";
console.log(awesomeThoughts);
var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
$("#main").append(funThoughts);
console.log(funThoughts);*/

/*aprendendo*/
var name = "Joao Lucio";
var role = "Software Developer"
var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//var formattedRole="Software Developer";
var skill = ["Java","Linux"];
var testeBio = {
  "name" : "Lucio",
  "age" : 39,
  "role" : "Software Developer",
  "contact" : {
    "email" : "luciomoraes@gmail.com",
    "mobile" : "02108215335",
    "github" : "C4storTroy",
    "location" : "Wellington, New Zealand"
  },
  "welMessage" : "Welcome",
  "Skills" : skill,
  "pic" : "./images/lucio.png"
};

$("#main").append(testeBio.name);
$("#main").append(testeBio.age);
//$("#main").append(testeBio.role);
$("#main").append(testeBio.pic);

var workObj = {
  "position" : "Software Developer",
  "company" : "Catalyst IT ltd",
  "yearsWorked" : 1,
};
workObj.city = "Wellington";

var eduObj = {
  "yearsSchool" : 7,
};
eduObj["name"] = "UEA";

$("#main").append(workObj["position"]);
$("#main").append(eduObj.name);

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
var weirdObject = {
    "property": "Time for an astronomy lesson!",
    "property1": "Cameron's minor in college was astronomy",
    "property-2": "The 4 Galilean largest moons of Jupiter are:",
    "property 3": "Io, Ganymede, Callisto, Europa",
    "property$": "Saturn's moon Enceladus has liquid water ocean under its icy surface",
    " property": "The Sun contains 99.87% of the mass of the entire solar system",
    "property()": "There are 5 dwarf planets in our solar system:",
    "property[]": "Pluto, Ceres, Eris, Haumea, Makemake",
    "8property": "Mars has two tiny moons: Phobos and Deimos"
};
console.log();
