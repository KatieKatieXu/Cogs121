
## Writeup

[ui skeleton shots here]

[writen explanation of how UI skeleton screenshots have improved upon prev versions]
Since the last milestone, we have added more information about each class as well as displayed it all using more database calls instead of hard-coded strings in the front end. As our application is very small in terms of pages, we haven't added any pages or changed how the existing content is displayed, but as we build up our database, our UI includes more and more information in a formatted way that is easy for the user to read.

[description of approach to addressing user privacy]
In a sense, our application aligns closest to freely-available open data as it uses class information about university classes, which are for the most part displayed on websites available via a google search or unviersity website. By focusing our project on this openly available data instead of data about a student such as grades, progress, etc., we limit our danger of compromising the privacy. Once we implement user profiles to allow students to view the classes they are enrolled in, this brings in an element of personal data as it is information on the education of an individual, we will be able to focus on security. This comes in with logins equipped with passwords, email verification, or alternate verification. At this stage, we would be able to display a user's grades and progress within the confines of their own login-protected account. 

[data visualization plan]
For the next milestone, we plan to visualize our data in a clean grid of information that is readily available for the user to find what they are looking for. 

## Functionality / Explanation

- Choose a DB, explain that choice
    Chose SQLite for it's ease of use and ubiquitous nature. Professor provided ample video resources which would aide us in implementation.
- Demo Ajax interaction
- relevant DB functionality
- show -- via chrome inspector -- data passing between frontend and DB
- Visualization plan

## DB setup


class database item:
  name
  logistics info
    locations
    times
  calendar
  sidebar
    regular notifications
    alerts
    help/FAQ

  syllabus info
    grading policy
    academic integrity 
    Resources 
      link 1
      link 2 
      ...
