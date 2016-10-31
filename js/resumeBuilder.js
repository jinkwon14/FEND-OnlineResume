var bio = {
    'name': 'Jin Kwon',
    'role': 'Future Web Developer',
    'contacts': {
        'mobile': '832-730-8771',
        'email': 'jinkwon0425@gmail.com',
        'github': 'kwonjh90',
        'location': 'Houston, TX'
    },
    'welcomeMessage': 'I am an engineer, future web developer, and a cat lover.',
    'skills': ['Ruby', 'Rails', 'HTML', 'Java Script', 'CSS' ,'Python'],
    'biopic': 'images/corgi.png',
    display: function() {
        var formattedName = HTMLheaderName.replace('%data%', bio.name);
        var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
        var formattedMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);
        var formattedBiopic = HTMLbioPic.replace('%data%', bio.biopic);

        $('#header').append(formattedName, formattedRole, formattedMsg, formattedBiopic);

        var formattedContacts = [];
        formattedContacts.push(HTMLmobile.replace('%data%', bio.contacts.mobile));
        formattedContacts.push(HTMLemail.replace('%data%', bio.contacts.email));
        formattedContacts.push(HTMLgithub.replace('%data%', bio.contacts.github));
        formattedContacts.push(HTMLlocation.replace('%data%', bio.contacts.location));

        formattedContacts.forEach(function(contact) {
            $('#topContacts').append(contact);
            $('#footerContacts').append(contact);
        });

        if (bio.length !== 0) {
            $('#header').append(HTMLskillsStart);

            bio.skills.forEach(function(skill) {
                var formattedSkills = HTMLskills.replace('%data%', skill);
                $('#skills').append(formattedSkills);
            });
        }
    }
};

var education = {
    'schools': [{
        'name': 'Rice University',
        'location': 'Houston, TX',
        'degree': 'Bachelor of Science',
        'majors': ['Chemical Engineering'],
        'dates': '2016',
        'url': 'https://chbe.rice.edu/',
    }],
    'onlineCourses': [{
        'title': 'Front-End Web Developer Nanodegree',
        'school': 'Udacity',
        'dates': '2016',
        'url': 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001',
    }, {
        'title': 'Machine Learning Engineer Nanodegree',
        'school': 'Udacity',
        'dates': '2016',
        'url': 'https://www.udacity.com/course/machine-learning-engineer-nanodegree--nd009',
    }, {
        'title': 'Self Driving Car Nanodegree',
        'school': 'Udacity',
        'dates': '2017',
        'url': 'https://www.udacity.com/course/self-driving-car-engineer-nanodegree--nd013',
    }],
    display: function() {
        if (education.schools.length !== 0) {
            education.schools.forEach(function(education) {
                $('#education').append(HTMLschoolStart);

                var formattedSchoolName = HTMLschoolName.replace('%data%', education.name).replace('#', education.url);
                var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.location);
                var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.degree);
                var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.majors);
                var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.dates);

                $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);
                $('.education-entry:last').append(formattedSchoolDates);
                $('.education-entry:last').append(formattedSchoolLocation);
                $('.education-entry:last').append(formattedSchoolMajor);
            });
        }

        if (education.onlineCourses.length > 0) {
            $('#education').append(HTMLonlineClasses);
            education.onlineCourses.forEach(function(education) {
                $('#education').append(HTMLschoolStart);

                var formattedOnlineTitle = HTMLonlineTitle.replace('%data%', education.title).replace('#', education.url);
                var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.school);
                var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.dates);
                var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.url).replace('#', education.url);

                $('.education-entry:last').append(formattedOnlineTitle + formattedOnlineSchool);
                $('.education-entry:last').append(formattedOnlineDates);
                $('.education-entry:last').append(formattedOnlineURL);
            });
        }
    }
};

var work = {
    'jobs': [{
        'employer': 'Rice University Soft Matter Research Group',
        'title': 'Research Assistant',
        'location': 'Houston, TX',
        'dates': '2013 - 2016 (2.5 years)',
        'description': 'Assisted ongoing chemical engineering projects.'
    }, {
        'employer': 'Rice University Center of Language & Intercultural Communications',
        'title': 'Korean Tutor',
        'location': 'Houston, TX',
        'dates': '2014 - 2016 (2 years)',
        'description': 'Assisted undergraduate students with acquiring Korean painlessly.'
    }, {
        'employer': 'Republic of Korean Army',
        'title': 'Sergeant',
        'location': 'Yangju city, South Korea',
        'dates': '2010 - 2012 (2 years)',
        'description': 'Conducted duties as an Administrative clerk and a squad commander.'
    }],
    display: function() {
        $('#workExperience').append(HTMLworkStart);

        work.jobs.forEach(function(job) {
            var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
            var formateedTitle = HTMLworkTitle.replace('%data%', job.title);
            var formattedEmployerTitle = formattedEmployer + ' ' + formateedTitle;
            var formattedDates = HTMLworkDates.replace('%data%', job.dates);
            var formattedWorkLocation = HTMLworkLocation.replace('%data',job.location);
            var formattedDescription = HTMLworkDescription.replace('%data%', job.description);

            $('.work-entry:last').append(formattedEmployerTitle);
            $('.work-entry:last').append(formattedDates);
            $('.work-entry:last').append(formattedWorkLocation);
            $('.work-entry:last').append(formattedDescription);
        });
    }
};

var projects = {
    'projects': [{
        'title': 'Research Assistant',
        'dates': '2014',
        'description': 'Simulated a chemically hazardous experiment using a simulation software.',
        'images': ['images/wafer-etching.png']
    }, {
        'title': 'Research Assistant',
        'dates': '2014-2016',
        'description': 'Particle deposition/aggregation projects.',
        'images': ['images/oil-recovery.png']
    }],
    display: function() {
        if (projects.projects.length !== 0) {
            projects.projects.forEach (function(each_project) {
                $('#projects').append(HTMLprojectStart);

                var formattedProjectTitle = HTMLprojectTitle.replace('%data%', each_project.title).replace('#', each_project.url);
                var formattedProjectDates = HTMLprojectDates.replace('%data%', each_project.dates);
                var formattedProjectDescription = HTMLprojectDescription.replace('%data%', each_project.description);

                $('.project-entry:last').append(formattedProjectTitle);
                $('.project-entry:last').append(formattedProjectDates);
                $('.project-entry:last').append(formattedProjectDescription);

                each_project.images.forEach (function(project_image) {
                    var formattedProjectImage = HTMLprojectImage.replace('%data%', project_image);
                    $('.project-entry:last').append(formattedProjectImage);
                });
            });
        }
    }
};

$('#mapDiv').append(googleMap);

bio.display();
education.display();
work.display();
projects.display();
