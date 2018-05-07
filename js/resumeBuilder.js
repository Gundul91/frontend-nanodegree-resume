/*
This is empty on purpose! Your code to build the resume will go here.
 */

 $(document).ready(function() {
    let bio = {
        name: "Marco Gondolo",
        role: "Web Designer",
        contacts: {mobile: "3409721192", email: "marco.gondolo@libero.it", github: "Gundul91", twitter: "@gundul1991", location: "Centallo"},
        welcomeMessage: "Per il messaggio ci penso poi",
        skills: ["prima abilità", "seconda abilità"],
        biopic: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
        display: function() {
            $('#header').show();
            $('#topContacts').show();
        }
    };

    let work = {
        jobs: [{employer: "Sipal Maggioli", title: "Stagista", location: "Savigliano", dates: "2 settimane", description: "Creazione programma di merging in asp.NET", display: function() {}}, {employer: "Tipografia Gondolo snc", title: "Socio", location: "Centallo", dates: "2013-ora", description: "Stampa con macchinari tipografici, litografici e digitali, grafico", display: function() {}}],
        display: function() {
            $('#workExperience').show();
        }
    };

    let projects = {
        projects: [{title: "progetto1", dates: "ieri-oggi", description: "Un progetto bello bello che funziona bene e di aspetto piacevole", images: ["https://pagedesignweb.com/wp-content/uploads/2017/12/Site-uri.jpg", "http://www.iuvmtech.com/wp-content/uploads/2017/10/9672-1-4.jpg"]}],
        display: function() {
            $('#projects').show();
        }
    };

    let education = {
        schools: [{name: "scuoletta", location: "centallo", degree: "medie", majors: ["", ""], dates: "giovane-meno giovane", url: ""}, {name: "vallauri", location: "fossano", degree: "superiori", majors: ["programmazione", ""], dates: "meno giovane-grande", url: "http://www.vallauri.edu/"}],
        onlineCourses: [{title: "FEND nanodegree", school: "Udacity", dates: "novembre 2017-agosto 2018", url: "https://eu.udacity.com/"}],
        contacts: {mobile: "3409721192", email: "marco.gondolo@libero.it", github: "Gundul91", twitter: "@gundul1991", location: "Centallo"},
        display: function() {
            $('#education').show();
        }
    };

    // Bio

    HTMLheaderRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(HTMLheaderRole);
    HTMLheaderName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(HTMLheaderName);

    HTMLmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(HTMLmobile);
    HTMLemail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(HTMLemail);
    HTMLgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(HTMLgithub);
    HTMLtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(HTMLtwitter);
    HTMLlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(HTMLlocation);


    HTMLbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(HTMLbioPic);
    HTMLwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(HTMLwelcomeMsg);

    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(e) {
        let tmpHTMLskills = HTMLskills.replace("%data%", e);
        $("#skills").append(tmpHTMLskills);
    });

    bio.display();

    // Work Experience

    $("#workExperience").append(HTMLworkStart);
    work.jobs.forEach(function(e) {
        let tmpHTMLworkEmployer = HTMLworkEmployer.replace("%data%", e.employer);
        let tmpHTMLworkTitle = HTMLworkTitle.replace("%data%", e.title);
        $(".work-entry").append(tmpHTMLworkEmployer + tmpHTMLworkTitle);
        let tmpHTMLworkDates = HTMLworkDates.replace("%data%", e.dates);
        $(".work-entry").append(tmpHTMLworkDates);
        let tmpHTMLworkLocation = HTMLworkLocation.replace("%data%", e.location);
        $(".work-entry").append(tmpHTMLworkLocation);
        let tmpHTMLworkDescription = HTMLworkDescription.replace("%data%", e.description);
        $(".work-entry").append(tmpHTMLworkDescription);
    });

    work.display();

    // projects

    $("#projects").append(HTMLprojectStart);
    HTMLprojectTitle = HTMLprojectTitle.replace("%data%", projects.projects.title);
    $(".project-entry").append(HTMLprojectTitle);
    HTMLprojectDates = HTMLprojectDates.replace("%data%", projects.projects.dates);
    $(".project-entry").append(HTMLprojectDates);
    HTMLprojectDescription = HTMLprojectDescription.replace("%data%", projects.projects.description);
    $(".project-entry").append(HTMLprojectDescription);
    projects.projects[0].images.forEach(function (e) {
        let tmpHTMLprojectImage = HTMLprojectImage.replace("%data%", e);
        $(".project-entry").append(tmpHTMLprojectImage);
    });

    projects.display();

    // education

    $("#education").append(HTMLschoolStart);
    education.schools.forEach(function(e) {
        let tmpHTMLschoolName = HTMLschoolName.replace("%data%", e.name);
        let tmpHTMLschoolDegree = HTMLschoolDegree.replace("%data%", e.degree);
        $(".education-entry").append(tmpHTMLschoolName + tmpHTMLschoolDegree);
        let tmpHTMLschoolDates = HTMLschoolDates.replace("%data%", e.dates);
        $(".education-entry").append(tmpHTMLschoolDates);
        let tmpHTMLschoolLocation = HTMLschoolLocation.replace("%data%", e.location);
        $(".education-entry").append(tmpHTMLschoolLocation);
        e.majors.forEach(function(element) {
            if(element) {
                let tmpHTMLschoolMajor = HTMLschoolMajor.replace("%data%", element);
                $(".education-entry").append(tmpHTMLschoolMajor);
            }
        });
    });

    $(".education-entry").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(e) {
        let tmpHTMLonlineTitle = HTMLonlineTitle.replace("%data%", e.title);
        let tmpHTMLonlineSchool = HTMLonlineSchool.replace("%data%", e.school);
        $(".education-entry").append(tmpHTMLonlineTitle + tmpHTMLonlineSchool);
        let tmpHTMLonlineDates = HTMLonlineDates.replace("%data%", e.dates);
        $(".education-entry").append(tmpHTMLonlineDates);
        let tmpHTMLonlineURL = HTMLonlineURL.replace("%data%", e.url);
        $(".education-entry").append(tmpHTMLonlineURL);
    });

    education.display();

 });
